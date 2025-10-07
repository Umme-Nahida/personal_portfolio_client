import ProjectInfo from "@/components/modules/work/ProjectInfo";


const Work = async() => {
    
   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`,{
      next:{
         tags:["refetchWorks"]
      }
   })

   const {data} = await res.json()

    return (
       <>
          <div id='work' className='my-20 lg:py-10 text-center'>
          {/* <PartiClesContainer></PartiClesContainer> */}
            <div className='container mx-auto'>
               <ProjectInfo workSlides={data}></ProjectInfo>
            </div>
        </div>

       </>
    );
};

export default Work;