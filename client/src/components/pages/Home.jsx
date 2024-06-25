import image from "../../assets/image/profile.png";
import { projects } from "../../constants/project";
import Emoji from "../subComponents/Emoji";
import Heading from "../subComponents/Heading";
import ListItem from "../subComponents/ListItem";
import Paragraph from "../subComponents/Paragraph";
import Title from "../subComponents/Title";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-row">
        <div className="max-w-xl basis-3/4">
          <Emoji customClass={"animate-up"}>👋</Emoji>
          <Heading>Hello there! I&apos;m John</Heading>
          <Paragraph customClass={"my-3 animate-up"}>
            I&apos;m a full-stack developer that loves building products and web
            apps that can impact millions of lives I&apos;m a senior software
            engineer with 7 years of experience building scalable web apps that
            are performance optimized and good looking.
          </Paragraph>
        </div>
        <div className="basis-1/4 flex items-end justify-end px-2">
          <div className="w-40 h-40">
            <img
              className="p-1 rounded-full ring-4 ring-teal-400"
              src={image}
              alt="Seyam-Dev"
            />
          </div>
        </div>
      </div>

      <Title customClass={"mt-14 mb-4 animate_up"}>
        What I&apos;ve been working on
      </Title>
      <div>
        {projects.map((project, key) => {
          const { title, thumbnail, description, stack } = project;
          return (
            <ListItem
              key={key}
              title={title}
              thumbnail={thumbnail}
              description={description}
              stack={stack}
            />
          );
        })}
      </div>
    </Layout>
  );
}
