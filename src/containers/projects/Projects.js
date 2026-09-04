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
        icon: "💼",
      },

      {
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
        icon: "✈️",
      },

      {
        title: "Tic Tac Toe",
        subtitle: "Graphical Tic Tac Toe Game",
        description:
          "A graphical Tic Tac Toe game developed in Python with a 3×3 game board, player turns, X and O rendering, and game-state handling.",
        technologies: ["Python", "Pygame", "NumPy"],
        icon: "🎮",
      },

      {
        title: "Information Security Lab",
        subtitle: "Information Security Practicals",
        description:
          "A collection of practical implementations developed while learning information security and cryptographic concepts.",
        technologies: ["Java", "Cryptography", "Information Security"],
        icon: "🔐",
      },

      {
        title: "Personal Portfolio",
        subtitle: "Developer Portfolio Website",
        description:
          "A responsive personal portfolio website showcasing my education, skills, projects, GitHub repositories and contact information.",
        technologies: ["React", "JavaScript", "CSS", "Git", "GitHub"],
        icon: "🌐",
      },
    ];
  }

  renderFeaturedProject(project, index) {
    return (
      <Fade
        bottom
        duration={1000}
        distance="30px"
        delay={index * 100}
        key={project.title}
      >
        <div className="featured-project-card">
          <div className="featured-project-top">
            <div className="featured-project-icon">
              {project.icon}
            </div>

            <div className="featured-project-heading">
              <h2>{project.title}</h2>
              <p>{project.subtitle}</p>
            </div>
          </div>

          <p className="featured-project-description">
            {project.description}
          </p>

          <div className="technology-list">
            {project.technologies.map((technology) => (
              <span className="technology-tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <div className="featured-project-footer">
            <span className="featured-label">
              Featured Project
            </span>
          </div>
        </div>
      </Fade>
    );
  }

  renderGithubProject(repo) {
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
        .replace("https://github.com/", "")}/${projectName}`;

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
      <div className="github-project-card" key={projectName}>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github-project-link"
        >
          <div className="github-project-header">
            <div className="github-icon">
              <svg
                height="34"
                width="34"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M8 0C3.58 0 0 3.64 0 8.13c0 3.59 2.29 6.64 5.47 7.71.4.08.55-.18.55-.39
                  0-.19-.01-.83-.01-1.51-2.01.45-2.53-.5-2.69-.96-.09-.24-.48-.96-.82-1.15
                  -.28-.15-.68-.53-.01-.54.63-.01 1.08.6 1.23.85.72 1.24 1.87.89 2.33.68.
                  07-.53.28-.89.51-1.09-1.78-.21-3.64-.91-3.64-4.02 0-.89.31-1.62.82-2.19
                  -.08-.2-.36-1.04.08-2.16 0 0 .67-.22 2.2.84.64-.18 1.32-.27 2-.27s1.36.09
                  2 .27c1.53-1.06 2.2-.84 2.2-.84.44 1.12.16 1.96.08 2.16.51.57.82 1.3.82
                  2.19 0 3.12-1.87 3.81-3.65 4.02.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01
                  2.2 0 .21.15.47.55.39A8.13 8.13 0 0 0 16 8.13C16 3.64 12.42 0 8 0Z"
                />
              </svg>
            </div>

            <div>
              <h2>{projectName}</h2>

              {language && (
                <span className="github-language">
                  {language}
                </span>
              )}
            </div>
          </div>

          <p className="github-project-description">
            {description}
          </p>

          <div className="github-project-footer">
            <span>⭐ {stars}</span>
            <span>🍴 {forks}</span>
            <span className="github-view-text">
              View Repository →
            </span>
          </div>
        </a>
      </div>
    );
  }

  render() {
    const theme = this.props.theme;

    return (
      <div className="projects-main">
        <Header theme={theme} />

        {/* Projects Header */}
        <div className="basic-projects">
          <Fade bottom duration={1200} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>

              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>

                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Featured Projects */}
        <section className="featured-projects-section">
          <div className="featured-projects-heading">
            <h1>Featured Projects</h1>

            <p>
              A selection of projects that showcase my programming,
              web development and software development skills.
            </p>
          </div>

          <div className="featured-projects-grid">
            {this.featuredProjects.map((project, index) =>
              this.renderFeaturedProject(project, index)
            )}
          </div>
        </section>

        {/* GitHub Projects */}
        <section className="github-projects-section">
          <div className="github-projects-heading">
            <h1>GitHub Projects</h1>

            <p>
              Explore my programming practicals, development work
              and other repositories available on GitHub.
            </p>
          </div>

          <div className="github-projects-grid">
            {ProjectsData.data.map((repo) =>
              this.renderGithubProject(repo)
            )}
          </div>

          <div className="github-more-button">
            <Button
              text="View More on GitHub"
              href={greeting.githubProfile}
              newTab={true}
              theme={theme}
            />
          </div>
        </section>

        {/* Publications */}
        {publications.data.length > 0 && (
          <section className="publications-section">
            <div className="basic-projects">
              <Fade bottom duration={1200} distance="40px">
                <div className="publications-heading-div">
                  <div className="publications-heading-text-div">
                    <h1
                      className="publications-heading-text"
                      style={{ color: theme.text }}
                    >
                      {publicationsHeader.title}
                    </h1>

                    <p
                      className="projects-header-detail-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {publicationsHeader.description}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </section>
        )}

        <Footer
          theme={theme}
          onToggle={this.props.onToggle}
        />

        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;