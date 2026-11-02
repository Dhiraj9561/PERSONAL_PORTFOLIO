import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Resume.css";
import TopButton from "../../components/topButton/TopButton";

export default function ResumePage(props) {
  const theme = props.theme;

  return (
    <div className="resume-main">
      <Header theme={theme} />
      <main className="resume-view">
        <section className="resume-unavailable">
          <h1 style={{ color: theme.text }}>Dhiraj Rathod's Resume</h1>
          <p style={{ color: theme.secondaryText }}>
            The resume will be available here soon.
          </p>
        </section>
      </main>
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}