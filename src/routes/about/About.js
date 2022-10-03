
import Team from "../../components/team/Team";
import Cta from "../../components/cta/Cta";
import AboutOne from "./AboutOne";
import AboutTwo from "./AboutTwo";
import AboutThree from "./AboutThree";


export default function About() {
  return (
    <main className="relative bg-gray-900 py-16 sm:py-24">
    <AboutOne/>
    <AboutTwo/>
    <AboutThree/>
    <Team />
    <Cta />
    </main>
  );
}
