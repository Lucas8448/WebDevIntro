import React from 'react';

function HTML() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <h1>Understanding HTML</h1>
        <div className="content-container">
          <section className="subsection">
            <h2>HTML Structure</h2>
            <p>The structure of an HTML document is hierarchical, starting with a DOCTYPE declaration, followed by HTML tags that define elements like headers, paragraphs, and links.</p>
            <ul>
              <li>DOCTYPE: Declares the document type and version of HTML.</li>
              <li>HTML: The root element wrapping all content.</li>
              <li>Head: Contains metadata and links to stylesheets.</li>
              <li>Body: Houses the content that is rendered on the page.</li>
            </ul>
          </section>
          
          <section className="subsection">
            <h2>Tags and Elements</h2>
            <p>HTML is composed of elements defined by tags. Tags like &lt;h1&gt;, &lt;p&gt;, and &lt;a&gt; specify headings, paragraphs, and links, respectively.</p>
            <ul>
              <li>Opening and Closing Tags: Most HTML elements have opening and closing tags.</li>
              <li>Self-Closing Tags: Some elements like &lt;img&gt; and &lt;br&gt; don't require a closing tag.</li>
              <li>Attributes: Provide additional information about elements. For example, the `href` attribute in &lt;a&gt; tags.</li>
            </ul>
          </section>
          
          <section className="subsection">
            <h2>Lists, Links, and Images</h2>
            <p>HTML provides tags for creating lists (&lt;ul&gt;, &lt;ol&gt;), links (&lt;a&gt;), and images (&lt;img&gt;). These are essential for structuring content and navigation.</p>
            <ul>
              <li>Unordered Lists: Use &lt;ul&gt; for a list where order doesn't matter.</li>
              <li>Ordered Lists: Use &lt;ol&gt; for a list where sequence is important.</li>
              <li>Links: Created with the &lt;a&gt; tag and `href` attribute to specify the URL.</li>
              <li>Images: Use the &lt;img&gt; tag with `src` and `alt` attributes.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HTML;