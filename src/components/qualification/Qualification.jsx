import React, { useState } from "react";
import "./qualification.css"


const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="qualification section">
    <h2 className="section__title">Qualification</h2>
<span className="section__subtitle">My personal journey</span>

<div className="qualification-container container">
<div className="qualification-tabs">

   <div className={toggleState === 1 ? "qualification-button qualification-active button--flex" : "qualification-button button--flex"}
   onClick ={() => toggleTab(1)}
   >
     <i className="uil uil-graduation-cap qualification-icon"></i> Education
   </div>

   <div className={toggleState === 2 ? "qualification-button qualification-active button--flex" : "qualification-button button--flex"}
   onClick ={() => toggleTab(2)}
   >
     <i className="uil uil-briefcase-alt qualification-icon"></i> Experience
   </div>

</div>

 <div className="qualification-section">


    <div className={toggleState === 1 ? "qualification-content qualification-content-active" : "qualification-content"}>


       <div className="qualification-data">
           <div>
              <h3 className="qualification-title">Computer Application</h3>
              <span className="qualification-subtitle">Govt . HSS Kattoor</span>
              <div className="qualification-calender">
                 <i className="uil uil-calendar-alt"></i> 2017 - 2019 
              </div>
           </div>

           <div>
              <span className="qualification-rounder"></span>
              <span className="qualification-line"></span>
           </div>
       </div>

       <div className="qualification-data">
             <div></div>

                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
           <div>
              <h3 className="qualification-title">Bachelor Of Commerce</h3>
              <span className="qualification-subtitle">Calicut University</span>
              <div className="qualification-calender">
                 <i className="uil uil-calendar-alt"></i> 2019 - present
              </div>
           </div>
       </div>

       <div className="qualification-data">
           <div>
              <h3 className="qualification-title">MERN Stack</h3>
              <span className="qualification-subtitle">BROCAMP</span>
              <div className="qualification-calender">
                 <i className="uil uil-calendar-alt"></i> 2022 - Present
              </div>
           </div>

           <div>
              <span className="qualification-rounder"></span>
              <span className="qualification-line"></span>
           </div>
       </div>

       {/* <div className="qualification-data">
             <div></div>

                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
           <div>
              <h3 className="qualification-title">Web Development</h3>
              <span className="qualification-subtitle">Spain Institute</span>
              <div className="qualification-calender">
                 <i className="uil uil-calendar-alt"></i> 2017 - Present
              </div>
           </div>
       </div> */}



    </div>


    <div className={toggleState === 2 ? "qualification-content qualification-content-active" : "qualification-content"}>


       <div className="qualification-data">
           <div>
              <h3 className="qualification-title">Web Designer</h3>
              <span className="qualification-subtitle">Breethink</span>
              <div className="qualification-calender">
                 <i className="uil uil-calendar-alt"></i> 2022 - 2022
              </div>
           </div>

           <div>
              <span className="qualification-rounder"></span>
              <span className="qualification-line"></span>
           </div>
       </div>

       <div className="qualification-data">
             <div></div>

                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
           <div>
              <h3 className="qualification-title">Frontend - Developer </h3>
              <span className="qualification-subtitle">Freelancer</span>
              <div className="qualification-calender">
                 <i className="uil uil-calendar-alt"></i> 2022 - Present
              </div>
           </div>
       </div>

       {/* <div className="qualification-data">
           <div>
              <h3 className="qualification-title">Web Designer</h3>
              <span className="qualification-subtitle">Figma Spain</span>
              <div className="qualification-calender">
                 <i className="uil uil-calendar-alt"></i> 2018-2020
              </div>
           </div>

           <div>
              <span className="qualification-rounder"></span>
              <span className="qualification-line"></span>
           </div>
       </div> */}



    </div>
  </div> 

</div>
</section>
  )
}

export default Qualification
