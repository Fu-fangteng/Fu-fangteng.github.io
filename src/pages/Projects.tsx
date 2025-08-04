import project1Image from "../assets/imgs/projects/project_lapse.png";
import project2Image from "../assets/imgs/projects/project_map.png";
import project3Image from "../assets/imgs/projects/project_HQMMCA.png";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: project1Image,
      title: "Time-lapse Photography Project",
      description:
        "By taking different frames from a video and reconstructing them into a single image. Realize a rendering for still life, on a time scale.",
      alt: "Time-lapse Project",
    },
    {
      id: 2,
      image: project2Image,
      title: "Pythagorean Influence",
      description:
        "An interactive Map describing the Influence of Pythagorean.",
      alt: "Pythagorean Influence",
    },
    {
      id: 3,
      image: project3Image,
      title: "Summer research - MMCA",
      description:
        "A research program focus on cartoon animation dataset building and I main contributes to the experiment and testing period.",
      alt: "Cartoon Dataset",
    },
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-image">
                <img src={project.image} alt={project.alt} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
