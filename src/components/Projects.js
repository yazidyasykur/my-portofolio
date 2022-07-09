import ProjectCard from "./ProjectCard"

function Projects() {
    return (
        <div className="project-container card">
            <h1>My Projects</h1>
            <div className="project-list">
                <ProjectCard
                nama="Meme Generator"
                url="https://yzd-genmeme.netlify.app"
                imgurl="https://storage.googleapis.com/yazidyasykur-portofolio-bucket/memegen-pic.PNG" 
                />
            </div>
        </div>
    )
}

export default Projects