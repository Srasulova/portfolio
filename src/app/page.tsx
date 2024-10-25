import AboutMe from "./components/aboutMe";
import HeroArea from "./components/hero";
import MyTechStack from "./components/myTeckStack";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contacts from "./components/contacts";


export default function Home() {

  return (
    <div >
      <main>
        <HeroArea />
        <AboutMe />
        <MyTechStack />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}
