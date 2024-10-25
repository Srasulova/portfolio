import Image from "next/image"
import github from "../../../public/github-mark.png"

export default function ProjectArticle(props: any) {
    return (
        <>
            <article className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                    <Image src={props.img} alt="" className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" width={200} height={200} />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-700/10"></div>
                </div>
                <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <a href={props.githubURL} className="github relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-zinc-600 hover:bg-fuchsia-100 flex items-center gap-3">
                            <i>
                                <Image src={github} alt="github icon" className="w-5 h-5" />
                            </i> View on Github</a>
                    </div>
                    <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-cyan-600">
                            <span className="absolute inset-0"></span>
                            {props.title}
                        </h3>
                        <p className="mt-5 line-clamp-4 text-sm text-zinc-600">{props.description} </p>

                        <p className="mt-5 line-clamp-3 text-sm text-zinc-600"> <span className="font-bold text-fuchsia-500">Teck stack:</span> {props.teckStack} </p>
                    </div>

                </div>
            </article>
        </>
    )
}