import { motion, type Variants } from 'framer-motion';

// fade
const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

// motion
const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
}

const sidewaysItem: Variants = {
    hidden: { opacity: 0, x:-20 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
};

function Links() {

    return(
        <motion.div variants={ container } 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="h-dvh flex flex-col items-start justify-center snap-y pl-[10%] md:pl-[15%]">
            <motion.h1 variants={ item }className="text-[30px] md:text-[40px] font-bold text-white pb-[2%]"> LINKS. </motion.h1>

            {/* The links are below. */}
            <motion.a variants={ sidewaysItem } 
                        href = "mailto:ceabyfernandez@gmail.com" 
                        className="text-[20px]
                                    font-regular
                                    underline 
                                    text-[#FFE7E7] 
                                    text-underline 
                                    transition-colors 
                                    duration-300 

                                    md:font-light
                                    md:text-[#FED6D6]

                                    hover:text-white 
                                    hover:font-bold"> EMAIL </motion.a>          
            <motion.a variants={ sidewaysItem } 
                        href = "https://github.com/ceabyy" 
                        target="_blank" 
                        className="text-[20px] 
                                    font-regular 
                                    underline 
                                    text-[#FFE7E7] 
                                    text-underline 
                                    transition-colors 
                                    duration-300 
                                    ease-in-out 

                                    md:font-light
                                    md:text-[#FED6D6] 

                                    hover:text-white 
                                    hover:font-bold"> GITHUB </motion.a>
            <motion.a variants={ sidewaysItem }
                        href = "https://www.linkedin.com/in/ceaby/" 
                        target="_blank" 
                        className="text-[20px] 
                                    font-regular
                                    underline 
                                    text-[#FFE7E7] 
                                    text-underline 
                                    transition-colors 
                                    duration-300

                                    md:font-light
                                    md:text-[#FED6D6] 
                            
                                    hover:text-white 
                                    hover:font-bold"> LINKEDIN </motion.a>
            <motion.a variants={ sidewaysItem } 
                        href = "https://www.youtube.com/@ceaby." 
                        target="_blank" 
                        className="text-[20px]
                                    font-regular
                                    underline 
                                    text-[#FFE7E7] 
                                    text-underline 
                                    transition-colors 
                                    duration-300 

                                    md:font-light
                                    md:text-[#FED6D6] 

                                    hover:text-white 
                                    hover:font-bold"> YOUTUBE </motion.a> 
        </motion.div>
    )
}

export default Links