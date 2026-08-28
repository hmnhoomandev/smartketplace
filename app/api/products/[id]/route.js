import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { productSchema } from "@/lib/validation";

async function assertOwnership(id, userId) {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product || product.ownerId !== userId) return null;
  return product;
}

export async function PATCH(request, { params }) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const { id } = await params;
  const existing = await assertOwnership(id, session.user.id);
  if (!existing) {
    return NextResponse.json({ error: "Introuvable." }, { status: 404 });
  }

  const body = await request.json();
  const result = productSchema.safeParse(body);
  if (!result.success) {
    const firstIssue = result.error.issues[0];
    return NextResponse.json(
      { error: firstIssue?.message || "Données invalides." },
      { status: 400 }
    );
  }

  const data = result.data;

  const product = await prisma.product.update({
    where: { id },
    data: {
      title: data.title,
      description: data.description,
      price: data.price,
      category: data.category,
      location: data.location,
      type: data.type,
      image: data.image || null,
      quantity: data.quantity,
      shippingAvailable: data.shippingAvailable,
      shippingDelay: data.shippingAvailable ? data.shippingDelay || null : null,
    },
  });

  return NextResponse.json({ product });
}

export async function DELETE(request, { params }) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const { id } = await params;
  const existing = await assertOwnership(id, session.user.id);
  if (!existing) {
    return NextResponse.json({ error: "Introuvable." }, { status: 404 });
  }

  await prisma.product.delete({ where: { id } });

  return NextResponse.json({ ok: true });
}
