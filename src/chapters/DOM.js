
import React from 'react';

function DOM() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <h1>Basic DOM Manipulation</h1>
        <div className="content-container">
          <section className="subsection">
            <h2>What is the DOM?</h2>
            <p>The Document Object Model (DOM) represents the structure of a web page.</p>
          </section>
          <section className="subsection">
            <h2>Selecting and changing elements</h2>
            <p>The DOM provides methods for selecting and modifying HTML elements.</p>
          </section>
          <section className="subsection">
            <h2>Event handling</h2>
            <p>Events like click, hover, etc., can be handled using the DOM.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DOM;
