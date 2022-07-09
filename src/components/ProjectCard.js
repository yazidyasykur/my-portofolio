function ProjectCard(props) {
    return (
        <a className="project-card" href={props.url} target="_blank">
            <img className="project-img" src={props.imgurl}></img>
            <div className="project-info">
                <p>{props.nama}</p>
                <p>{props.url}</p>
            </div>
        </a>
    )
}

export default ProjectCard