export default function MembersSection({ members }) {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-xl font-bold text-gray-900">
          Associations membres
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Les associations membres du réseau Kultura.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.logo}
                alt={member.name}
                className="h-16 w-16 shrink-0 rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.location}</p>
                <p className="mt-1 text-sm text-gray-600">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
