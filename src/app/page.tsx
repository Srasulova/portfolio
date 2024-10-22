import AboutMe from "./components/aboutMe";
import HeroArea from "./components/hero";
import MyTechStack from "./components/myTeckStack";
import Image from "next/image";
import talkIsCheap from "../../public/talkIsCheapBG.jpg"


export default function Home() {
  return (
    <div >
      <main>
        <HeroArea />
        <AboutMe />
        <MyTechStack />

        <div className='w-screen h-2/5'> {/* Change this line */}
          <div className="relative isolate overflow-hidden">
            <Image src={talkIsCheap} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom blur-sm" />
            <div className="absolute inset-0 bg-black opacity-25"></div> {/* Dark tint layer */}
            <div className="mx-auto py-32 px-2 sm:px-16 md:px-32 lg:px-56 text-center relative z-10">
              <p className="text-5xl font-semibold text-white ">“Talk is cheap. Show me the code.” </p>
              <p className="mt-6 text-xl leading-8 text-gray-100 tracking-wider italic"> - Linus Torvalds</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
