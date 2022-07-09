import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Profile() {
    return (
        <div className="profile-container card">
            <h1>Profile</h1>
            <img src="https://storage.googleapis.com/yazidyasykur-portofolio-bucket/profil.png" alt="profile" className="profile-img"/>
            <p className="profile-description">Seorang Self-taught Frontend Developer yang bekerja dengan
                environment ReactJS. Sudah banyak membangun project melalui online
                course. Sangat memiliki minat belajar yang tinggi untuk dapat
                menguasai environment lainnya</p>

            <h3>Find me in:</h3>
            <div className="contact-list">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            </div>
        </div>
    )
}

export default Profile