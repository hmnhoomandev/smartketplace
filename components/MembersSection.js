function getInitials(name) {
  const words = name.replace(/[()]/g, "").trim().split(/\s+/);
  const first = words[0]?.[0] || "";
  const second = words.length > 1 ? words[1][0] : "";
  return (first + second).toUpperCase();
}

function MemberChip({ member }) {
  const content = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
        {getInitials(member.name)}
      </span>
      <span className="truncate text-sm font-medium text-gray-800">
        {member.name}
      </span>
    </>
  );

  const className =
    "flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 transition-colors hover:border-brand/40 hover:bg-brand-light";

  if (member.url) {
    return (
      <a
        href={member.url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        title={member.name}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={className} title={member.name}>
      {content}
    </div>
  );
}

export default function MembersSection({ members }) {
  return (
    <section id="membres" className="border-t border-gray-200 bg-gray-50 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-xl font-bold text-gray-900">
          Associations membres
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Les {members.length} associations membres du réseau Kultura.
          Cliquez sur une association pour visiter son site (si disponible).
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {members.map((member) => (
            <MemberChip key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
