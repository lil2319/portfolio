import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AnimatedSection({ id, children, delay = 0.2, className = "" }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.section
            ref={ref}
            id={id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className={`min-h-screen flex flex-col justify-center items-center px-4 ${className}`}
        >
            {children}
        </motion.section>
    );
}
