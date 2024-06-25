export default function Layout({ children }) {
  return (
    <div className="">
      <div className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
        {children}
      </div>
    </div>
  );
}
