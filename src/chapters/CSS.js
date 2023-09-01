
import React from 'react';

function CSS() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <h1>Styling with CSS</h1>
        <div className="content-container">
          <section className="subsection">
            <h2>Inline, Internal, and External CSS</h2>
            <p>CSS can be applied in different ways: inline directly within HTML tags, internal within the &lt;style&gt; element, or external via linked CSS files.</p>
          </section>

          <section className="subsection">
            <h2>CSS Selectors, Properties, and Values</h2>
            <p>CSS rules are defined by selectors that target HTML elements. Each rule set contains properties and their corresponding values to style the elements.</p>
          </section>

          <section className="subsection">
            <h2>The Box Model</h2>
            <p>The CSS box model describes the layout of each element on the page. It consists of margins, borders, padding, and the actual content.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CSS;
