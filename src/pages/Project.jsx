
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
                        <a href="#">
                        <div className="img-part">
                            <img src={props.imgOne} alt="Projec-image" />
                         </div>
                         <div className="info-part">
                           <h1>{props.headingOne}</h1>
                           <p>{props.paraOne}</p>
                           <div className="arrow-link">
                             <span>Click Here <FaArrowRightLong style={{color:'red'}} /></span>
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
                             <span>Click Here <FaArrowRightLong style={{color:'red'}} /></span>
                           </div>  
                         </div>
                        </a>
                       </div>
                    </div>

                    <div className="col-md-4" style={{overflow:'hidden'}}>
   <div className="single-project-wrapper"  data-aos="fade-up" data-aos-duration="3000" >
                        <a href="#">
                        <div className="img-part">
                            <img src={props.imgOne} alt="Projec-image" />
                         </div>
                         <div className="info-part">
                           <h1>{props.headingOne}</h1>
                           <p>{props.paraOne}</p>
                           <div className="arrow-link">
                             <span>Click Here <FaArrowRightLong style={{color:'red'}} /></span>
                           </div> 
                         </div>
                        </a>
                       </div>
                    </div>
                 </div>

                 <div className="row mt-4">
                  
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
                             <span>Click Here <FaArrowRightLong style={{color:'red'}} /></span>
                           </div> 
                         </div>
                        </a>
                       </div>
                    </div>

                    <div className="col-md-4" style={{overflow:'hidden'}}>
    <div className="single-project-wrapper"  data-aos="fade-up" data-aos-duration="3000">
                        <a href="#">
                        <div className="img-part">
                            <img src={props.imgOne} alt="Projec-image" />
                         </div>
                         <div className="info-part">
                           <h1>{props.headingOne}</h1>
                           <p>{props.paraOne}</p>
                           <div className="arrow-link">
                             <span>Click Here <FaArrowRightLong style={{color:'red'}} /></span>
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
                             <span>Click Here <FaArrowRightLong style={{color:'red'}} /></span>
                           </div> 
                         </div>
                        </a>
                       </div>
                    </div>
                 </div>
             </div>
            </section>     
        </div>
    );
};

export default Project;