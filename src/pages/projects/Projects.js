import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";

import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";

import ProjectsData from "../../shared/opensource/projects.json";

import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.featuredProjects = [
      {
        icon: "💼",
        title: "PlacePortal",
        subtitle: "Smart Campus Placement Portal",
        description:
          "A full-stack campus placement portal for managing students, companies, job applications, interviews, notifications and placement activities.",
        technologies: [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "JWT",
          "Socket.IO",
        ],
      },

      {
        icon: "✈️",
        title: "TourMood",
        subtitle: "Travel & Hidden Places Platform",
        description:
          "A travel platform that helps users discover travel packages based on their mood, manage bookings and explore hidden places with user authentication and administrative management.",
        technologies: [
          "Python",
          "Flask",
          "SQLite",
          "SQLAlchemy",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },

      {
        icon: "🎮",
        title: "Tic Tac Toe",
        subtitle: "Graphical Tic Tac Toe Game",
        description:
          "A graphical Tic Tac Toe game developed in Python with a 3×3 game board, player turns, X and O rendering, and game-state handling.",
        technologies: ["Python", "Pygame", "NumPy"],
      },

      {
        icon: "🔐",
        title: "Information Security Lab",
        subtitle: "Information Security Practicals",
        description:
          "A collection of practical implementations developed while learning information security and cryptographic concepts.",
        technologies: [
          "Java",
          "Cryptography",
          "Information Security",
        ],
      },

      {
        icon: "🌐",
        title: "Personal Portfolio",
        subtitle: "Developer Portfolio Website",
        description:
          "A responsive personal portfolio website showcasing my education, skills, projects, GitHub repositories and contact information.",
        technologies: [
          "React",
          "JavaScript",
          "CSS",
          "Git",
          "GitHub",
        ],
      },
    ];
  }

  renderFeaturedProject(project, index, theme) {
    return (
      <Fade
        bottom
        duration={1000}
        distance="30px"
        delay={index * 100}
        key={project.title}
      >
        <div
          className="featured-project-card"
          style={{
            backgroundColor: theme.body,
            color: theme.text,
          }}
        >
          <div className="featured-project-header">
            <div className="featured-project-icon">
              {project.icon}
            </div>

            <div>
              <h2
                style={{
                  color: theme.text,
                }}
              >
                {project.title}
              </h2>

              <h3
                style={{
                  color: theme.secondaryText,
                }}
              >
                {project.subtitle}
              </h3>
            </div>
          </div>

          <p
            className="featured-project-description"
            style={{
              color: theme.secondaryText,
            }}
          >
            {project.description}
          </p>

          <div className="technology-container">
            {project.technologies.map((technology) => (
              <span
                className="technology-tag"
                key={`${project.title}-${technology}`}
                style={{
                  color: theme.text,
                  borderColor: theme.secondaryText,
                }}
              >
                {technology}
              </span>
            ))}
          </div>

          <div
            className="featured-project-footer"
            style={{
              borderColor: theme.secondaryText,
            }}
          >
            <span
              className="project-status"
              style={{
                color: theme.secondaryText,
              }}
            >
              Featured Project
            </span>
          </div>
        </div>
      </Fade>
    );
  }

  renderGithubProject(repo, index, theme) {
    /*
     * ProjectsData can contain repository objects directly.
     * This also safely handles data wrapped inside "node".
     */
    const repository = repo.node || repo;

    const projectName =
      repository.name ||
      repository.nameWithOwner ||
      "GitHub Project";

    const description =
      repository.description ||
      "Programming and development project.";

    const projectUrl =
      repository.url ||
      `https://github.com/${greeting.githubProfile
        .replace("https://github.com/", "")
        .replace("/", "")}/${projectName}`;

    const language =
      repository.primaryLanguage?.name ||
      repository.language ||
      "";

    const stars =
      repository.stargazers?.totalCount ??
      repository.stargazersCount ??
      0;

    const forks =
      repository.forkCount ??
      repository.forks_count ??
      0;

    return (
      <Fade
        bottom
        duration={1000}
        distance="30px"
        delay={index * 100}
        key={repository.id || `${projectName}-${index}`}
      >
        <div
          className="github-project-card"
          style={{
            backgroundColor: theme.body,
            color: theme.text,
          }}
          onClick={() => {
            window.open(
              projectUrl,
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          <div className="github-project-top">
            <div
              className="github-icon"
              style={{
                color: theme.text,
              }}
            >
              <svg
                height="28"
                width="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.4 7.88 10.93.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.8 10.8 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.68.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56C20.2 21.4 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5Z"
                />
              </svg>
            </div>

            <h2
              style={{
                color: theme.text,
              }}
            >
              {projectName}
            </h2>
          </div>

          <p
            className="github-project-description"
            style={{
              color: theme.secondaryText,
            }}
          >
            {description}
          </p>

          <div
            className="github-project-info"
            style={{
              color: theme.secondaryText,
            }}
          >
            {language && (
              <span>
                <span
                  className="language-dot"
                  style={{
                    backgroundColor:
                      repository.primaryLanguage?.color ||
                      "#888",
                  }}
                ></span>

                {language}
              </span>
            )}

            <span>⭐ {stars}</span>

            <span>🍴 {forks}</span>
          </div>
        </div>
      </Fade>
    );
  }

  render() {
    const theme = this.props.theme;

    /*
     * Make sure GitHub project data always exists.
     */
    const githubProjects =
      ProjectsData && Array.isArray(ProjectsData.data)
        ? ProjectsData.data
        : [];

    const publicationData =
      publications && Array.isArray(publications.data)
        ? publications.data
        : [];

    return (
      <div className="projects-main">
        <Header theme={theme} />

        {/* =====================================
            PROJECT PAGE HEADER
            ===================================== */}

        <div className="basic-projects">
          <Fade
            bottom
            duration={2000}
            distance="40px"
          >
            <div className="projects-heading-div">

              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>

              <div className="projects-heading-text-div">

                <h1
                  className="projects-heading-text"
                  style={{
                    color: theme.text,
                  }}
                >
                  {projectsHeader.title}
                </h1>

                <p
                  className="projects-header-detail-text subTitle"
                  style={{
                    color: theme.secondaryText,
                  }}
                >
                  {projectsHeader.description}
                </p>

              </div>

            </div>
          </Fade>
        </div>


        {/* =====================================
            FEATURED PROJECTS
            ===================================== */}

        <section className="featured-projects-section">

          <h1
            className="project-title"
            style={{
              color: theme.text,
            }}
          >
            Featured Projects
          </h1>

          <p
            className="featured-projects-description"
            style={{
              color: theme.secondaryText,
            }}
          >
            A selection of projects that showcase my
            programming, web development and software
            development skills.
          </p>

          <div className="featured-projects-grid">

            {this.featuredProjects.map(
              (project, index) =>
                this.renderFeaturedProject(
                  project,
                  index,
                  theme
                )
            )}

          </div>

        </section>


        {/* =====================================
            GITHUB PROJECTS
            ===================================== */}

        <section className="github-projects-section">

          <h1
            className="project-title"
            style={{
              color: theme.text,
            }}
          >
            GitHub Projects
          </h1>

          <p
            className="featured-projects-description"
            style={{
              color: theme.secondaryText,
            }}
          >
            Explore my programming practicals,
            development work and other repositories
            available on GitHub.
          </p>

          {githubProjects.length > 0 ? (

            <div className="github-projects-grid">

              {githubProjects.map(
                (repo, index) =>
                  this.renderGithubProject(
                    repo,
                    index,
                    theme
                  )
              )}

            </div>

          ) : (

            <p
              className="github-loading"
              style={{
                color: theme.secondaryText,
              }}
            >
              No GitHub projects found.
            </p>

          )}

          <div className="github-button-container">

            <Button
              text={"View More on GitHub"}
              className="project-button"
              href={greeting.githubProfile}
              newTab={true}
              theme={theme}
            />

          </div>

        </section>


        {/* =====================================
            PUBLICATIONS
            ===================================== */}

        {publicationData.length > 0 ? (

          <section className="publications-section">

            <div className="basic-projects">

              <Fade
                bottom
                duration={2000}
                distance="40px"
              >

                <div className="publications-heading-div">

                  <div className="publications-heading-text-div">

                    <h1
                      className="publications-heading-text"
                      style={{
                        color: theme.text,
                      }}
                    >
                      {publicationsHeader.title}
                    </h1>

                    <p
                      className="projects-header-detail-text subTitle"
                      style={{
                        color: theme.secondaryText,
                      }}
                    >
                      {publicationsHeader.description}
                    </p>

                  </div>

                </div>

              </Fade>

            </div>

          </section>

        ) : null}


        {/* =====================================
            FOOTER
            ===================================== */}

        <Footer
          theme={this.props.theme}
          onToggle={this.props.onToggle}
        />

        <TopButton theme={this.props.theme} />

      </div>
    );
  }
}

export default Projects;