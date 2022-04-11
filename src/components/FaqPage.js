import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Cta from "./Cta";

const faqs = [
  {
    question: "How Does Edgy work?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum mollis magna vitae fringilla. Pellentesque arcu justo, dictum vitae nibh sit amet, pellentesque scelerisque purus. Donec quis volutpat velit, vel vestibulum nulla. Nulla facilisi. Pellentesque vel elementum urna. Vestibulum massa elit, bibendum ac ligula eget, imperdiet semper magna.",
  },
  {
    question: "How many followers should I expect?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum mollis magna vitae fringilla. Pellentesque arcu justo, dictum vitae nibh sit amet, pellentesque scelerisque purus. Donec quis volutpat velit, vel vestibulum nulla. Nulla facilisi. Pellentesque vel elementum urna. Vestibulum massa elit, bibendum ac ligula eget, imperdiet semper magna.",
  },
  {
    question: "Does my account have to be in specific industry?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum mollis magna vitae fringilla. Pellentesque arcu justo, dictum vitae nibh sit amet, pellentesque scelerisque purus. Donec quis volutpat velit, vel vestibulum nulla. Nulla facilisi. Pellentesque vel elementum urna. Vestibulum massa elit, bibendum ac ligula eget, imperdiet semper magna.",
  },
  {
    question: "Why do I need more followers?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum mollis magna vitae fringilla. Pellentesque arcu justo, dictum vitae nibh sit amet, pellentesque scelerisque purus. Donec quis volutpat velit, vel vestibulum nulla. Nulla facilisi. Pellentesque vel elementum urna. Vestibulum massa elit, bibendum ac ligula eget, imperdiet semper magna.",
  },
  {
    question: "Do you work manually?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum mollis magna vitae fringilla. Pellentesque arcu justo, dictum vitae nibh sit amet, pellentesque scelerisque purus. Donec quis volutpat velit, vel vestibulum nulla. Nulla facilisi. Pellentesque vel elementum urna. Vestibulum massa elit, bibendum ac ligula eget, imperdiet semper magna.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum mollis magna vitae fringilla. Pellentesque arcu justo, dictum vitae nibh sit amet, pellentesque scelerisque purus. Donec quis volutpat velit, vel vestibulum nulla. Nulla facilisi. Pellentesque vel elementum urna. Vestibulum massa elit, bibendum ac ligula eget, imperdiet semper magna.",
  },
  {
    question: "Do you offer any sort of free trial?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum mollis magna vitae fringilla. Pellentesque arcu justo, dictum vitae nibh sit amet, pellentesque scelerisque purus. Donec quis volutpat velit, vel vestibulum nulla. Nulla facilisi. Pellentesque vel elementum urna. Vestibulum massa elit, bibendum ac ligula eget, imperdiet semper magna.",
  },
  {
    question: "What happens after I sign up?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum mollis magna vitae fringilla. Pellentesque arcu justo, dictum vitae nibh sit amet, pellentesque scelerisque purus. Donec quis volutpat velit, vel vestibulum nulla. Nulla facilisi. Pellentesque vel elementum urna. Vestibulum massa elit, bibendum ac ligula eget, imperdiet semper magna.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FaqPage() {
  return (
    <article className="bg-gray-900">
      <section className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <section className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-white">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </section>
      </section>
      <Cta />
    </article>
  );
}
