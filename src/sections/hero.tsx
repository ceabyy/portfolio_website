
// component to handle the hero section, with name and "portfolio."
import { motion, type Variants } from 'framer-motion';

const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
}

function Hero() {
    return (
        <motion.div 
            variants={ container }
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3}}
            className="h-dvh 
                        relative
                        flex
                        flex-col 
                        items-start 
                        justify-center 
                        snap-y 
                        z-2
                        pl-[15%]">

            <motion.h1 variants={item} className="text-[20px] 
                            text-white

                            md:text-[40px]"> CEABY KIAN FERNANDEZ </motion.h1>
                            
            <motion.h1 variants={item} className="text-[20px] 
                            md:text-[40px] 
                            font-bold 
                            underline 
                            text-white
                            text-underline 

                            md:-mt-5 "> portfolio.</motion.h1>
        </motion.div>
    )
}

export default Hero