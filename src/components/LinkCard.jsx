import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function LinkCard({ icon, title, description, href, disabled, color, isNew }) {
  return (
    <a
      href={disabled ? undefined : href}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "noopener noreferrer"}
      aria-disabled={disabled}
      style={color ? { "--brand": color } : undefined}
      className={`group relative flex items-center gap-4 rounded-2xl border border-line bg-card px-5 py-4 no-underline
        transition-[transform,box-shadow,border-color] duration-150 ease-out
        hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]
        aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50
        ${isNew ? "motion-safe:animate-[card-bounce_1.8s_ease-in-out_infinite] hover:!animate-none" : ""}`}
    >
      {isNew && (
        <span className="absolute -top-2 -right-2 rounded-full bg-badge-fg px-2 py-0.5 text-[11px] font-semibold text-black">
          Novo
        </span>
      )}

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-page text-primary transition-colors group-hover:text-[var(--brand)]">
        <FontAwesomeIcon icon={icon} size="lg" />
      </div>

      <div className="flex-1">
        <p className="text-paragraph font-semibold text-primary">{title}</p>
        <p className="text-paragraph text-secondary">{description}</p>
      </div>

      {!disabled && (
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" className="text-muted" />
      )}
    </a>
  );
}
