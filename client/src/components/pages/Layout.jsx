export default function Layout({ children }) {
  return (
    <div className="lg:pl-2 lg:pt-2 bg-gray-100">
      <div className=" bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200">
        <div className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
          {children}
        </div>
      </div>
    </div>
  );
}
