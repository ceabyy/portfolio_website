
// component to handle the hero section, with name and "portfolio."
function Hero() {
    return (
        <div className="h-dvh 
                        flex
                        flex-col 
                        items-start 
                        justify-center 
                        snap-y 
                        pl-[15%]">

            <h1 className="text-[20px] 
                            text-white

                            md:text-[40px]"> CEABY KIAN FERNANDEZ </h1>
                            
            <h1 className="text-[20px] 
                            md:text-[40px] 
                            font-bold 
                            underline 
                            text-white
                            text-underline 

                            md:-mt-5 "> portfolio.</h1>
        </div>
    )
}

export default Hero