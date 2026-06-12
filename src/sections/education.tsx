import EducationCard from '../components/education-card.tsx';

function Education() {

    return(
        <div className="h-dvh flex flex-col items-start justify-center pl-[20%]">
            <h1 className="text-[30px] text-white font-bold flex"> EDUCATION. </h1>
            <EducationCard
                school="Tampere University"
                date="August 2022 - December 2025"
                details="Bachelor of Science (Technology))"
            />
            <EducationCard 
                school="Mesaieed International School"
                date="2009-2022"
                details="A-Levels: Computer Science A*, Mathematics A*, Physics A"
            />
        </div>
    )
}

export default Education