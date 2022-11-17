import { useEffect, useState } from "react";
import { Contract } from "web3-eth-contract";
import { initialContract } from "../libs/service";

export const useApp = () => {
  const [appState, setAppState] = useState({ loading: false, error: "" });
  const [contract, setContract] = useState<Contract | null>(null);

  useEffect(() => {
    setAppState((prev) => ({ ...prev, loading: true }));
    initialContract()
      .then((res) => {
        setContract(res.contract);
        setAppState((prev) => ({ ...prev, loading: false, error: "" }));
      })
      .catch(() => {
        setAppState((prev) => ({
          ...prev,
          loading: false,
          error: "Can't connect to contract",
        }));
      });
  }, []);

  return { ...appState, contract };
};
