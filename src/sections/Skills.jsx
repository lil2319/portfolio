import AnimatedSection from '../components/AnimatedSection';

const technicalSkills = [
    "Algorithms",
    "Data Structures",
    "Object Oriented Programming",
    "Design Patterns",
    "Full Stack Development",
    "Python",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "SQL",
    "Git",
    "Docker",
];

export default function Skills() {
    return (
        <AnimatedSection id="skills" delay={0.5} className="bg-gradient-to-b from-amber-50 via-pink-50 to-white
 text-[#5a4a4f]">
            <div className="w-full max-w-4xl px-4 md:px-8">
                <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
                <p className="max-w-2xl text-center mx-auto mb-12">
                    These are some of the technical skills I bring to my work as a software engineer.
                </p>

                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {technicalSkills.map((skill) => (
                            <span
                                key={skill}
                                className="bg-rose-100 text-rose-800 px-5 py-2 rounded-full text-sm font-semibold shadow-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
