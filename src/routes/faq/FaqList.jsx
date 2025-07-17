import React from "react";
import { Disclosure } from "@headlessui/react";
import faq from "../../data/faq";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FaqList() {
  return (
    <dl className="mt-6 space-y-6 ">
      {faq.map((faq) => (
        <Disclosure as="div" key={faq.question} className="pt-6">
          {({ open }) => (
            <React.Fragment>
              <dt className="text-lg">
                <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                  <span className="font-medium text-white">{faq.question}</span>
                  <span className="ml-6 h-7 flex items-center">
                    <svg
                      className={classNames(
                        open ? "-rotate-180" : "rotate-0",
                        "h-6 w-6 transform"
                      )}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base text-gray-500">{faq.answer}</p>
              </Disclosure.Panel>
            </React.Fragment>
          )}
        </Disclosure>
      ))}
    </dl>
  );
}
