import DarkMode from "./DarkModeSVG";
import GitHub from "./GitHubSVG";
import Instagram from "./InstagramSVG";
import Discord from "./DiscordSVG";
import styles from "./navBar.module.css"



function NavBar(){


    return(
        <div className={styles.filterd}>
        <div className={styles.navBar}>
            <div className={styles.left}>
                AbderrahmaneCoding();
            </div>
            <div className={styles.middle}>
                    <div className={styles.homePage}><a href="#home">HOME</a></div>
                    <div className={styles.portfolioPage}><a href="#skills">SKILLS</a></div>
                    <div className={styles.skillsPage}><a href="#portfolio">PORTFOLIO</a></div>
            </div>
            <div className={styles.right}>
                    <div className={styles.darkMode}>
                        <DarkMode />
                    </div>
                    <div className={styles.break}></div>
                    <div className={styles.github}>
                        <GitHub />
                    </div>
                    <div className={styles.discord}>
                        <Discord />
                    </div>
                    <div className={styles.email}>
                        <Instagram />
                </div>
            </div>
        </div>
        </div>
    )
}

export default NavBar;