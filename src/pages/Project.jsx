
import { FaArrowRightLong } from "react-icons/fa6";
import SectionTitle from "../components/SectionTitle";

const Project = (props) => {

   let projectsTitle = {
      name: "Projects"
  };
      
    return (
        <div>
            <section id="Project">
             <div className="container">
                <div className="row " >
                  <SectionTitle {...projectsTitle}/>
 <div className="col-md-4" style={{overflow:'hidden'}}>
    <div className="single-project-wrapper" data-aos="fade-up" data-aos-duration="3000">
                        <a href="https://ratulrh04.github.io/Astronaut-Project/">
                        <div className="img-part">
                            <img src={props.imgOne} alt="Projec-image" />
                         </div>
                         <div className="info-part">
                           <h1>{props.headingOne}</h1>
                           <p>{props.paraOne}</p>
                           <div className="arrow-link">
                             <a href="https://ratulrh04.github.io/Astronaut-Project/"> 
                               <span>Click Here <FaArrowRightLong style={{color:'red'}} /></span>
                             </a>
                           </div> 
                         </div>
                        </a>
                       </div>
                    </div> 
                    
  <div className="col-md-4" style={{overflow:'hidden'}}>
     <div className="single-project-wrapper" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <a href="https://megamart-ecommerce-7ofa.vercel.app/">
                        <div className="img-part">
                            <img src={props.imgTwo} alt="Projec-image" />
                         </div>
                         <div className="info-part">
                           <h1>{props.headingTwo}</h1>
                           <p>{props.paraTwo}</p>
                           <div className="arrow-link">
                             <a href="https://megamart-ecommerce-7ofa.vercel.app/">
                              <span>Click Here <FaArrowRightLong style={{color:'red'}} /></span>
                             </a>
                             
                           </div>  
                         </div>
                        </a>
                       </div>
                    </div>

  <div className="col-md-4" style={{overflow:'hidden'}}>
    <div className="single-project-wrapper"  data-aos="fade-up" data-aos-duration="3000" >
                        <a href="https://ratulrh04.github.io/text-utils/">
                        <div className="img-part">
                            <img src={props.imgThree} alt="Projec-image" />
                         </div>
                         <div className="info-part">
                           <h1>{props.headingThree}</h1>
                           <p>{props.paraThree}</p>
                           <div className="arrow-link">
                             <a href="https://ratulrh04.github.io/text-utils/">
                                  <span>Click Here <FaArrowRightLong style={{color:'red'}} /></span>
                             </a>
                           </div> 
                         </div>
                        </a>
                       </div>
                    </div>
                 </div>
                 
               {/* second row */}
 {/* <div className="row mt-4">            
   <div className="col-md-4" style={{overflow:'hidden'}}>
      <div className="single-project-wrapper" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <a href="https://ratulrh04.github.io/react-ecommerce/">
                        <div className="img-part">
                            <img src={props.imgFour} alt="Projec-image" />
                         </div>
                         <div className="info-part">
                           <h1>{props.headingFour}</h1>
                           <p>{props.paraFour}</p>
                           <div className="arrow-link">
                             <a href="https://ratulrh04.github.io/react-ecommerce/">
                               <span>Click Here <FaArrowRightLong style={{color:'red'}} /></span>
                            </a>
                           </div> 
                         </div>
                        </a>
                       </div>
                    </div>

   <div className="col-md-4" style={{overflow:'hidden'}}>
      <div className="single-project-wrapper"  data-aos="fade-up" data-aos-duration="3000">
                        <a href="https://ratulrh04.github.io/color-changer-webapp/">
                        <div className="img-part">
                            <img src={props.imgFive} alt="Projec-image" />
                         </div>
                         <div className="info-part">
                           <h1>{props.headingFive}</h1>
                           <p>{props.paraFive}</p>
                           <div className="arrow-link">
                            <a href="https://ratulrh04.github.io/color-changer-webapp/">
                               <span>Click Here <FaArrowRightLong style={{color:'red'}} /></span>
                            </a>
                           </div> 
                         </div>
                        </a>
                       </div>
                    </div>

  <div className="col-md-4" style={{overflow:'hidden'}}>
    <div className="single-project-wrapper" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <a href="#">
                        <div className="img-part">
                            <img src={props.imgOne} alt="Projec-image" />
                         </div>
                         <div className="info-part">
                           <h1>{props.headingOne}</h1>
                           <p>{props.paraOne}</p>
                           <div className="arrow-link">
                            <a href="">
                              <span>Click Here <FaArrowRightLong style={{color:'red'}} /></span>
                            </a>
                           </div> 
                         </div>
                        </a>
                       </div>
                    </div>
                   </div> */}





              </div>
            </section>     
        </div>
    );
};

export default Project;