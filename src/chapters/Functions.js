import React from 'react';

function Functions() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <h1>Functions in JavaScript</h1>
        <div className="content-container">
          <section className="subsection">
            <h2>Function Definition and Invocation</h2>
            <p>Functions in JavaScript can be defined in various ways and can be invoked using their names.</p>
            <ul>
              <li>Function Declaration: Defined using the `function` keyword.</li>
              <li>Function Expression: Assigned to a variable.</li>
              <li>Arrow Functions: Use the `={'>'}` syntax and have a shorter syntax.</li>
              <li>Invocation: Call a function by its name followed by parentheses `()`.</li>
            </ul>
          </section>

          <section className="subsection">
            <h2>Scope and Closures</h2>
            <p>Scope determines the visibility of variables. Closures allow functions to maintain state.</p>
            <ul>
              <li>Global Scope: Variables defined outside functions are globally scoped.</li>
              <li>Local Scope: Variables defined inside functions are locally scoped.</li>
              <li>Lexical Scope: Inner functions have access to variables of outer functions.</li>
              <li>Closures: Functions remember the scope in which they were created, even if invoked elsewhere.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Functions;