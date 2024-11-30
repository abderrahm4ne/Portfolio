import DarkMode from "./DarkModeSVG";
import GitHub from "./GitHubSVG";
import Instagram from "./InstagramSVG";
import Discord from "./DiscordSVG";
import styles from "./navBar.module.css"



function NavBar(){


    return(
        <>
            
            <div className="left">
            AbderrahmaneCoding();
            </div>
            <div className="middle">
                <>
                <div class="menus">
                <div class="home-page"><a href="#home" >HOME<div class="underline"></div></a>
                </div>
                <div class="portfolio-page"><a href="#skills">SKILLS
                <div class="underline"></div></a></div>
                <div class="skills-page"><a href="#portfolio"><div>PORTFOLIO</div><div class="underline"></div></a>
                </div>
            </div>
                </>
            </div>
            <div className="right">
                <div className="icons">
                    <>
                        <div className="dark-mode">
                            <DarkMode/>
                        </div>
                        <div className="github">
                            <GitHub/>
                        </div>
                        <div className="discord">
                            <Discord/>
                        </div>
                        <div className="instagram">
                            <Instagram/>
                        </div>
                    </>
                </div>
            </div>
            
        </>

    )
}

export default NavBar;