import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "How Does Edgy work?",
    answer:
      "At Edgy, we work diligently to provide you with authentic and organic Instagram growth. Our team of dedicated social media experts manually engages with your target audience, sparking genuine interactions and connections. We use data-driven strategies to optimize your content, hashtags, and posting schedule to ensure maximum visibility and growth. With Edgy, you can expect real, engaged followers who align with your brand's vision.",
  },
  {
    question: "How many followers should I expect?",
    answer:
      "The number of followers you gain depends on various factors, including your current account status, your content quality, and your target audience. While we strive to achieve substantial growth, we prioritize quality over quantity. Rest assured that our strategies focus on attracting relevant followers who are genuinely interested in your content and likely to engage with your posts.",
  },
  {
    question: "Does my account have to be in specific industry?",
    answer:
      "No, your account does not need to be in a specific industry to benefit from our services. We cater to a diverse range of clients, including individuals, businesses, and influencers from various industries. Our team customizes strategies to align with your unique brand identity, ensuring that your Instagram growth is tailored to your specific goals and niche.",
  },
  {
    question: "Why do I need more followers?",
    answer:
      "Instagram followers play a pivotal role in building your online presence and boosting your credibility. Having a substantial follower count not only increases your brand's visibility but also attracts more engagement, potential customers, and collaboration opportunities. More followers can lead to higher brand recognition, expanded reach, and increased influence in your industry.",
  },
  {
    question: "Do you work manually?",
    answer:
      "Absolutely! At Edgy, we take pride in our commitment to authenticity and manual growth. Unlike services that rely on bots or automation, we believe that real people engaging with your audience creates more meaningful connections. Our team manually interacts with potential followers, ensuring genuine engagement and sustainable growth for your account.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Getting started with Edgy is simple. All you need is an active Instagram account and a clear vision of your growth goals. Once you choose one of our Instagram Growth Plans (Standard, Premium, or Business), our team will schedule a consultation to understand your objectives and tailor our strategies accordingly. From there, you can sit back and watch your Instagram presence flourish with our expert guidance and support.",
  },
  {
    question: "Do you offer any sort of free trial?",
    answer:
      "Yes, we do offer a free trial! We understand that you may want to experience the effectiveness of our Instagram growth services before committing to a plan. Our free trial allows you to test our strategies and see the initial impact on your account. During the trial period, you will receive a taste of our services, giving you a glimpse of the potential growth and engagement we can provide. Sign up for our free trial today and discover how Edgy can elevate your Instagram presence.",
  },
  {
    question: "What happens after I sign up?",
    answer:
      "After signing up with Edgy, you take the first step towards unlocking your Instagram potential. Once you choose your desired Growth Plan (Standard, Premium, or Business) and complete the registration process, our team will promptly reach out to you. We will schedule a consultation to understand your unique goals, target audience, and preferences. During this consultation, we'll discuss your brand identity and tailor our strategies to align with your objectives.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FaqList() {
  return (
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
  )
}