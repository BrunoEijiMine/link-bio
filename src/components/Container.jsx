export function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-[724px] flex-1 p-16 max-[1200px]:p-8">
      {children}
    </div>
  );
}