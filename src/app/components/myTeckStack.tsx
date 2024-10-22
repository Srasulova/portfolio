import Image from 'next/image'
import html from "../../../public/HTML5_Badge_256.png"
import css from "../../../public/CSS-Logo-500x313.png"
import JS from "../../../public/javascrtip.png"
import TS from "../../../public/ts-logo-256.png"
import bootstrap from "../../../public/bootstrap.png"
import tailwind from "../../../public/Tailwind CSS.png"
import Ph from "../../../public/Adobe_Photoshop_CC_icon.svg.png"
import reactjs from "../../../public/React_logo_logotype_emblem.png"
import wordpress from "../../../public/WordPress-logotype-simplified.png"
import appsmith from "../../../public/appsmith-logos-idMrtZKhob.png"
import git from "../../../public/Git-Icon-1788C.png"
import sql from "../../../public/Sql_data_base_with_logo.png"
import jest from "../../../public/jest-logo-png-transparent.png"
import jasmine from "../../../public/jasmine-logo-1A0FA4D537-seeklogo.com.png"
import nodejs from "../../../public/Node.js_logo_2015.svg.png"
import python from "../../../public/Python-logo-notext.svg.png"
import postgres from "../../../public/Postgresql_elephant.svg.png"
import jquery from "../../../public/jquery.png"
import express from "../../../public/express-logo-E9DA5D0AF7-seeklogo.com.png"
import flask from "../../../public/flask-icon-1594x2048-84mjydzf.png"


export default function MyTechStack() {
    return (
        <>
            <div className="bg-white my-8 sm:my-16">
                <div className="mx-auto  max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-16 lg:mx-0 lg:max-w-none lg:flex-row h-auto">
                        <div className="w-full lg:max-w-xl lg:flex-auto">
                            <h2 className="text-3xl mb-10 font-bold tracking-wide text-cyan-600 sm:text-4xl">&#60;My Tech Stack &#47;&#62;</h2>
                            <p className="mt-6 mb-3  text-zinc-700">I’m well-versed in a variety of technologies that help me create both seamless user interfaces and robust backend systems.</p>

                            <p className="mb-3  text-zinc-700"><span className='text-fuchsia-500 font-bold'>Front-End Development:</span> I have a strong foundation in HTML, CSS, JavaScript, and TypeScript, with a passion for building intuitive, responsive interfaces. I enjoy working with React.js to create dynamic web applications, and I’m experienced with jQuery, Tailwind CSS, and Bootstrap for crafting clean, efficient designs.</p>

                            <p className="mb-3  text-zinc-700"><span className='text-fuchsia-500 font-bold'>Back-End Development:</span> On the backend, I’m skilled in using Node.js and Express to develop efficient, scalable APIs. I also have experience with Python and Flask for building versatile server-side solutions. My knowledge of SQL and PostgreSQL ensures that data is stored and managed effectively.</p>

                            <p className="mb-3  text-zinc-700"><span className='text-fuchsia-500 font-bold'>Testing & Version Control:</span> Writing reliable, high-quality code is important to me, which is why I’m comfortable using Jest and Jasmine for testing. I also rely on Git/GitHub for version control, ensuring smooth collaboration across teams.</p>

                            <p className="mb-3 text-zinc-700"><span className='text-fuchsia-500 font-bold'>Additional Tools:</span> I’ve worked with WordPress to create user-friendly websites and have a solid understanding of Adobe Photoshop for design tasks. I’m also familiar with Appsmith for building internal tools that streamline workflows.</p>
                        </div>
                        <div className="mx-auto grid w-full max-w-xl grid-cols-4 items-center justify-between gap-y-14 sm:gap-y-14 lg:mx-0 lg:max-w-none ">
                            <Image className="max-h-14 w-full object-contain object-center" src={html} alt="html logo" width="136" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={css} alt="css logo" width="136" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={JS} alt="JS logo" width="136" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={TS} alt="TS logo" width="136" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={jquery} alt="TS logo" width="136" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={reactjs} alt="react logo" width="145" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={tailwind} alt="tailwind logo" width="136" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={bootstrap} alt="bootstrap logo" width="110" height="48" />

                            <Image className="max-h-14 w-full object-contain object-center" src={python} alt="bootstrap logo" width="110" height="48" />
                            <Image className="max-h-16 w-full object-contain object-center" src={flask} alt="bootstrap logo" width="140" height="56" />
                            <Image className="max-h-14 w-4/5 object-contain object-center" src={nodejs} alt="bootstrap logo" width="100" height="48" />
                            <Image className="max-h-14 w-4/5 object-contain object-center" src={express} alt="bootstrap logo" width="110" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={jest} alt="bootstrap logo" width="110" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={jasmine} alt="bootstrap logo" width="110" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={sql} alt="bootstrap logo" width="110" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={postgres} alt="bootstrap logo" width="110" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={git} alt="git logo" width="150" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={wordpress} alt="wordpress logo" width="110" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={Ph} alt="photoshop logo" width="136" height="48" />
                            <Image className="max-h-14 w-full object-contain object-center" src={appsmith} alt="appsmith logo" width="150" height="48" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}