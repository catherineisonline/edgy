import ContactForm from "./ContactForm";

export default function ContactFormSection() {
  return (
    <section className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2 ">
      <section className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
          Let's work together
        </h2>
        <p className="mt-4 text-lg text-gray-500 sm:mt-3">
          We’d love to hear from you! Send us a message using the contact form
          or email us. We’d love to hear from you!</p>
        <ContactForm />
      </section>
    </section>
  )
}