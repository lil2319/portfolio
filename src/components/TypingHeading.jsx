import { Typewriter } from 'react-simple-typewriter';

export default function TypingHeading() {
    return (
        <h2 className="text-3xl md:text-5xl font-medium mt-4">
            <Typewriter
                words={[
                    "Full Stack Software Engineer",
                    "Creative Coder",
                    "Problem Solver",
                    "Cat Lover",
                    "Book Nerd"
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={80}
                delaySpeed={2000}
            />
        </h2>
    );
}
