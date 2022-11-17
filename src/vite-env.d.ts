/// <reference types="vite/client" />

import { Contract } from "web3-eth-contract";

declare global {
  interface Window {
    web3: any;
    ethereum: any;
    memberRoleContract: Contract;
  }
}

interface ImportMetaEnv {
  readonly VITE_APP_ACCOUNT_ADDRESS: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
