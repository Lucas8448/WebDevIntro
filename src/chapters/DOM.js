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
            <ul>
              <li>Tree Structure: It treats an XML or HTML document as a tree structure where each node is an object representing a part of the page.</li>
              <li>API: The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.</li>
            </ul>
          </section>

          <section className="subsection">
            <h2>Selecting and Changing Elements</h2>
            <p>The DOM provides methods for selecting and modifying HTML elements.</p>
            <ul>
              <li>getElementById: Selects an element by its ID.</li>
              <li>querySelector: Uses CSS selectors to grab elements.</li>
              <li>innerHTML: Changes the content inside an element.</li>
              <li>setAttribute: Modifies an attribute of an element.</li>
            </ul>
          </section>

          <section className="subsection">
            <h2>Event Handling</h2>
            <p>Events like click, hover, etc., can be handled using the DOM.</p>
            <ul>
              <li>addEventListener: Attach event handlers to elements.</li>
              <li>Event Object: Access data about the event, like the target element or mouse position.</li>
              <li>removeEventListener: Detach event handlers from elements when they are not needed.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DOM;