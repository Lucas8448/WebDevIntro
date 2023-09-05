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
            <ul>
              <li>VS Code: Highly customizable, free, and has a huge extension library.</li>
              <li>Sublime Text: Lightweight and fast, but less extensible than VS Code.</li>
              <li>Atom: Built by GitHub and similar to VS Code, but a bit less performant.</li>
            </ul>
          </section>

          <section className="subsection">
            <h2>Browser Developer Tools</h2>
            <p>Browser developer tools help you inspect elements, debug JavaScript, and view network activity. This is an invaluable tool for any web developer.</p>
            <ul>
              <li>Element Inspector: Examine HTML and CSS in real-time.</li>
              <li>Console: Debug JavaScript and view logs.</li>
              <li>Network Tab: Monitor network requests and responses.</li>
            </ul>
          </section>

          <section className="subsection">
            <h2>Version Control (Git)</h2>
            <p>Git is a version control system that helps you track changes, revert to previous stages, and work on different branches simultaneously. Understanding Git is crucial for collaboration and deployment.</p>
            <ul>
              <li>Basic Commands: Understand commands like git clone, git commit, git push, and git pull.</li>
              <li>Branching: Learn how to create and manage branches for feature development.</li>
              <li>Remote Repositories: Understand how to work with remote repositories like GitHub or GitLab.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Environment;