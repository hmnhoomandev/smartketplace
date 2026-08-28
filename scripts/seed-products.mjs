// Importe les 12 produits de démonstration (data/products.js) dans la base
// de données réelle, rattachés au compte administrateur.
// Usage : node scripts/seed-products.mjs (ou npm run seed-products)
import { config } from "dotenv";
config({ path: ".env.local" });
import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../app/generated/prisma/client.ts";
import ws from "ws";
import { products as mockProducts } from "../data/products.js";

neonConfig.webSocketConstructor = ws;
const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const TYPE_MAP = {
  physical: "PHYSICAL",
  digital: "DIGITAL",
  service: "SERVICE",
};

async function main() {
  const admin = await prisma.member.findFirst({ where: { role: "ADMIN" } });
  if (!admin) {
    throw new Error(
      "Aucun compte admin trouvé — lancez d'abord npm run create-admin."
    );
  }

  let created = 0;
  let skipped = 0;

  for (const mock of mockProducts) {
    const existing = await prisma.product.findFirst({
      where: { title: mock.title, ownerId: admin.id },
    });
    if (existing) {
      skipped++;
      continue;
    }

    const isPhysical = mock.type === "physical";

    await prisma.product.create({
      data: {
        title: mock.title,
        description: mock.description,
        price: mock.price,
        currency: mock.currency,
        category: mock.category,
        location: mock.location,
        type: TYPE_MAP[mock.type] || "PHYSICAL",
        image: mock.image,
        quantity: 1,
        shippingAvailable: isPhysical,
        shippingDelay: isPhysical ? "3-5 jours" : null,
        ownerId: admin.id,
      },
    });
    created++;
  }

  console.log(`Créés : ${created}, déjà présents (ignorés) : ${skipped}.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
