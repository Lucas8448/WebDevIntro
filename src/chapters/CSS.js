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
            <ul>
              <li>Inline: Directly in the HTML tag using the `style` attribute. This has the highest specificity.</li>
              <li>Internal: Within the HTML document using a &lt;style&gt; element. Good for single-page documents.</li>
              <li>External: In a separate CSS file linked to the HTML. This is the most maintainable and recommended approach.</li>
            </ul>
          </section>

          <section className="subsection">
            <h2>CSS Selectors, Properties, and Values</h2>
            <p>CSS rules are defined by selectors that target HTML elements. Each rule set contains properties and their corresponding values to style the elements.</p>
            <ul>
              <li>Selectors: Used to target elements. Examples include element selectors, class selectors, and ID selectors.</li>
              <li>Properties: The attributes you want to style, like `color`, `font-size`, `width`, etc.</li>
              <li>Values: The specific styles you assign to properties, like `red` for `color` or `16px` for `font-size`.</li>
            </ul>
          </section>

          <section className="subsection">
            <h2>The Box Model</h2>
            <p>The CSS box model describes the layout of each element on the page. It consists of margins, borders, padding, and the actual content.</p>
            <ul>
              <li>Content: The actual text or images inside the element.</li>
              <li>Padding: The space between the content and the border.</li>
              <li>Border: The line that surrounds the content and padding.</li>
              <li>Margin: The space outside the border, separating it from other elements.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CSS;