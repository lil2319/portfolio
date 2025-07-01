import AnimatedSection from '../components/AnimatedSection';

const projects = [
    {
        title: "WasteNot",
        description: "Full-stack web app built in a team setting to help users reduce food waste by tracking inventory, suggesting recipes, and providing composting resources.",
        url: "https://www.wastenotkitchen.com/",
        tech: ["FastAPI", "React", "PostgreSQL", "Spoonacular API", "Google Maps API"],
    },
    {
        title: "Storybound",
        description: "A web application that generates personalized book recommendations using AI. Users input a favorite book and receive curated suggestions based on theme, tone, and content.",
        url: "https://storybound.ai",
        tech: ["React", "JavaScript", "FastAPI", "Python", "OpenAI API", "OpenLibrary API"],
    },
    {
        title: "Pokemon Explorer",
        description: "A mobile-first SPA that displays dynamic Pokémon data from the PokéAPI, featuring infinite scroll, real-time search, and theme toggling.",
        url: "https://lil2319.github.io/Pokemon-explorer",
        tech: ["React", "JavaScript", "React Router", "HTML", "CSS", "PokeAPI"],
    },
];

export default function Projects() {
    return (
        <AnimatedSection id="projects" delay={0.5} className="bg-gradient-to-b from-white via-rose-50 to-amber-50
 text-[#5a4a4f]">
            <div className="w-full max-w-5xl px-4 md:px-8">
                <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
                <p className="max-w-2xl text-center mx-auto mb-12">
                    Here are some of my favorite projects that showcase my skills in front-end and back-end development.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map(({ title, description, url, tech }) => (
                        <a
                            key={title}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition border border-gray-200"
                        >
                            <h3 className="text-xl font-semibold mb-2">{title}</h3>
                            <p className="mb-4 text-[#a08c91]">{description}</p>
                            <div className="flex flex-wrap gap-2">
                                {tech.map((techItem) => (
                                    <span
                                        key={techItem}
                                        className="text-xs bg-rose-100 text-[#2e2326] px-2 py-1 rounded"
                                    >
                                        {techItem}
                                    </span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
