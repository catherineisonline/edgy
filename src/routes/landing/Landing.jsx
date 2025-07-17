import Hero from "./Hero";
import Partners from "./Partners";
import Feature from "./Feature";
import Cta from "../../components/cta/Cta";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Team from "../../components/team/Team";
import Comparison from "./Comparison";
import Newsletter from "../../components/Newsletter";

function Landing({ loggedIn }) {
  return (
    <article className="bg-gray-900">
      <Hero />
      <Partners />
      <Feature />
      <Cta g loggedIn={loggedIn} />
      <Stats />
      <Pricing loggedIn={loggedIn} />
      <Testimonials />
      <Team />
      <Comparison loggedIn={loggedIn} />
      <Newsletter />
    </article>
  );
}

export default Landing;
