import React from "react";
import { styled } from "goober";

const TestC = styled("div")`
  color: red;
`;

const Test = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React 11ty Example</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body></body>
      <TestC>Hello Red</TestC>
      <div>Hello World</div>
    </html>
  );
};
export default Test;
