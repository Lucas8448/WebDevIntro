
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
          </section>
          <section className="subsection">
            <h2>Tags and Elements</h2>
            <p>HTML is composed of elements defined by tags. Tags like &lt;h1&gt;, &lt;p&gt;, and &lt;a&gt; specify headings, paragraphs, and links, respectively.</p>
          </section>
          <section className="subsection">
            <h2>Lists, Links, and Images</h2>
            <p>HTML provides tags for creating lists (&lt;ul&gt;, &lt;ol&gt;), links (&lt;a&gt;), and images (&lt;img&gt;). These are essential for structuring content and navigation.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HTML;
