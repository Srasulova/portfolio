import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer className="relative w-screen">
                <div className="absolute inset-0 z-10">
                    <Image
                        src={'/talkIsCheapBG.jpg'}
                        alt=""
                        className="h-full w-full object-cover object-bottom blur-sm"
                        width={50}
                        height={50}
                    />
                    <div className="absolute inset-0 bg-black opacity-35"></div> {/* Dark tint layer */}
                </div>
                <div className='w-full h-2/5 pt-24 pb-14 px-2 sm:px-16 md:px-32 lg:px-56 text-center relative z-10'>
                    <p className="text-5xl font-semibold text-white">“Talk is cheap. Show me the code.”</p>
                    <p className="mt-6 text-xl leading-8 text-gray-100 tracking-wider italic">- Linus Torvalds</p>
                </div>

                <div className="mx-auto max-w-7xl overflow-hidden px-6 pb-16 lg:px-8 relative z-10">
                    <nav className="-mb-6 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                        <div className="pb-3">
                            <a href="#aboutMe" className="text-sm leading-6 text-zinc-100 hover:text-cyan-300">About me</a>
                        </div>
                        <div className="pb-3">
                            <a href="#projects" className="text-sm leading-6 text-zinc-100 hover:text-cyan-300">Projects</a>
                        </div>
                        <div className="pb-3">
                            <a href="#contacts" className="text-sm leading-6 text-zinc-100 hover:text-cyan-300">Contacts</a>
                        </div>
                    </nav>
                    <div className="mt-6 flex items-center justify-center space-x-10">
                        <a href="https://github.com/srasulova" className="text-white hover:text-cyan-400">
                            <span className="sr-only">GitHub</span>
                            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/sabina-rasulova-b293b2aa/" className="text-white hover:text-cyan-400">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-7 w-7" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
