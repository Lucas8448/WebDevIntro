
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
          </section>

          <section className="subsection">
            <h2>Input Types and Validations</h2>
            <p>HTML5 offers various input types for better user experience and built-in validation methods to enforce input patterns.</p>
          </section>

          <section className="subsection">
            <h2>Tables for Data Representation</h2>
            <p>HTML tables are used to present data in a tabular format. They are especially useful for displaying large sets of data.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Forms;
