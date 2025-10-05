
import MainHome from "./mainHome/page";
import About from "./about/page";
import ContactPage from "./contact/page";
import Work from "./work/page";
import Service from "./service/page";

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
