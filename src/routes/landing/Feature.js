import PhoneIcon from '../../assets/images/customer-support.png'
import SecurityIcon from '../../assets/images/security.png'
import FollowerIcon from '../../assets/images/followers.png'
import ContentIcon from '../../assets/images/content-management.png'
import TargetIcon from '../../assets/images/target-audience.png'
import PlanIcon from '../../assets/images/payment-plan.png'

const features = [
  {
    name: 'Flexible plans',
    description:
      'Three kinds of plans which you can test and change anytime. You can also have special plans crafted for you',
    icon: PlanIcon,
  },
  {
    name: 'Targeted audience',
    description:
      'The audience which craves your content day and night. We target people who love your content',
    icon: TargetIcon,
  },
  {
    name: 'Content management',
    description:
      'Organized content and no more messy photo galleries. We will take care of all your content',
    icon: ContentIcon,
  },
  {
    name: 'Organic followers',
    description:
      'Receive real followers on your Instagram profile instantly within minutes. The real people who are ready to engage',
    icon: FollowerIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Real people, real views, real likes and follows. Your account is 100% secure and authentic in any way possible',
    icon: SecurityIcon,
  },

  {
    name: '24/7 support',
    description:
      'Having new ideas and want to impement them asap? We are ready to make your dreams come true 24/7',
    icon: PhoneIcon,
  },
]

export default function Feature() {
  return (
    <article className="relative bg-gray-900 py-16 sm:py-24 lg:py-32">
      <section className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold uppercase tracking-wider text-[color:var(--primary-font-color)]">
          100% handcraft growth
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          #1 Instagram Growth Agency
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Everything you need for your Instagram profile in one complete growth
          plan without spending too much time and effort!
        </p>
        <section className="mt-12">
          <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <section key={feature.name} className="pt-6">
                <section className="flow-root rounded-lg px-6 pb-8">
                  <section className="-mt-6">
                    <section className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                      <img
                        src={feature.icon}
                        alt="/"
                        className="h-6 w-6 text-white cursor-pointer"
                        aria-hidden="true"
                      />
                    </section>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </section>
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
    </article>
  )
}
