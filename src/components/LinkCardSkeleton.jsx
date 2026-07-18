export function LinkCardSkeleton() {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-line bg-card px-5 py-4">
      <div className="h-10 w-10 shrink-0 animate-pulse rounded-xl bg-page" />

      <div className="flex-1 space-y-2">
        <div className="h-3.5 w-24 animate-pulse rounded-full bg-page" />
        <div className="h-3 w-40 animate-pulse rounded-full bg-page" />
      </div>
    </div>
  );
}
