
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Service from "./pages/Service";
import Skill from "./pages/Skill";
import projectOneImage from "./assets/screencapture-localhost-5174-2026-03-02-03_09_40.png";
import projectTwoImage from "./assets/megamart.png";
import projectThreeImage from "./assets/text-utils.png";

const App = () => {
// project section props start here :-
let projectInfoOne = {
  imgOne: projectOneImage,
  headingOne: 'Astronaut ',
  paraOne: 'Astronaut project create by React js'
}
let projectInfoTwo = {
  imgTwo: projectTwoImage,
  headingTwo: 'Megamart',
  paraTwo: 'E-commerce onepage layout create by Next.js'
}
let projectInfoThree = {
  imgThree: projectThreeImage,
  headingThree: 'Text-Utils',
  paraThree: 'React Text-Utils web app'
}
// let projectInfoFour = {
//   imgFour: '../public/images/ThapaTechnical.png',
//   headingFour: 'E-Commerce',
//   paraFour: 'React single page layot e-commerce'
// }
// let projectInfoFive = {
//   imgFive: '../public/images/color-changer.png',
//   headingFive: 'WebApp',
//   paraFive: 'JavaScript made theme color changer webapp'
// }
// project section props end here :-


// service section props start here:-
let serviceInfoOne = {
   iconOne : "fa-solid fa-display",
   serviceHeadingOne : "Web Design",
   peraOne : "create clean, modern, and visually appealing website designs that improve user experience and attract visitors."
}
let serviceInfoTwo = {
   iconTwo : "fa-solid fa-mobile-screen",
   serviceHeadingTwo : "Fully Responsive",
   peraTwo : "I build fully responsive websites that adapt seamlessly to all devices, ensuring a smooth and consistent user experience everywhere."
}
let serviceInfoThree = {
   iconThree : "fa-solid fa-code",
   serviceHeadingThree : "Development",
   peraThree : "I develop fast, secure, and scalable websites that ensure smooth functionality, high performance, and an excellent user experience across all devices."
}
let serviceInfoFour = {
   iconFour : "fa-solid fa-cubes",
   serviceHeadingFour : "Creative Design",
   peraFour : "I create clean, modern, and visually appealing website designs that enhance user experience, engage visitors, and make brands stand out online."
}
let serviceInfoFive = {
   iconFive : "fa-solid fa-lightbulb",
   serviceHeadingFive : "Smart Tecnology",
   peraFive : "I use modern tools and smart technologies to build efficient, reliable, and high-performing digital solutions that grow with your business."
}
let serviceInfoSix = {
   iconSix : "fa-solid fa-ranking-star",
   serviceHeadingSix : "Branding",
   peraSix : "I create strong, consistent, and memorable brand identities that help businesses connect with customers and grow online."
}
// service section props end here:-



  return (
    <div>
      <Home/>
      <About/>

      <Service {...serviceInfoOne} {...serviceInfoTwo} {...serviceInfoThree} {...serviceInfoFour} {...serviceInfoFive} {...serviceInfoSix}/>

      <Skill/>
      <Project {...projectInfoOne} {...projectInfoTwo} {...projectInfoThree} />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;