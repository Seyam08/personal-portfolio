import Footer from "./subComponents/Footer";
import Header from "./subComponents/Header";
import Layout from "./subComponents/Layout";

export default function Wrapper({ components: Components }) {
  return (
    <div className="bg-primary md:pt-5 min-h-screen">
      <Header />
      <Layout>
        <Components />
      </Layout>
      <Footer />
    </div>
  );
}
