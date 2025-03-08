import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container container">
        <h1 className="footer-title">Vishnu</h1>

        <ul className="footer-list">
            <li>
                <a href="#about" className="footer-link">About</a>
            </li>

            <li>
                <a href="#portfolio" className="footer-link">Projects</a>
            </li>

            <li>
                <a href="#testmonials" className="footer-link">Testimonials</a>
            </li>
        </ul>

         <div className='footer-social'>

            <a href="https://www.facebook.com/vishnu5739" className="footer-social-link" target="_blank">
            <i class="bx bxl-facebook"></i>
            </a>

            <a href="https://www.instagram.com/dev_by_v/" className="footer-social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://twitter.com/devbyvishnu/" className="footer-social-link" target="_blank">
            <i class="bx bxl-twitter"></i>
            </a>
        </div> 

        <span className="footer-copy">&#169; Dev-by-V. All rigths reserved</span>
    </div>
</footer>
  )
}

export default Footer
