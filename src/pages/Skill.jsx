import SectionTitle from "../components/SectionTitle";


const Skill = () => {

    let skillTitle = {
        name:'Skill'
    }
    return (
        <div>
            <section id="Skill">
               <SectionTitle {...skillTitle}/>
               <div className="skill-wrapper">
                  <div className="container">
                    <div className="row">
                        <div className="inline-skill">
                         <span>HTML5</span>
                         <div className="html"></div> 
                         <h4>90%</h4>
                        </div>   
                    </div>
                    <div className="row">
                      <div className="inline-skill">
                         <span style={{paddingRight:'40px'}}>CSS3</span>
                         <div className="css"></div>
                         <h4>87%</h4>
                      </div>
                    </div>
                    <div className="row">
                     <div className="inline-skill">
                       <span style={{paddingRight:'65px'}}>JS</span>
                       <div className="javascript"></div>
                       <h4>80%</h4>
                      </div>
                    </div>
                     <div className="row">
                       <div className="inline-skill">
                       <span style={{paddingRight:'38px'}}>React</span>
                       <div className="react"></div>
                       <h4>85%</h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="inline-skill">
                        <span style={{paddingRight:'40px'}}>Node</span>
                       <div className="node"></div>
                        <h4>75%</h4>
                      </div>
                    </div>
                  </div>
               </div>
            </section>       
        </div>
    );
};

export default Skill;