import React from 'react';

function Website() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <h1>Building a Simple Website</h1>
        <div className="content-container">
          <section className="subsection">
            <h2>Planning the website</h2>
            <p>Before building a website, it's essential to plan its structure, design, and functionality.</p>
            <ul>
              <li>Define Objectives: What is the website for? What are you trying to achieve?</li>
              <li>Target Audience: Who are you building the website for?</li>
              <li>Content Outline: What content will go on each page?</li>
            </ul>
          </section>
          <section className="subsection">
            <h2>Structuring HTML, CSS, and JS</h2>
            <p>Proper structuring of HTML, CSS, and JS files is crucial for maintainability.</p>
            <ul>
              <li>HTML: Use semantic elements and keep the structure clean.</li>
              <li>CSS: Follow a methodology like BEM or SMACSS for consistent naming.</li>
              <li>JS: Modularize your code and keep it DRY (Don't Repeat Yourself).</li>
            </ul>
          </section>
          <section className="subsection">
            <h2>Creating a basic layout</h2>
            <p>A basic layout serves as a blueprint for the website.</p>
            <ul>
              <li>Header: Contains the main navigation and branding.</li>
              <li>Body: The main content area, divided into sections or components.</li>
              <li>Footer: Contains secondary information and links.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Website;