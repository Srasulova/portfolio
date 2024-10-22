import AboutMe from "./components/aboutMe";
import HeroArea from "./components/hero";
import MyTechStack from "./components/myTeckStack";


export default function Home() {
  return (
    <div >
      <main>
        <HeroArea />
        <AboutMe />
        <MyTechStack />
      </main>
    </div>
  );
}
