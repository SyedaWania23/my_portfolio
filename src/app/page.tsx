
import Services from "./components/services/Services";
import Education from "./components/education/Education";
import Hero from "./components/hero/Hero";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
export default function Home() {
  return (
    <div>
    <Hero/>
    <Education/>
    <Services/>
    <Project/>
    <Contact/>
    </div>
  );
}
