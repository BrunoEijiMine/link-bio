export default function Divider({ text }) {
  return (
    <div
      className="my-4 flex items-center text-center text-[13px] text-muted
        before:mr-3 before:flex-1 before:border-t before:border-line before:content-['']
        after:ml-3 after:flex-1 after:border-t after:border-line after:content-['']"
    >
      {text}
    </div>
  );
}