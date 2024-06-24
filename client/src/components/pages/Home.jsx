import image from "../../assets/image/IMG_20240319_031130-removebg.png";
import Emoji from "../subComponents/Emoji";
import Heading from "../subComponents/Heading";
import Paragraph from "../subComponents/Paragraph";
import Title from "../subComponents/Title";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-row">
        <div className="max-w-xl basis-3/4">
          <Emoji>👋</Emoji>
          <Heading>Hello there! I&apos;m John</Heading>
          <Paragraph customClass={"my-3"}>
            I&apos;m a full-stack developer that loves building products and web
            apps that can impact millions of lives I&apos;m a senior software
            engineer with 7 years of experience building scalable web apps that
            are performance optimized and good looking.
          </Paragraph>
        </div>
        <div className="basis-1/4 flex items-end justify-end px-2">
          <div className="w-40 h-40">
            <img
              className="p-1 rounded-full ring-4 ring-cyan-300"
              src={image}
              alt="Seyam-Dev"
            />
          </div>
        </div>
      </div>

      <Title customClass={"mt-10"}>What I&apos;ve been working on</Title>
    </Layout>
  );
}
