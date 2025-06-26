import AnimatedSection from '../components/AnimatedSection';
import profileImg from '../assets/file.png';

export default function About() {
    return (
        <AnimatedSection id="about" delay={0.3} className="bg-gradient-to-b from-pink-100 via-rose-100 to-white
text-[#5a4a4f]">
            <div className="w-full max-w-5xl px-4 md:px-8">
                <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2 text-lg leading-relaxed space-y-4">
                        <p>
                            Hi! I’m Lindsey, a full stack software engineer currently focused on building meaningful, user-friendly web apps.
                        </p>
                        <p>
                            I discovered coding and fell in love with the creativity and problem-solving it offers. After graduating from Hack Reactor’s immersive bootcamp, I’ve been building full-stack applications using React, Python, SQL, Docker, and more.
                        </p>
                        <p>
                            When I’m not coding, you can usually find me curled up with a good fantasy book, experimenting with a new crochet project, or hanging out with my cat, Charlie, who’s always nearby while I work.
                        </p>
                        <p>
                            I’m endlessly curious, always learning, and love turning ideas into clean, functional code. I thrive on collaboration and creating things that people enjoy using.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src={profileImg}
                            alt="Lindsey headshot"
                            className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-white"
                        />
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
