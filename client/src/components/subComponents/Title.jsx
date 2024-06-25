export default function Title({ children, customClass }) {
  return (
    <h3
      className={`text-neutral-600 font-bold text-md md:text-lg lg:text-lg ${customClass}`}
    >
      {children}
    </h3>
  );
}
