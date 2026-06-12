// experience cards for container in experience page

// add props here later on

function ProjectCard() {
    return (
        <div className="bg-[#FFE6F7] 
                        flex 
                        flex-shrink-0 
                        flex-col 
                        justify-start 
                        h-full 
                        w-[40%] 
                        rounded-[50px] 
                        p-[10%] md:p-[3%] 
                        shadow-2xl 
                        overflow-y-auto 

                        md:overflow-y-hidden">
            <p className="text-[20px]  
                        text-[#C178B4] 
                        font-bold 
                        pb-[5%] 

                        md:text-[25px]"> PROJECT </p>
            <div className="bg-[#FFFFFF]
                            text-[#AAAAAA] 
                            h-[200%] 
                            w-[100%]    
                            rounded-[10px]
                            flex
                            flex-col
                            items-center
                            justify-center"> image placeholder </div>
            <p className="text-[15px] md:text-[20px] text-[#C178B4] italic -mt-1 md:-mt-2 pt-[5%]"> Project Details </p>
            <p className=" h-[90%] w-full text-[10px] md:text-[15px] text-[#CB76B1] font-light pt-[5%] md:pt-[1%] break-words"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada aliquam luctus. Fusce maximus tempor laoreet. Integer eget dolor nisl. Suspendisse ultrices sodales elementum. Quisque tempor est rutrum placerat pulvinar. Phasellus in enim vitae odio efficitur iaculis eget eu ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
        </div>
    )
}

export default ProjectCard