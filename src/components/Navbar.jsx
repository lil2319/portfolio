export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/50 backdrop-blur-md text-[#403035] shadow-md">
            <ul className="flex justify-center space-x-8 p-7 text-sm font-semibold">
                <li><a href="#about" className="hover:text-[#cbb3b7]">About</a></li>
                <li><a href="#projects" className="hover:text-[#cbb3b7]">Projects</a></li>
                <li><a href="#skills" className="hover:text-[#cbb3b7]">Skills</a></li>
                <li><a href="#contact" className="hover:text-[#cbb3b7]">Contact</a></li>
            </ul>
        </nav>
    );
}
