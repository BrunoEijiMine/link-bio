export function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-[724px] p-16 max-[1200px]:p-8">
      {children}
    </div>
  );
}