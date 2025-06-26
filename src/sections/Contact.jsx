import { useForm, ValidationError } from '@formspree/react';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
    const [state, handleSubmit] = useForm("mnnvoeao");

    return (
        <AnimatedSection id="contact" delay={0.5} className="bg-gradient-to-b from-white via-pink-100 to-rose-100 text-[#5a4a4f]">
            <div className="w-full max-w-xl px-4 md:px-8">
                <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
                <p className="max-w-lg mx-auto mb-10 text-center">
                    I’m eager to collaborate or answer any questions. Feel free to reach out by filling the form below or emailing me directly.
                </p>

                {state.succeeded ? (
                    <p className="text-center text-black font-semibold mb-8">
                        Thanks for your message! I’ll get back to you soon.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
                        />

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />

                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Your message"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-rose-400"
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full bg-rose-400 text-[#a08c91] font-semibold py-3 rounded-md hover:bg-rose-500 transition disabled:opacity-50"
                        >
                            {state.submitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                )}

                <div className="mt-10 text-center space-y-2">
                    <p>
                        Or email me directly at{" "}
                        <a href="mailto:lawsonlindsey36@yahoo.com" className="text-rose-600 hover:underline">
                            lawsonlindsey36@yahoo.com
                        </a>
                    </p>
                    <p>
                        Connect on{" "}
                        <a
                            href="https://www.linkedin.com/in/lindseylawson23/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-rose-600 hover:underline"
                        >
                            LinkedIn
                        </a>{" "}
                        or{" "}
                        <a
                            href="https://github.com/lil2319"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-rose-600 hover:underline"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
            </div>
        </AnimatedSection>
    );
}
