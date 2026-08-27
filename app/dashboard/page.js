import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SignOutButton from "@/components/SignOutButton";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Bonjour, {session.user?.name}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Votre espace membre. La gestion de vos produits arrive bientôt
            ici.
          </p>
        </div>
        <SignOutButton />
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
