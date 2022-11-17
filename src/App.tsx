import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Spin, Typography } from "antd";
import Members from "./pages/Members";
import Member from "./pages/Member";
import Header from "./components/Header/Header";
import { useApp } from "./hooks/app";

function App() {
  const { loading, error, contract } = useApp();

  if (error) {
    return (
      <div className={"App"}>
        <Typography.Title level={4}>
          An error has occurred, can't connect to contract
        </Typography.Title>
      </div>
    );
  }
  if (!contract) {
    return (
      <div className={"App"}>
        <Spin />
        <Typography.Title level={4}>App not set up</Typography.Title>
      </div>
    );
  }
  if (loading)
    return (
      <div className={"App"}>
        <Typography.Title level={4}>Setting up your app</Typography.Title>
      </div>
    );

  return (
    <div>
      <Header />
      <div className={"body"}>
        <Routes>
          <Route element={<Home />} path={""} />
          <Route element={<Members />} path={"/members"} />
          <Route element={<Member />} path={"/member/:id"} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
