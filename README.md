This is a [React](https://reactjs.org/) project bootstrapped
with [`vite`](https://vite.dev/).

## Getting Started

### Requirement

The following package should be install on the machine

* solc@0.8.11
* truffle@5.6.5
* Ganache

Configure your ganache to listen to port `7545`

### Environment variables

Create a **.env** or **.env.local** file and add the following environment variable to it.

```bash
    - VITE_APP_CONTRACT_ADDRESS
    - VITE_APP_ACCOUNT_ADDRESS
    - VITE_APP_PROVIDER_URL
```

## Following the following procedure.

### To Deploy the smart contract

Open your terminal in the folder ``/contract``

Run ``truffle migrate --reset``

### To install the node modules app

``yarn install``

### To start app server

``yarn dev``

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

The app contain three pages

1. Contains the list of roles

<img width="861" alt="Screenshot 2022-11-17 at 14 12 22" src="https://user-images.githubusercontent.com/66213005/202457776-2514401c-8c2b-4685-a579-b0e6328fa743.png">



2. Contains the list of members

<img width="862" alt="Screenshot 2022-11-17 at 14 13 30" src="https://user-images.githubusercontent.com/66213005/202457808-c495b1f1-2784-46f6-85b4-ed637befab77.png">



3. Contains details about a member

<img width="865" alt="Screenshot 2022-11-17 at 14 13 44" src="https://user-images.githubusercontent.com/66213005/202457854-7a434dc5-4c29-46b9-aeb9-8cd3383ceb22.png">
