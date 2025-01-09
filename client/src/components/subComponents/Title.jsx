export default function Title({ children, customClass }) {
  return (
    <h3
      className={`text-secondary font-bold text-md md:text-lg lg:text-lg 2xl:text-xl ${customClass}`}
    >
      {children}
    </h3>
  );
}
