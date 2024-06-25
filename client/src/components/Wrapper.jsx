import Home from "./pages/Home";
import Header from "./subComponents/Header";

export default function Wrapper() {
  return (
    <div className="bg-primary md:pt-5">
      <Header />
      <Home />
    </div>
  );
}
