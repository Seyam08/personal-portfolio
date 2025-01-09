export default function Layout({ children }) {
  return (
    <div>
      <div className="max-w-4xl 2xl:max-w-6xl w-full mx-auto py-20 px-6 md:px-10">
        {children}
      </div>
    </div>
  );
}
