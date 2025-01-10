//Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface props {
    className: string
}

const GithubLink = ({className}: props) => {
    
    const openGitHub = () => {
        window.open("https://github.com/dmh10792", "_blank", "noreferrer");
    }

    return (
        <div className={`${className}`} onClick={openGitHub}>
            <FontAwesomeIcon icon={faGithub} size="2x"/>
        </div>
    )
}

export default GithubLink;