import TypingHeading from "../components/TypingHeading";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen bg-gradient-to-b from-amber-100 via-rose-200 to-pink-100 flex flex-col justify-center items-center text-[#403035] pt-0">
            <h1 h1 className="text-5xl md:text-7xl font-bold mb-4" > Hi, I'm Lindsey</h1>
            < TypingHeading />
            <a href="#about" className="mt-8 px-6 py-3 border-2 border-white rounded hover:bg-white hover:text-black transition">Learn more ↓</a>
        </section >

    );
}
