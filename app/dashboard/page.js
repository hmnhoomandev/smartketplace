import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import SignOutButton from "@/components/SignOutButton";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const productCount = await prisma.product.count({
    where: { ownerId: session.user.id },
  });

  return (
    <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Bonjour, {session.user?.name}
          </h1>
          <p className="mt-1 text-sm text-gray-500">Votre espace membre.</p>
        </div>
        <SignOutButton />
      </div>

      <div className="mt-6 rounded-lg border border-gray-200 p-5">
        <h2 className="font-semibold text-gray-900">Mes produits</h2>
        <p className="mt-1 text-sm text-gray-500">
          {productCount} produit{productCount !== 1 ? "s" : ""} publié
          {productCount !== 1 ? "s" : ""}.
        </p>
        <div className="mt-3 flex gap-3">
          <Link
            href="/dashboard/produits"
            className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark"
          >
            Gérer mes produits
          </Link>
          <Link
            href="/dashboard/produits/nouveau"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            + Nouveau produit
          </Link>
        </div>
      </div>

      {session.user?.role === "ADMIN" && (
        <div className="mt-6 flex gap-3">
          <a
            href="/admin/membres"
            className="inline-block rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark"
          >
            Gérer les inscriptions en attente
          </a>
          <a
            href="/admin/membres/tous"
            className="inline-block rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Voir tous les membres
          </a>
        </div>
      )}
    </div>
  );
}
