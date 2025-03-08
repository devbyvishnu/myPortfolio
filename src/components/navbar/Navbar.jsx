import React, { useState} from 'react';
import "./navbar.css"

const Navbar = () => {
     /*=============== Change Background Header ===============*/
     window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");

        // when the scroll is higer than 200 viewport height,
        // add the scroll-header class to a tag with the header tag
              
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    /*=============== Toggle Menu ===============*/
    const[Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
    <nav className="nav container">
        <a href="index.html" className="nav-logo">Vishnu</a>

        <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
             <li className="nav-items">
                <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav-link active-link" : "nav-link"}>
                    <i className="uil uil-estate nav_icon"></i> Home
                </a>
             </li>

             <li className="nav-items">
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav-link active-link" : "nav-link"}>
                    <i className="uil uil-user nav_icon"></i> About
                </a>
             </li>

             <li className="nav-items">
                <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav-link active-link" : "nav-link"}>
                    <i className="uil uil-file-alt nav_icon"></i> skills
                </a>
             </li>

             <li className="nav-items">
                <a href="#services" onClick={() => setActiveNav('#Services')} className={activeNav === "#Services" ? "nav-link active-link" : "nav-link"}>
                    <i className="uil uil-briefcase-alt nav_icon"></i> services
                </a>
             </li>

             <li className="nav-items">
                <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav-link active-link" : "nav-link"}>
                    <i className="uil uil-scenery nav_icon"></i> Portfolio
                </a>
             </li>

             <li className="nav-items">
                <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === "#contact" ? "nav-link active-link" : "nav-link"}>
                    <i className="uil uil-message nav_icon"></i> Contact
                </a>
             </li>
          </ul>

                    <i className="uil uil-times nav-close"onClick={() => showMenu(!Toggle)}></i>
        </div> 

        <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
        <i className="uil uil-apps"></i>
        </div>

    </nav>
</header>
  )
}

export default Navbar
