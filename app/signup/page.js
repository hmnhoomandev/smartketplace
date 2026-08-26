import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <h1 className="text-2xl font-bold text-gray-900">S&apos;inscrire</h1>
      <p className="mt-2 text-gray-600">
        La création de compte n&apos;est pas encore disponible — cette
        fonctionnalité arrive dans une prochaine phase.
      </p>
      <Link
        href="/"
        className="mt-6 text-sm font-medium text-brand hover:underline"
      >
        &larr; Retour à l&apos;accueil
      </Link>
    </div>
  );
}
