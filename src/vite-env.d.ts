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
  readonly VITE_APP_PROVIDER_URL: string;
  readonly VITE_APP_CONTRACT_ADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
