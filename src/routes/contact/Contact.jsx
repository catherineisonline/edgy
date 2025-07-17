import CareerCta from "./CareerCta";
import ContactFormSection from "./ContactFormSection";
import ContactImg from "./ContactImg";

export default function Contact() {
  return (
    <main className="bg-gray-900">
      <article className="relative bg-gray-900">
        <ContactImg />
        <ContactFormSection />
      </article>
      <CareerCta />
    </main>
  );
}
