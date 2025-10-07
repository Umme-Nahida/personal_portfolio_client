import AboutDetails from "@/components/modules/about/AboutDetails";
import SkillsSection from "@/components/modules/skill/SkillSection";
import { IAboutInfo } from "@/types/types";


const About = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/about`, {
        cache: "force-cache",
    });

    const result = await res.json();

    const aboutInfo = result.data.find((item: IAboutInfo) => item.id === 1)

    return (
        <div id="about">
            <AboutDetails key={aboutInfo.id} aboutInfo={aboutInfo}></AboutDetails>
            <div className="mt-10 xl:mt-32">
                <SkillsSection skillsData={aboutInfo.skills}></SkillsSection>
            </div>
        </div>
    );
};

export default About;