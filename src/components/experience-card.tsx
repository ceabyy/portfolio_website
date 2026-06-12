// experience cards for container in experience page

// add props here later on

function ExperienceCard() {
    return (
        <div className="bg-[#FFDADB] flex flex-shrink-0 flex-col justify-center h-[30%] w-full rounded-[50px] p-[15%] md:p-[5%] shadow-xl overflow-y-auto md:overflow-y-hidden">
            <p className="text-[25px] text-[#B73854] font-bold "> COMPANY </p>
            <p className="text-[20px] text-[#B73854] font-light italic -mt-3"> June 2026 - Present</p>
            <p className=" h-[90%] w-full text-[10px] md:text-[15px] text-[#B73854] font-light pt-[1%] break-words"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada aliquam luctus. Fusce maximus tempor laoreet. Integer eget dolor nisl. Suspendisse ultrices sodales elementum. Quisque tempor est rutrum placerat pulvinar. Phasellus in enim vitae odio efficitur iaculis eget eu ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
        </div>
    )
}

export default ExperienceCard