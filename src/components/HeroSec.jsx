import Nav from "./Nav";
import profileImage from "../assets/Profile.png"



// scroll down js function write down here
function scrollToSection() {
  const section = document.getElementById('services');
  section.scrollIntoView({ behavior: 'smooth' });
}


const HeroSec = () => {
    return (
        <div>
            <section id='hero-sec'>
               <Nav/>
               <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="title-wrapper">
                              <span>Hi, I am <i>Ratul Raha</i></span>
                              <h1> A F<i>R</i>O<i>N</i>T-E<i>N</i>D D<i>E</i>V<i>E</i>L<i>O</i>P<i>E</i>R</h1>
                              <p>specializing in React & Next.js.</p>
                              <p> I build fast, responsive websites for businesses and startups.</p>
                             <button className="hire-me" onClick={() => window.scrollBy({ top: 2800, behavior: 'smooth' })}>
                                    Hire Me Now
                             </button>


                        </div>
                    </div>
                    <div className="col-lg-6" >
                        <div className="profile-wrapper">
                               <img className="img-fluid" src={profileImage} alt="Profile" />
                        </div>
                    </div>
                </div>
               </div>
            </section>
        </div>
    );
};

export default HeroSec;