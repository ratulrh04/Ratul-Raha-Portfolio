
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skill from "./pages/Skill";


const App = () => {
// project section props
let projectInfoOne = {
  imgOne: '../../public/images/blog.jpg',
  headingOne: 'Blog Desing',
  paraOne: 'This project desing about a blog desing'
}

  return (
    <div>
      <Home/>
      <About/>
      <Skill/>
      <Project {...projectInfoOne}/>
      <Contact/>
    </div>
  );
};

export default App;