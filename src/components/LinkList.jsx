import { useEffect, useState } from "react";
import { LinkCard } from "./LinkCard";
import { LinkCardSkeleton } from "./LinkCardSkeleton";

export function LinkList({ links }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <LinkCardSkeleton key={link.id} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 animate-[fade-in_0.3s_ease-out]">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          icon={link.icon}
          title={link.title}
          description={link.description}
          href={link.href}
          disabled={link.disabled}
          color={link.color}
          isNew={link.isNew}
        />
      ))}
    </div>
  );
}
