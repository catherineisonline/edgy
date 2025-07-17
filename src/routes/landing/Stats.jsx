import StatsCover from '../../assets/images/instagram-preview.jpg'
import companyStats from '../../data/companyStats'

export default function Stats() {
  return (
    <article className="relative bg-gray-900">
      <section className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <section className="h-full w-full xl:grid xl:grid-cols-2 max-w-7xl mx-auto">
          <section className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src={StatsCover}
              alt=""
              aria-hidden="true"
            />
            <section
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </section>
        </section>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <section className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold text-[color:var(--primary-font-color)] tracking-wide uppercase">
            Valuable Metrics
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            TRUSTED BY THOUSANDS OF BUSINESS OWNERS
          </p>
          <p className="mt-5 text-lg text-gray-300">
            Whereas almost every other provider in the market is using bots,
            scripts, or automation software to grow your account and offer
            ridiculous growth, our team is 100% compliant with Instagram’s terms
            of service. We’re an agency that believes in doing things the right
            way. Don’t risk your account with those other shady providers.
          </p>
          <section className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {companyStats.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">
                  {item.stat}
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">{item.title}</span>{' '}
                  {item.desc}
                </span>
              </p>
            ))}
          </section>
        </section>
      </section>
    </article>
  )
}
