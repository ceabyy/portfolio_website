function Links() {

    return(
        <div className="h-dvh flex flex-col items-start justify-center snap-y pl-[20%]">
            <h1 className="text-[40px] font-bold text-white pb-[2%]"> LINKS. </h1>
                <a href = "https://github.com/ceabyy" target="_blank" className="text-[20px] 
                                                                                font-light 
                                                                                underline 
                                                                                text-[#FED6D6] 
                                                                                text-underline 
                                                                                transition-colors 
                                                                                duration-300 
                                                                                ease-in-out 
                                                                                hover:text-white 
                                                                                hover:font-bold"> GITHUB </a>
                <a href = "https://www.linkedin.com/in/ceaby/" target="_blank" className="text-[20px] 
                                                                                        font-light 
                                                                                        underline 
                                                                                        text-[#FED6D6] 
                                                                                        text-underline 
                                                                                        transition-colors 
                                                                                        duration-300
                                                                                        hover:text-white 
                                                                                        hover:font-bold"> LINKEDIN </a>
                <a href = "https://www.youtube.com/@ceaby." target="_blank" className="text-[20px]
                                                                                        font-light
                                                                                        underline 
                                                                                        text-[#FED6D6] 
                                                                                        text-underline 
                                                                                        transition-colors 
                                                                                        duration-300 
                                                                                        hover:text-white 
                                                                                        hover:font-bold"> YOUTUBE </a>      
        </div>
    )
}

export default Links