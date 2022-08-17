import { Icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialIcon(props: { color: string; icon: IconDefinition; to: string }) {
    return (
        <a className="no-fancy" href={props.to}>
            <FontAwesomeIcon
                className="social-icon"
                icon={props.icon}
                color={"var(--accent-color)"}
                fontSize="1.75rem"
                aria-label="icon"
            />
        </a>
    );
}

export default SocialIcon;
