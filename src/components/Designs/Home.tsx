import Companies from "./Companies";
import Contact from "./Contact";
import GetInTouch from "./GetInTouch";
import LandingPage from "./LandingPage";
import MorphDetails from "./MorphDetails";
import Services from "./Services";

export default function Home() {
  return (
    <section>
      <section>
        <MorphDetails />
      </section>
      <section>
        <LandingPage />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Companies />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <GetInTouch />
      </section>
    </section>
  );
}
