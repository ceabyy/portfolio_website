import { motion, type Variants } from 'framer-motion';

type Props = {
    school: string
    date: string
    details: string[] /* replace with string[] later on */ 
}

// handles animations for motion.
const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const NestedContainer: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2        
        }
    }
};

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
    hidden: { opacity: 0, x:-40 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
};

function EducationCard({ school, date, details }: Props) {
    return (
        <motion.div variants={ container }
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3}}
                    className="pb-[4%]">
            <motion.h1 variants={ item }
                        className="text-[20px] 
                            text-white 
                            font-bold 
                            flex 
                            items-start"> {school.toUpperCase()} </motion.h1>
            <motion.h1 variants={ item } 
                        className="text-[20px] 
                            text-white
                            italic 
                            flex 
                            items-start"> {date} </motion.h1>
            <motion.div variants={ item }
                        className="text-[20px] 
                            font-light
                            text-white 
                            flex 
                            flex-col
                            items-start 
                            pt-[5%]"> 
                            {details.map((detail) => (
                                <p key={detail}> { detail } </p>
                            ))} 
            </motion.div>
        </motion.div>
    )
}

export default EducationCard