import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Fresher Training</h1>
          <p>We are providing training for freshers in different domains.</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Visual Graphic" />
        <div>
          <p>Data Toolkit:</p>
          <p>
            Gain a comprehensive understanding of Python, a key language in Data
            Science. Understand databases using SQL, manipulate data with
            Pandas, and uncover insights through statistical analysis and
            hypothesis testing. Learn to apply your knowledge through practical
            assignments and real-world problem-solving.
          </p>
          <p>Topics Covered:</p>
          <ul>
            <li>Introduction to Python</li>
            <li>Programming in Python</li>
          </ul>
        </div>
      </div>

      <div className="home3" id="about">
        {/* <img src={vg} alt="Visual Graphic" /> */}
        <div>
          <h1>Who we are</h1>
          <p>
            They build code that helps databases and software applications
            communicate with each other. It is the part that is not visible to
            visitors or users. Hence, it is called backend development. With the
            surge of advanced technologies, websites are getting more complex
            and loaded with features. Backend development is a shining career
            option if you want to learn and earn well. PW Skills introduced a
            FREE Backend Development Course for students who are interested in
            building their careers as aspiring backend developers. Indulge in
            quality learning with our industry-expert mentors and interactive
            classes. Get hands-on learning experience and much more with this
            course. After completing the backend course, you will master some of
            the crucial backend development tools.
          <br />
          <br /><br />
          Trending Certification Courses DevOps Certification Training CourseAWS Certification Training Course for Solutions ArchitectPMP® Certification TrainingMicrosoft Power BI Certification Training CourseCEH v12 - Certified Ethical Hacking Course OnlineSelenium Certification Training CourseCISSP Certification Training CourseMicrosoft Certified Azure Data Engineer Associate DP 203Salesforce Training Course for Administrator & App BuilderPRINCE2® Foundation & Practitioner Certification CourseTableau Certification Training CourseReact JS Certification Course OnlinePrompt Engineering Course
          </p>

        </div>
      </div>

      <div className="home4" id="brand"> 
        {/* <img src={vg} alt="Visual Graphic" /> */}
        <div>
          <h1>Brands and Collabration</h1>
          <article>
            <div style={{animationDelay: "0.3s"
            }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
            </div>
            <div style={{animationDelay: "0.3s"
            }}>

            <AiFillFacebook/>
            <p>Facebook</p>
            </div>
            <div style={{animationDelay: "0.4s"
            }}>
            <AiFillLinkedin/>
            <p>LinkdIn</p>
            </div>
            <div style={{animationDelay: "0.5s"
            }}>
            <AiFillGithub/>
            <p>Github</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
