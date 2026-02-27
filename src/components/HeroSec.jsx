import Nav from "./Nav";


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
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="profile-wrapper">
                               <img className="img-fluid" src="../../public/images/Profile.png" alt="Profile" />
                        </div>
                    </div>
                </div>
               </div>
            </section>
        </div>
    );
};

export default HeroSec;