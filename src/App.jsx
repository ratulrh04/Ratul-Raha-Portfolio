
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Service from "./pages/Service";
import Skill from "./pages/Skill";


const App = () => {
// project section props start here :-
let projectInfoOne = {
  imgOne: '../public/images/screencapture-localhost-5174-2026-03-02-03_09_40.png',
  headingOne: 'Astronaut ',
  paraOne: 'Astronaut project create by React js'
}
let projectInfoTwo = {
  imgTwo: '../public/images/megamart.png',
  headingTwo: 'Megamart',
  paraTwo: 'E-commerce onepage layout create by Next.js'
}
let projectInfoThree = {
  imgThree: '../public/images/text-utils.png',
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
   peraOne : "text ever since the 1500s, when an unknown printer to make a type specimen book. It has survived not only five centuries"
}
let serviceInfoTwo = {
   iconTwo : "fa-solid fa-mobile-screen",
   serviceHeadingTwo : "Fully Responsive",
   peraTwo : "text ever since the 1500s, when an unknown printer to make a type specimen book. It has survived not only five centuries"
}
let serviceInfoThree = {
   iconThree : "fa-solid fa-code",
   serviceHeadingThree : "Development",
   peraThree : "text ever since the 1500s, when an unknown printer to make a type specimen book. It has survived not only five centuries"
}
let serviceInfoFour = {
   iconFour : "fa-solid fa-cubes",
   serviceHeadingFour : "Creative Design",
   peraFour : "text ever since the 1500s, when an unknown printer to make a type specimen book. It has survived not only five centuries"
}
let serviceInfoFive = {
   iconFive : "fa-solid fa-lightbulb",
   serviceHeadingFive : "Smart Tecnology",
   peraFive : "text ever since the 1500s, when an unknown printer to make a type specimen book. It has survived not only five centuries"
}
let serviceInfoSix = {
   iconSix : "fa-solid fa-ranking-star",
   serviceHeadingSix : "Branding",
   peraSix : "text ever since the 1500s, when an unknown printer to make a type specimen book. It has survived not only five centuries"
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