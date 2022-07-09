import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJs, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons'

function Skillset() {
    return (
        <div className="skillset-container card">
            <h1>Skillset</h1>
            <div className="icon-list">
                <FontAwesomeIcon icon={faHtml5} />
                <FontAwesomeIcon icon={faJs} />
                <FontAwesomeIcon icon={faReact} />
                <FontAwesomeIcon icon={faBootstrap} />
            </div>
        </div>
    )
}

export default Skillset