import AboutDetails from "@/components/modules/about/AboutDetails";
import { IAboutInfo } from "@/types/types";


const About = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/about`, {
        cache: "force-cache",
    });

    const result = await res.json();

    const aboutInfo = result.data.find((item: IAboutInfo) => item.id === 1)
    // console.log(aboutInfo.skills)

    return (
        <div id="about">
            <AboutDetails key={aboutInfo.id} aboutInfo={aboutInfo}></AboutDetails>
        </div>
    );
};

export default About;