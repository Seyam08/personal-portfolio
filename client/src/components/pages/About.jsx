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
            Dhaka, Bangladesh. Currently immersed in mastering the Full-stack.
            My true passion lies in coding and development. Skilled in
            JavaScript, React.js, NextJS, Redux, TypeScript, Tailwind CSS,
            Express.js, REST APIs, and tools like JWT, RTK Query, Multer,
            Git/GitHub. Currently honing expertise in the Full-stack and eager
            to contribute to innovative projects that solve real-world problems.
            Committed to continuous learning and growth in both frontend and
            backend development.
          </Paragraph>
          <Paragraph customClass={"mb-3"}>
            📚 Learning is a never-ending journey for me. I may have a bit of
            WordPress experience under my belt, but my passion lies in exploring
            the limitless possibilities of web development. I&apos;m motivated
            to learn more about frontend, backend, and DevOps technologies. I'm
            interested in learning more about the Software Development Life
            Cycle (SDLC) and different methodologies like Agile. I want to
            understand how teams use these processes to plan, build, and deliver
            software effectively.
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
