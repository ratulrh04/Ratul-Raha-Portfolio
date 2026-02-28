



const Footer = () => {

    
    return (
    

        <div style={{backgroundColor:"#3fa5e0", border:"2px solid white"}}>  
        <div style={{ margin:"auto", width:"300px"}}>
            <div className="footer-wrapper">
                    <div className="facebook"><a href="#"><i className="fa-brands fa-facebook"></i></a></div>
                    <div className="instagram"><a href="#"></a><i className="fa-brands fa-square-instagram"></i></div>
                    <div className="github"><a href="#"></a><i className="fa-brands fa-github"></i></div>
                    <div className="email"><a href="#"><i className="fa-solid fa-at"></i></a></div>
           </div>
                <p>
                        &copy; {new Date().getFullYear()} Ratul Raha. All rights reserved.
                </p>
         </div>         
        </div>
    );
};

export default Footer;