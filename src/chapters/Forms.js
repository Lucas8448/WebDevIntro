import React from 'react';

function Forms() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <h1>HTML Forms and Tables</h1>
        <div className="content-container">
          <section className="subsection">
            <h2>Creating Forms</h2>
            <p>HTML forms are essential for collecting user input. They usually consist of form controls like text fields, radio buttons, checkboxes, etc.</p>
            <ul>
              <li>&lt;form&gt; Element: The container for all form controls.</li>
              <li>Text Fields: &lt;input type="text"&gt; for single-line text input.</li>
              <li>Radio Buttons: &lt;input type="radio"&gt; for mutually exclusive options.</li>
              <li>Checkboxes: &lt;input type="checkbox"&gt; for multiple selectable options.</li>
              <li>Submit Button: &lt;input type="submit"&gt; or &lt;button&gt; to submit the form.</li>
            </ul>
          </section>

          <section className="subsection">
            <h2>Input Types and Validations</h2>
            <p>HTML5 offers various input types for better user experience and built-in validation methods to enforce input patterns.</p>
            <ul>
              <li>Email: &lt;input type="email"&gt; automatically validates email formats.</li>
              <li>Number: &lt;input type="number"&gt; ensures only numbers are entered.</li>
              <li>Required: Adding the 'required' attribute enforces an input to be filled.</li>
              <li>Pattern: Use the 'pattern' attribute to define regex-based validation.</li>
            </ul>
          </section>

          <section className="subsection">
            <h2>Tables for Data Representation</h2>
            <p>HTML tables are used to present data in a tabular format. They are especially useful for displaying large sets of data.</p>
            <ul>
              <li>&lt;table&gt; Element: Defines the table.</li>
              <li>&lt;thead&gt;: The table header, usually containing &lt;th&gt; elements.</li>
              <li>&lt;tbody&gt;: The table body, containing rows (&lt;tr&gt;) and data cells (&lt;td&gt;).</li>
              <li>&lt;tfoot&gt;: The table footer, which can be used for summary rows.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Forms;