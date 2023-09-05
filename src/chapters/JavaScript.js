import React from 'react';

function JavaScript() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <h1>Introduction to JavaScript</h1>
        <div className="content-container">
          <section className="subsection">
            <h2>Variables and Data Types</h2>
            <p>JavaScript supports various data types like string, number, boolean, etc. Variables are used to store these data types.</p>
            <ul>
              <li><strong>String:</strong> Textual data, enclosed in quotes.</li>
              <li><strong>Number:</strong> Numeric data, can be integers or floats.</li>
              <li><strong>Boolean:</strong> Represents true or false.</li>
              <li><strong>Null and Undefined:</strong> Represent an absence of value.</li>
            </ul>
          </section>

          <section className="subsection">
            <h2>Operators and Expressions</h2>
            <p>Operators like addition, subtraction, and others are used in JavaScript to perform operations. Expressions combine variables and operators to produce a value.</p>
            <ul>
              <li><strong>Arithmetic Operators:</strong> +, -, *, /</li>
              <li><strong>Comparison Operators:</strong> ==, !=, &lt;, &gt;, &lt;=, &gt;=</li>
              <li><strong>Logical Operators:</strong> &&, ||, !</li>
              <li><strong>Ternary Operator:</strong> condition ? expr1 : expr2</li>
            </ul>
          </section>

          <section className="subsection">
            <h2>Control Structures (loops, if-else, etc.)</h2>
            <p>Control structures like loops and if-else statements are used to control the flow of the program.</p>
            <ul>
              <li><strong>If-Else:</strong> Conditional execution based on boolean values.</li>
              <li><strong>Switch-Case:</strong> Multiple conditional checks.</li>
              <li><strong>For Loop:</strong> Executes block of code a specified number of times.</li>
              <li><strong>While and Do-While:</strong> Executes block of code while a condition is true.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default JavaScript;