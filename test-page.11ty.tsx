import React from "react";
import { setup, styled } from "goober";

setup(React.createElement);

const BlueText = styled("div")`
  color: blue;
  font-weight: bold;
`;

const TestPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Test Page</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <BlueText>This should be blue and bold! Updated!</BlueText>
        <div>Regular text</div>
      </body>
    </html>
  );
};

export default TestPage;