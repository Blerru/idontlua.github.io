import "./section.scss";
import "./aboutSection.scss";
import SocialIcon from "../components/SocialIcon";
import {
    faDiscord,
    faGithub,
    faTwitch,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function AboutSection() {
    return (
        <section className="section about-section">
            <div className="about-container">
                <img
                    draggable="false"
                    className="profile-image"
                    src="https://github.com/idontlua.png?size=300"
                ></img>
                <div className="information-container">
                    <h1>Sup, I'm IDontLua.</h1>
                    <p>
                        I do the writing of the code. I particularly enjoy <b>Discord bots</b>,{" "}
                        <b>artificial intelligence</b> and, <b>automation</b>.
                    </p>
                </div>
            </div>
            <div className="social-container">
                <SocialIcon icon={faGithub} color="#fff" to="https://github.com/IDontLua" />
                <SocialIcon
                    icon={faTwitter}
                    color="#00acee"
                    to="https://twitter.com/IdontLua"
                />
                <SocialIcon
                    icon={faYoutube}
                    color="#FF0000"
                    to="https://www.youtube.com/channel/UCorQeye1o1OU1U1dqglDvXg"
                />
                <SocialIcon
                    icon={faTwitch}
                    color="#6441a5"
                    to="https://www.twitch.tv/idontlua"
                />
                <SocialIcon
                    icon={faDiscord}
                    color="#5566E2"
                    to="https://www.discord.com/users/467163000684412929/"
                />
            </div>

            <p className="scroll-down">Scroll down</p>
        </section>
    );
}

export default AboutSection;
