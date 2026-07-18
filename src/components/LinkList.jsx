import { LinkCard } from "./LinkCard";

export function LinkList({ links }) {
  return (
    <div className="flex flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          icon={link.icon}
          title={link.title}
          description={link.description}
          href={link.href}
          disabled={link.disabled}
        />
      ))}
    </div>
  );
}