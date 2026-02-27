

const SectionTitle = (pros) => {
    return (
          <div>
             <div className=" secTitle-container  container">
               <div className="row">
                 <div className="col-md-12">
                   <div className="section-wrapper">
                     <h1>{pros.name}</h1>
                   </div>
                 </div>
               </div>
             </div>
         </div>
    );
};

export default SectionTitle;