import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import animationData from "../assets/lottie/Animation - 1707063924246.json";
import opensyslogo from '../assets/images/opensys-logo.png'
import Lottie from "react-lottie";
import laptop from '../assets/images/3d cartoon style laptop with infographic elements on screen icon.png'
import code from '../assets/images/png-transparent-coding-folder-programming-folder-coding-programming-folder-code-3d-icon-removebg-preview.png'
import bag from '../assets/images/school-bag-5412549-4537744.png'
import penholder from '../assets/images/3d-illustration-pencil-ruler-and-school-supplies-png.webp'
import transparent from '../assets/images/transparent.png'
import github from '../assets/images/4695723.png'
import cascade from '../assets/images/download.png'

const Home = () => {

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0], 
    transition: {
      duration: 3, 
      repeat: Infinity, 
      ease: 'linear', 
    },
  }
 
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                
                <div className="h21">
                  <h2>OpenSys</h2>
                </div>
                <div className="h22 mt-0">
                  <h2 className="gradvpy">The Open-Source symposium</h2>
                </div>

                <p>
                  
A grand symphony of expansive technical spectacles!
                </p>

                <motion.button
                  className="buy__button"
                >
                  <a href="#events">Register</a>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="lottie">
                <Lottie options={lottieOptions} />
              </div>
              
            </Col>

           
          </Row>
        </Container>
      </section>

      <section id="about" className="about">
        <div className="abouts">
          
          <div className="h21 h2bold"><h2  >About the Event</h2></div>
          <div className="aboutdescription"><Col lg = '6'>
          <p>OpenSys is an amalgamation of multiple events that are designed to give you the best competitive experience all while being fun and enjoyable. Since we are the open source community of CBIT, all the events will be completely free for everyone to participate and you also stand a chance to win exciting cash prizes. See you there!</p>
          <div className="display-flex"><i class="ri-team-fill"></i><h5>Free for everyone to participate</h5></div>
          <div className="display-flex"><i class="ri-trophy-fill"></i><h5>Win exciting prizes</h5></div>
          </Col>
          <Col className="mt-40"  lg = '6'>
          <div className="display-flex where_when"><i class="ri-time-fill"></i><h5>When?</h5></div>
          <div className="pr40"><p>February 26th and 27th, 2024</p></div>
          <div className="display-flex where_when"><i class="ri-map-pin-fill"></i><h5>Where?</h5></div>
          <div className="pr40"><p>Chaitanya Bharathi Istitute of Technology</p></div>
          </Col></div>
          
          
        
        </div>
       
        
        
      </section>
      
      <section id="events" className="events">
          <h1 className="h1events">Events</h1>
          <div className="neomorphism">
              <div className="containeron">
                  <h1 >Git Cryptex</h1>
                  <p>An event aimed to test participants' knowledge on open-source technologies such as Git and GitHub. The event comprises two stages. First, all the teams will be required to solve a crossword puzzle based on open-source technologies. After completing the crossword, based on the answers obtained, the teams must commit or push the files listed in the crossword answers to COSC’s GitHub repository.</p>
                  <div className="display-flex icon-text"><i class="ri-team-fill"></i><p>Participation: Team Event (Team Size: 2)</p></div>
                  <div className="display-flex icon-text"><i class="ri-calendar-todo-fill"></i><p>Date: 24th February 2024</p></div>
                  <motion.button
                  className="buy__button mt-40"
                >
                  <a href="#events">Register</a>
                </motion.button>
              </div>
              <div><img className="github" src={github} alt="" /></div>
          </div>
         
          <div className="neomorphism">
              <div><img className="cascade" src={cascade} alt="" /></div>
              <div className="containeron">
                  <h1 >Cascade Arcade</h1>
                  <p>An open-sourced event for all the design and UI/UX enthusiasts of the college community, who will compete against each other to create CSS templates that match the specified pattern.</p>
                  <div className="display-flex icon-text"><i class="ri-user-3-fill"></i><p>Participation: Individual Event</p></div>
                  <div className="display-flex icon-text"><i class="ri-calendar-todo-fill"></i><p>Date: 24th February 2024</p></div>
                  <div className="display-flex icon-text"><i class="ri-link"></i><p>Reference Link: <a href="https://cssbattle.dev/">CSS Battle</a></p></div>
                  <motion.button
                  className="buy__button mt-40 mb-40"
                >
                  <a href="#events">Register</a>
                </motion.button>
              </div>
          </div>
          
      </section>

      <section id="FAQs" className="FAQs">
      </section>
      
    </Helmet>
  );
};

export default Home;
