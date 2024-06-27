import ContactInfo from "../subComponents/ContactInfo";
import Heading from "../subComponents/Heading";
import Paragraph from "../subComponents/Paragraph";
import TechStack from "../subComponents/TechStack";
import Title from "../subComponents/Title";

export default function About() {
  return (
    <>
      <Heading customClass={"animate-up"}>About</Heading>
      <Title customClass={"animate-up"}>A glimpse into me.</Title>

      {/* about */}
      <div className="flex flex-col gap-4 mt-10 md:flex-row md:gap-9">
        <Title customClass={"animate-up md:basis-2/12"}>About</Title>
        <div className="animate-up md:basis-10/12">
          <Paragraph customClass={"mb-3"}>
            👋 Hi there! I&apos;m a passionate web application developer from
            Dhaka, Bangladesh. Currently immersed in mastering the MERN stack.
            While my academic roots are in BBA, my true passion lies in coding
            and development. My expertise spans JavaScript, React.js, Redux,
            Tailwind.css, HTML, CSS, Git, GitHub and foundational Express.js and
            REST APIs.
          </Paragraph>
          <Paragraph customClass={"mb-3"}>
            📚 Learning is a never-ending journey for me. I may have a bit of
            WordPress experience under my belt, but my passion lies in exploring
            the limitless possibilities of web development. I&apos;m motivated
            to learn more about Typescript, OOP, DSA, backend technologies, and
            front-end technologies. I am also eager to expand my knowledge by
            learning a full-stack framework like Next.js.
          </Paragraph>
          <Paragraph customClass={"mb-3"}>
            💬 Being a continuous learner and an avid explorer of the web
            development industry, I thrive on new challenges and opportunities
            to grow. I am always excited to connect with fellow professionals,
            share knowledge, and explore collaboration possibilities. <br />
            👉 Feel free to connect with me to discuss web development, share
            insights, or collaborate on exciting projects.
          </Paragraph>
        </div>
      </div>
      {/* Tech Stacks */}
      <div className="flex flex-col gap-4 mt-10 md:flex-row md:gap-9">
        <Title customClass={"animate-up  md:basis-2/12"}>Tech Stack</Title>
        <TechStack customClass={"animate-up md:basis-10/12"} />
      </div>
      {/* Contact  */}
      <div className="flex flex-col gap-4 mt-10 md:flex-row md:gap-9">
        <Title customClass={"animate-up md:basis-2/12"}>Contact</Title>
        <ContactInfo customClass={"animate-up md:basis-10/12"} />
      </div>
    </>
  );
}
