import { styled } from "goober";
import React from "react";

const Container = styled("div")`
  max-width: 960px;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`;

const Page = ({ content }) => {
  return <Container>{content}</Container>;
};

export default Page;
