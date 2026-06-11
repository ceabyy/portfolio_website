import EducationCard from '@/assets/education-card.tsx';

function Education() {

    return(
        <div className="h-dvh flex flex-col items-start justify-center snap-y pl-[20%]">
            <h1 className="text-[30px] text-white font-bold flex pb-[2%]"> EDUCATION </h1>
            <EducationCard 
                school="Tampere University"
                date="August 2022 - December 2025"
                details="Bachelor of Science (Technology))"
            />
            <EducationCard 
                school="Mesaieed International School"
                date="2022-2025"
                details="A-Levels: Computer Science A*, Mathematics A*, Physics A"
            />
        </div>
    )
}

export default Education