
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skill from "./pages/Skill";


const App = () => {
// project section props
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

  return (
    <div>
      <Home/>
      <About/>
      <Skill/>
      <Project {...projectInfoOne} {...projectInfoTwo} {...projectInfoThree} />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;