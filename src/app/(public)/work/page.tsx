import ProjectInfo from "@/components/modules/work/ProjectInfo";
import { IWorkSlides } from "@/types/types";


const Work = async() => {
    
   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/project`,{
      next:{
         tags:["refetchWorks"]
      }
   })

   const {data} = await res.json()
   const workSlides = data.find((item:IWorkSlides)=> item.id == 1)
   // console.log(workSlides.slides)

    return (
       <>
          <div id='work' className='my-20 lg:py-10 text-center'>
          {/* <PartiClesContainer></PartiClesContainer> */}
            <div className='container mx-auto'>
               <ProjectInfo key={workSlides.id} workSlides={workSlides}></ProjectInfo>
            </div>
        </div>

       </>
    );
};

export default Work;