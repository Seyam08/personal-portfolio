import { Outlet } from "react-router-dom";
import Footer from "./subComponents/Footer";
import Header from "./subComponents/Header";
import Layout from "./subComponents/Layout";

export default function Wrapper() {
  return (
    <div className="bg-primary md:pt-5 min-h-screen">
      <Header />
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </div>
  );
}
