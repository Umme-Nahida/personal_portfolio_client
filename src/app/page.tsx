
import MainHome from "./(public)/mainHome/page";
import About from "./(public)/about/page";
import ContactPage from "./(public)/contact/page";
import Work from "./(public)/work/page";
import Service from "./(public)/service/page";

export default function Home() {
  return (
    <div className="font-sans sm:p-20 mx-20">
       
       <MainHome/>
       <About/>
       <Work></Work>
       <Service/>
       <ContactPage/>

    </div>
  );
}
