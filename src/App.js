import React from 'react';
import './App.css';

import { BiCopyright } from 'react-icons/bi';
const Resume = () =>{
  return (
   
  <div class="container">
    <div class="header-container">
        <header className="resume-header">Resume Builder</header>
    </div>
    <div className="bg-container">
        <h1 className="heading">Veeresh Kumar Kavali</h1>
        <div className="address-container">
          <p className="paragraph">Guntakal,Andhra Pradesh, 515801 |</p>
          <a href="https://Veereshkumar956@gmail.com/#inbox?compose=new" target="_self"><p className="mail-paragraph">Veereshkumar956@gmail.com</p></a>
        </div>
        <a href="https://www.linkedin.com/in/veereshkumar18" target="_self"><p className="linkedin-paragraph">https://www.linkedin.com/in/veereshkumar18</p></a>
        <h1 className="side-heading">EDUCATION</h1>
        <hr className="hr-line"/>
        <div className="text-container">
          <p className='text-paragraph'>NxtWave Disruptive Technologies</p>
          <p className="text-paragraph">Feb'22-Ongoing</p>
        </div>
        <p className="bottom-text-paragraph">Industry Ready Certification in Full-stack Development</p>

        <div className="text-container">
          <p className='text-paragraph'>Sri Venkateswara University College of Engineering, Tirupati</p>
          <p className="text-paragraph">2017 - 2021</p>
        </div>
        <p className="bottom-text-paragraph">B Tech (Bachelor of Technology)_Civil Engineering (CE) (8.35 CGPA)</p>

        <div className="text-container">
          <p className='text-paragraph'>Sri Chaitanya Junior College, Vijayawada</p>
          <p className="text-paragraph">2013 - 2015</p>
        </div>
        <p className="bottom-text-paragraph">Intermediate_MPC (95.6%)</p>


        <div className="text-container">
          <p className='text-paragraph'>ST.Peter's English Medium High School, Guntakal</p>
          <p className="text-paragraph">2012 - 2013</p>
        </div>
        <p className="bottom-text-paragraph">Secondary School Of Certificate (9.7 CGPA)</p>

        <h1 className="side-heading">SKILLS</h1>
        <hr className="hr-line"/>
        <p className="course-title">Frontend:<span className="course-name">HTML, CSS, Bootstrap, JavaScript, React.js</span></p>
        <p className="course-title">Backend:<span className="course-name">Python, Express, Node.js</span></p>
        <p className="course-title">Databases:<span className="course-name">SQLite</span></p>


        <h1 className="side-heading">PROJECTS</h1>
        <hr className="hr-line"/>

        <div>
          <h1 className="project-heading">Food Munch (<a href="https://veereshfoodmunc.ccbp.tech" target="_self"><span className="project-link">veereshfoodmunc.ccbp.tech</span></a>)</h1>
          <p className="project-description">Developed a responsive website for Food Store where users can see a list of food items, detailed information
            about a food item, offers</p>

          <ul className="unordered-list">
              <li className="list-item">Designed page using following HTML structure elements like li, header, article, footer elements and
                  different bootstrap components to show different sections in the website and different bootstrap classes
                  for responsiveness through mobile-first approach.
              </li>
              <li className='list-item'>Implemented local search functionality by using input element, JavaScript event listeners & filtered
                  countries using Array filter method.
              </li>
          </ul>
          <p className="course-title">Technologies used:<span className="course-name">HTML, CSS, Bootstrap</span></p>
        </div>

        <div>
          <h1 className="project-heading">Countries Search (<a href="https://veereshcountry.ccbp.tech" target="_self"><span className="project-link">veereshcountry.ccbp.tech</span></a>)</h1>
          <p className="project-description">Developed responsive countries search application which shows all countries and respective population in the
             world. We can also search by specific country</p>

          <ul className="unordered-list">
              <li className="list-item">Fetched countries list from server asynchronously using fetch GET HTTP API call and implemented
                  responsiveness using Bootstrap grid system and CSS box model
              </li>
              <li className='list-item'>- Implemented local search functionality by using input element, JavaScript event listeners & filtered
                  countries using Array filter method.
              </li>
          </ul>
          <p className="course-title">Technologies used:<span className="course-name">HTML, CSS, , JS, REST API Calls, Bootstrap</span></p>

        </div>

        <div>
          <h1 className="project-heading">IPL Dashboard (<a href="https://veereshiplboard.ccbp.tech" target="_self"><span className="project-link">veereshiplboard.ccbp.tech</span></a>)</h1>
          <p className="project-description">Implemented IPL Dashboard app where users can list of ipl team, individual team details and respective team
            matches info</p>
          <ul className="unordered-list">
              <li className="list-item">Implemented UI such as home dashboard, individual team info routes by using React Router library
                  components like Route, Switch, Link, props, lists & keys.
              </li>
              <li className='list-item'>Fetched teams list from server asynchronously using fetch GET HTTP API call & individual team
                  details, matches info by sending team id as path parameter.
              </li>
              <li className='list-item'>Implemented 404 not found page for invalid paths by keeping 404 Route as last route in the Switch
                  component with * path.
              </li>
          
          </ul>
          <p className="course-title">Technologies used:<span className="course-name">React JS, Routing, REST API Calls, CSS, Bootstrap</span></p>
        </div>

    
    </div>

    <div className="footer-element">
          <BiCopyright style={{color: "blue"}} />
          <p className="zoho-mail">veereshk@peoplelinkvc.com</p>
    </div>
    </div>
  

  )

}

export default Resume


