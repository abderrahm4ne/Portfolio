import DarkMode from "./DarkModeSVG";
import GitHub from "./GitHubSVG";
import Instagram from "./InstagramSVG";
import Discord from "./DiscordSVG";
import styles from "./navBar.module.css"



function NavBar(){


    return(
        <div className={styles.navBar}>
            <div className={styles.left}>
                AbderrahmaneCoding();
            </div>
            <div className={styles.middle}>
                <div className={styles.menus}>
                    <div className={styles.homePage}><a href="#home">HOME<div className={styles.underline}></div></a></div>
                    <div className={styles.portfolioPage}><a href="#skills">SKILLS<div className={styles.underline}></div></a></div>
                    <div className={styles.skillsPage}><a href="#portfolio"><div>PORTFOLIO</div><div className={styles.underline}></div></a></div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.icons}>
                    <div className={styles.darkMode}>
                        <DarkMode />
                    </div>
                    <div className={styles.github}>
                        <GitHub />
                    </div>
                    <div className={styles.discord}>
                        <Discord />
                    </div>
                    <div className={styles.instagram}>
                        <Instagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;