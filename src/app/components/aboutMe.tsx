import Image from 'next/image'
import helloWorld from "../../../public/helloWorld.jpeg"



export default function AboutMe() {
    return (
        <>
            <div className="bg-white mt-24" id="aboutMe">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-16 lg:mx-0 lg:max-w-none lg:flex-row h-auto" >
                        <div className="w-full lg:max-w-lg lg:flex-auto ">
                            <Image src={helloWorld} alt="" className="aspect-[3/4] w-auto rounded-md bg-gray-50 object-cover " />
                        </div>
                        <div className="w-full lg:max-w-xl lg:flex-auto">

                            <h2 className="text-3xl mb-10 font-bold tracking-wide text-cyan-600 sm:text-4xl">&#60;About me &#47;&#62; </h2>

                            <p className="mb-3 text-zinc-700">Hi, I’m <span className='text-fuchsia-500 font-bold'>Sabina</span>, a web developer with a passion for crafting seamless, user-focused digital experiences. After over 15 years in customer service, I made a significant career shift into tech, driven by a desire to build solutions that make a real impact. I started with self-learning, but to deepen my expertise, I completed a full-stack bootcamp, which solidified my love for development. </p>

                            <p className="mb-3  text-zinc-700">My background in customer service gives me a unique edge — I know how to listen to users and translate their needs into intuitive, polished applications. Whether it’s enhancing existing features or creating new ones, I approach challenges with curiosity and a commitment to continuous improvement.</p>

                            <p className="mb-3  text-zinc-700">While I’m open to roles across the stack, front-end development is where I truly thrive. The blend of creativity and precision energizes me, and I love bringing designs to life with pixel-perfect execution. Juggling the world of tech with motherhood, I’m always ready to embrace new challenges and keep learning along the way.</p>

                            <p className="mb-3  text-zinc-700">Based in Connecticut, I’m seeking entry-level opportunities, internships, or junior roles where I can contribute and grow. If you’re looking for someone with a user-centered mindset and a passion for creating beautiful, functional web experiences, let’s connect!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}