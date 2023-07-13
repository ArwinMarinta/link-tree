import ParticlesBg from "particles-bg";
import './App.css';
import { ImProfile } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";


function App() {
  return (
    <div>
      <div className = "card" >
        <div className = "card_body"> </div>
          <div className="profile text_center">
            <img src="/animek.JPG" className="avatar"/>
            <h1>Arwin Marinta</h1>
            <p>Front-End Developer</p>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="/some-url">
              <ImProfile/>
              <span>Profile</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://github.com/ArwinMarinta" target="_blank">
              <FaGithub/>
              <span>Github</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.linkedin.com/in/arwin-marinta-95512a256/" target="_blank">
              <GrLinkedin/>
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.instagram.com/wynnn_1/" target="_blank">
              <BsInstagram/>
              <span>Instagram</span>
            </a>
          </div>
      </div>
       <ParticlesBg type="lines" bg={true} />
    </div>
  );
}

export default App;
