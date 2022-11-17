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
  const memberRoleContract = new window.web3.eth.Contract(
    MemberRoleJSON.abi,
    "0xd7a9907d739aa2feb25AbD92F2B663E30fd883be"
  );

  memberRoleContract.defaultAccount =
    "0x0BBAE7b9D9B03AEd4aD538E527a936a8F195639a";

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
