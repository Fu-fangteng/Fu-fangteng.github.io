import { useEffect, useState } from "react";
import project1Image from "../assets/imgs/projects/project_lapse.png";
import project2Image from "../assets/imgs/projects/project_map.png";
import project3Image from "../assets/imgs/projects/project_HQMMCA.png";
import "./Projects.css";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      image: project1Image,
      title: "Time-lapse Photography Project",
      description:
        "By taking different frames from a video and reconstructing them into a single image. Realize a rendering for still life, on a time scale.",
      alt: "Time-lapse Project",
      tags: ["Computer Vision", "Image Processing", "Python"],
      link: "#",
      status: "Completed",
    },
    {
      id: 2,
      image: project2Image,
      title: "Pythagorean Influence",
      description:
        "An interactive Map describing the Influence of Pythagorean.",
      alt: "Pythagorean Influence",
      tags: ["Interactive Design", "Mathematics", "JavaScript"],
      link: "#",
      status: "Completed",
    },
    {
      id: 3,
      image: project3Image,
      title: "Summer research - MMCA",
      description:
        "A research program focus on cartoon animation dataset building and I main contributes to the experiment and testing period.",
      alt: "Cartoon Dataset",
      tags: ["AI Research", "Dataset Building", "Machine Learning"],
      link: "#",
      status: "Complete",
    },
  ];

  return (
    <div className="projects">
      <div className="projects-hero">
        <div className="hero-content">
          <h1 className="hero-title">My Projects</h1>
          <p className="hero-subtitle">
            Exploring the intersection of AI, creativity, and technology
          </p>
        </div>
      </div>

      <div className="projects-container">
        <div className={`projects-grid ${isVisible ? "fade-in" : ""}`}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="project-status">{project.status}</span>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.link} className="project-link">
                    <span className="icon">🔗</span>
                    View Details
                  </a>
                  <button className="project-btn">
                    <span className="icon">📁</span>
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
