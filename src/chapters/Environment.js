
import React from 'react';

function Environment() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <h1>Setting Up Your Development Environment</h1>
        <div className="content-container">
          <section className="subsection">
            <h2>Text Editors</h2>
            <p>Text editors like VS Code, Sublime, and others are essential tools for web development. They offer syntax highlighting, autocomplete, and other features that make coding easier.</p>
          </section>

          <section className="subsection">
            <h2>Browser Developer Tools</h2>
            <p>Browser developer tools help you inspect elements, debug JavaScript, and view network activity. This is an invaluable tool for any web developer.</p>
          </section>

          <section className="subsection">
            <h2>Version Control (Git)</h2>
            <p>Git is a version control system that helps you track changes, revert to previous stages, and work on different branches simultaneously. Understanding Git is crucial for collaboration and deployment.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Environment;
