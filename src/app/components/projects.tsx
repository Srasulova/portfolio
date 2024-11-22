import ProjectArticle from "./projectArticle";

export default function Projects() {
    const projects = [
        {
            title: "MoneyBall",
            description: "App provides users with up-to-date baseball statistics and standings. Users can log in, sign up, and track their favorite teams and players.",
            teckStack: "Next.js, TypeScript, Tailwind CSS, Node.js, Express, Postgres, Jest",
            githubURL: "https://github.com/Srasulova/Moneyball",
            img: "/moneyball.png",
            url: ""
        },
        {
            title: "Ratatouille",
            description: "Users can search restaurants by address, location, or zip code, create lists for wishlist, favorites, and visited spots, and manage notes and reviews.",
            teckStack: "Python, Flask, SQLite, SQLAlchemy, Jinja, JavaScript, Tailwind CSS",
            githubURL: "https://github.com/Srasulova/Ratatouille",
            img: "/ratatouille.png",
            url: ""
        },
        {
            title: "Wombot Cohort Project",
            description: "AI-driven facial recognition secures access by identifying authorized users, recording attempts, enabling overrides, and sending real-time alerts for unauthorized entries.",
            teckStack: "Next.js, TypeScript, Tailwind CSS, Java, Python, Flask, DynamoDB, AWS",
            githubURL: "https://github.com/allaboutmike/dsd-team-wombat",
            img: "/wombot.png",
            url: ""
        },
        {
            title: "Jobly",
            description: "An application for users to search companies, explore job listings, apply for positions, and view salary ranges.",
            teckStack: "React.js, CSS, Node.js, Express, Postgres, Jest",
            githubURL: "https://github.com/Srasulova/react-jobly",
            img: "/jobly.png",
            url: ""
        },
        {
            title: "Twitter clone",
            description: "A social media app where users can follow others, post comments, and connect with friends.",
            teckStack: "Python, Flask, Jinja, SQLite, Bootstrap",
            githubURL: "https://github.com/hatchways-community/twitter-clone-69a69673e2994a10846770b8da7c4411",
            img: "/twitterClone.png",
            url: ""
        }
    ];

    return (
        <>
            <div className="bg-white my-8 sm:my-20" id="projects">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl mb-10 font-bold tracking-wide text-cyan-600 sm:text-4xl">&#60;Projects &#47;&#62;</h2>
                        <p className="mt-2 text-base text-zinc-700">I have more projects on GitHub, check them out and feel free to share your feedback.</p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <ProjectArticle
                                key={index}
                                title={project.title}
                                description={project.description}
                                teckStack={project.teckStack}
                                githubURL={project.githubURL}
                                img={project.img}
                                url={project.url}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
