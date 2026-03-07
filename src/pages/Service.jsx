
import SectionTitle from "../components/SectionTitle";

const Project = (props) => {

   let projectsTitle = {
      name: "Service"
  };
      
    return (
        <div>
            <section id="Service">
             <div className="container">
                <div className="row " >
                  <SectionTitle {...projectsTitle}/>

  <div className="col-md-4" style={{overflow:'hidden'}}>
        <div className="service-project-wrapper"  data-aos="fade-up" data-aos-duration="3000">       
                         <div className="single-info-part">
                           <i className={props.iconOne}></i>
                           <h1>{props.serviceHeadingOne}</h1>
                         <p>{props.peraOne}</p>                        
                </div>                 
          </div>
    </div>
                    
 <div className="col-md-4" style={{overflow:'hidden'}}>
        <div className="service-project-wrapper"  data-aos="fade-up" data-aos-duration="3000">       
                         <div className="single-info-part">
                            <i className={props.iconTwo}></i>
                           <h1>{props.serviceHeadingTwo}</h1>
                         <p>{props.peraTwo}</p>                        
                </div>                 
          </div>
    </div>

  <div className="col-md-4" style={{overflow:'hidden'}}>
        <div className="service-project-wrapper"  data-aos="fade-up" data-aos-duration="3000">       
                         <div className="single-info-part">
                            <i className={props.iconThree}></i>
                           <h1>{props.serviceHeadingThree}</h1>
                         <p>{props.peraThree}</p>                        
                </div>                 
          </div>
    </div>
                 
               {/* second row */}
<div className="col-md-4" style={{overflow:'hidden', marginTop:"15px"}}>
        <div className="service-project-wrapper"  data-aos="fade-up" data-aos-duration="3000">       
                         <div className="single-info-part">
                          <i className={props.iconFour}></i>
                           <h1>{props.serviceHeadingFour}</h1>
                         <p>{props.peraFour}</p>                        
                </div>                 
          </div>
    </div>

   <div className="col-md-4" style={{overflow:'hidden' , marginTop:"15px"}}>
        <div className="service-project-wrapper"  data-aos="fade-up" data-aos-duration="3000">       
                         <div className="single-info-part">
                            <i className={props.iconFive}></i>
                           <h1>{props.serviceHeadingFive}</h1>
                         <p>{props.peraFive}</p>                        
                </div>                 
          </div>
    </div>


     <div className="col-md-4" style={{overflow:'hidden', marginTop:"15px"}}>
        <div className="service-project-wrapper"  data-aos="fade-up" data-aos-duration="3000">       
                         <div className="single-info-part">
                            <i className={props.iconSix}></i>
                           <h1>{props.serviceHeadingSix}</h1>
                         <p>{props.peraSix}</p>                        
                </div>                 
          </div>
    </div>


  </div>
      </div>
            </section>     
        </div>
    );
};

export default Project;