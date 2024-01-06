import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import CourseTable from "./components/CourseTable";
import CreateDrawer from "./components/CreateDrawer";
import EditDrawer from "./components/EditDrawer";

const App = () => {
  return (
    <Container>
      <Header />
      <CourseTable />
      <CreateDrawer />
      <EditDrawer />
    </Container>
  );
};

export default App;
