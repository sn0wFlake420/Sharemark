import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Heading } from "../styles";
import Navbar from "./Navbar";
import socket from "../lib/socket";

const Container = styled.div`
  display: flex;
  padding: 0px 15px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-evenly;
  flex-direction: row;
  width: 80%;
`;

const PageDivide = styled.div`
  width: 50%;
`;

const EditorTitle = styled(Heading)`
  text-align: center;
  margin: 20px 0px;
  font-size: 36px;
`;

const MarkdownArea = styled.div`
  padding: 0px 20px;
`;

/*SOCKET EVENTS BEGIN*/

/*SOCKET EVENTS END*/

const Editor = () => {
  const [md, setMd] = useState(null);

  socket.on("new-data", (data) => {
    document.getElementsByClassName("markdown-input")[0].value = data;
    setMd(data);
  });

  const inputHandler = (e) => {
    e.preventDefault();
    setMd(e.target.value);
    socket.emit("message", e.target.value);
  };

  const renderMarkdown = () => {
    return md === null ? null : <ReactMarkdown>{md}</ReactMarkdown>;
  };

  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <PageDivide>
          {" "}
          <EditorTitle>Input Area</EditorTitle>
          <textarea className="markdown-input" onChange={inputHandler} />
        </PageDivide>
        <PageDivide>
          {" "}
          <EditorTitle>Markdown</EditorTitle>
          <MarkdownArea>{renderMarkdown()}</MarkdownArea>
        </PageDivide>
      </Container>
    </React.Fragment>
  );
};

export default Editor;
