/// <reference types="vite/client" />

import { Contract } from "web3-eth-contract";

declare global {
  interface Window {
    web3: any;
    ethereum: any;
    memberRoleContract: Contract;
  }
}
