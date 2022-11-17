import { getContract, loadAccount } from "./service";

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

export const addRoleToUser = async (address: string, value: number) => {
  const contract = await getContract();
  const accountAddress = await loadAccount();
  await contract.methods
    .addRole(address, value)
    .send({ from: accountAddress, to: address, gas: 1000000 });
};
