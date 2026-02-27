

const Contact = () => {
    return (
        <div>
            <section id="Contact">
               <div id="contract-section">
                <div className="container">
                  <div className="row">
                    <div className="col-me-12">
                      <div className="contract-wrapper">
                        <h1><i>Contact</i></h1>
                            <input className="single-input" type="text" placeholder="Enter Your Name"/>
                            <input className="single-input" type="email" placeholder="Enter Your Email"/>
                            <input className="single-input" type="text" placeholder="Enter Your Address" />
                            <textarea className="text-aria" name="" id="" rows={5} placeholder="Write Your Massage Here">
                            </textarea>
                           <button className="btn click-me">Click Me</button>
                        </div>
                     </div>
                   </div>
                </div>
               </div>
            </section>    
        </div>
    );
};

export default Contact;