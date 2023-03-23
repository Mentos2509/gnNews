import React from "react";
import MainTemplate from "templates/MainTemplate";
import Input from "components/atoms/Input/Input";

function App() {
  return (
    <MainTemplate>
      <Input
  label="Search"
  type = "search"
  name="search"
  placeholder= "search" />
    </MainTemplate>
  );
}

export default App;
