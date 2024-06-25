import Home from "./pages/Home";
import Header from "./subComponents/Header";

export default function Wrapper() {
  return (
    <div className="bg-white">
      <Header />
      <Home />
    </div>
  );
}
