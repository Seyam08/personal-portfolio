import ContactInfo from "../subComponents/ContactInfo";
import Heading from "../subComponents/Heading";
import Paragraph from "../subComponents/Paragraph";

export default function Contact() {
  return (
    <>
      <Heading customClass={"animate-up"}>Contact Me</Heading>
      <Paragraph customClass={"mt-5 animate-up"}>
        Reach out to me over email or on any platform. I will get back to you
        ASAP.
      </Paragraph>
      <ContactInfo customClass={"mt-10 animate-up"} />
    </>
  );
}
