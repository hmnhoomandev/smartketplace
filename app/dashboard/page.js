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
        <a
          href="/admin/membres"
          className="mt-6 inline-block rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark"
        >
          Gérer les inscriptions en attente
        </a>
      )}
    </div>
  );
}
