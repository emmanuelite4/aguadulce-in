import { useEffect, useState } from "react";
import "./App.css";
import { initialContract } from "./libs/contract";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Spin, Typography } from "antd";
import { Contract } from "web3-eth-contract";

function App() {
  const [appState, setAppState] = useState({ loading: false, error: "" });
  const [contract, setContract] = useState<Contract | null>(null);
  useEffect(() => {
    setAppState((prev) => ({ ...prev, loading: true }));
    initialContract()
      .then((res) => {
        console.log(res);
        setContract(res.contract);
        setAppState((prev) => ({ ...prev, loading: false, error: "" }));
      })
      .catch((err) => {
        setAppState((prev) => ({
          ...prev,
          loading: false,
          error: "Can't connect to contract",
        }));
      });
  }, []);

  if (appState.error) {
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
  if (appState.loading)
    return (
      <div className={"App"}>
        <Typography.Title level={4}>Setting up your app</Typography.Title>
      </div>
    );

  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path={""} />
      </Routes>
    </div>
  );
}

export default App;
