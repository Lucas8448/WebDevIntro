import React from 'react';

function AdvancedCSS() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <h1>Advanced CSS Concepts</h1>
        <div className="content-container">
          <section className="subsection">
            <h2>CSS Positioning</h2>
            <p>CSS offers various positioning methods like static, relative, and absolute to control the layout of elements.</p>
            <ul>
              <li>Static: The default value, elements are positioned based on the normal flow of the document.</li>
              <li>Relative: Positioned relative to its normal position, useful for minor adjustments.</li>
              <li>Absolute: Positioned relative to the nearest positioned ancestor, if any; otherwise, relative to the initial containing block.</li>
            </ul>
          </section>

          <section className="subsection">
            <h2>CSS Grid and Flexbox</h2>
            <p>Grid and Flexbox are modern layout systems available in CSS, offering a simpler and cleaner toolset for arranging content.</p>
            <ul>
              <li>Grid: Ideal for 2D layouts, both columns and rows. Offers great control over item placement.</li>
              <li>Flexbox: Designed for 1D layouts, either a row or a column. Offers easier alignment capabilities.</li>
            </ul>
          </section>

          <section className="subsection">
            <h2>Media Queries</h2>
            <p>Media queries allow you to apply CSS rules based on various conditions, like screen width, making your design responsive.</p>
            <ul>
              <li>Basic Syntax: Use `@media` to specify conditions under which certain CSS rules should apply.</li>
              <li>Breakpoints: Set screen widths at which your layout will change.</li>
              <li>Units: Use units like px, em, or rem for more precise control.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdvancedCSS;