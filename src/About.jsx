import './About.css'
import ReactTyped from "react-typed";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function About() {
    return (
        <>
        <div className="aboutSection">
            <img className="brian_pfp" src="images/brian_pfp.jpg" alt="Brian PFP"></img>

            <div className="aboutText">
                <h1> Hi, this is Brian Thomas </h1>
                <h2>
                    and I'm a{" "}
                    <ReactTyped
                        strings={["Developer", "Student", "Designer"]}
                        typeSpeed={100}
                        loop
                        backSpeed={50}
                        cursorChar="|"
                        showCursor={true}
                    />
                </h2>
            </div>

            <div className="aboutSocials">
                <Tooltip title="Resume" placement="left" arrow>
                    <a href="https://drive.google.com/file/d/1CjWjX0xczWSMgFubWGDebV5u_zbl93Bh/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img src="/images/resume-icon.png" alt="" />
                    </a>
                </Tooltip>
                <Tooltip title="LinkedIn" placement="left" arrow>
                <a href="https://www.linkedin.com/in/brian-daniel-thomas/" target="_blank" rel="noreferrer">
                    <img src="/images/linkedin-transparent.png" alt="" />
                </a>
                </Tooltip>
                <Tooltip title="GitHub" placement="left" arrow>
                <a href="https://github.com/BRIAN-THOMAS-02" target="_blank" rel="noreferrer">
                    <img src="/images/github-white.png" alt="" />
                </a>
                </Tooltip>
                <Tooltip title="YouTube" placement="left" arrow>
                <a href="https://www.youtube.com/@brianthomas9148" target="_blank" rel="noreferrer">
                    <img src="/images/youtube-transparent.png" alt="" />
                </a>
                </Tooltip>
            </div>
        </div>
        </>
    )
}