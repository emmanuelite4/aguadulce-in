import MemberRoleJSON from "../../contract/build/contracts/MemberRole.json";
import Web3 from "web3";

export const initialContract = async () => {
  await loadWeb3();
  const { contract } = await loadContract();
  return { contract };
};

const loadAccount = async () => {
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

const getContract = () => window.memberRoleContract;

export const getRoleTypes = async () => {
  const contract = getContract();
  const roleCount = await contract.methods.roleTypesCount().call();

  let roles = [];
  for (let i = 0; i < roleCount; i++) {
    let role = await contract.methods.roleTypes(i).call();
    roles.push(role);
  }
  return roles;
};

export const addRoleType = async (value: string) => {
  const contract = getContract();
  const accountAddress = await loadAccount();
  await contract.methods.addRoleType(value).send({ from: accountAddress });
};

export const getMembers = async () => {
  const members = await window.web3.eth.getAccounts();
  let address = import.meta.env.VITE_APP_ACCOUNT_ADDRESS;

  return members.filter((item: string) => item !== address);
};

export const getMemberRoles = async (address: string) => {
  const contract = getContract();
  return await contract.methods.userRole(address).call();
};

export const changeRoleStatus = async (address: string, value: boolean) => {
  const contract = getContract();
  const accountAddress = await loadAccount();
  await contract.methods
    .changeRoleStatus(address, value)
    .send({ from: accountAddress });
};
