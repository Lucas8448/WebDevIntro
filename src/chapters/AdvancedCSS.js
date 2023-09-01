
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
          </section>

          <section className="subsection">
            <h2>CSS Grid and Flexbox</h2>
            <p>Grid and Flexbox are modern layout systems available in CSS, offering a simpler and cleaner toolset for arranging content.</p>
          </section>

          <section className="subsection">
            <h2>Media Queries</h2>
            <p>Media queries allow you to apply CSS rules based on various conditions, like screen width, making your design responsive.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdvancedCSS;
