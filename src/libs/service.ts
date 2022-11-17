import MemberRoleJSON from "../../contract/build/contracts/MemberRole.json";
import Web3 from "web3";

export const initialContract = async () => {
  await loadWeb3();
  const { contract } = await loadContract();

  return { contract };
};

export const loadAccount = async () => {
  return await window.web3.eth.getCoinbase();
};

const loadContract = async () => {
  let contractAddress = import.meta.env.VITE_APP_CONTRACT_ADDRESS;
  let accountAddress = import.meta.env.VITE_APP_ACCOUNT_ADDRESS;
  const memberRoleContract = new window.web3.eth.Contract(
    MemberRoleJSON.abi,
    contractAddress
  );

  memberRoleContract.defaultAccount = accountAddress;

  window.memberRoleContract = memberRoleContract;

  return { contract: memberRoleContract };
};

const loadWeb3 = async () => {
  window.web3 = new Web3("ws://localhost:7545");
};

export const getContract = () => window.memberRoleContract;
