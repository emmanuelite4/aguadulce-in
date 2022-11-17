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

![](/Users/emmanuel/Desktop/Screenshot 2022-11-17 at 14.12.22.png)

2. Contains the list of members

![](/Users/emmanuel/Desktop/Screenshot 2022-11-17 at 14.13.30.png)

3. Contains details about a member

![](/Users/emmanuel/Desktop/Screenshot 2022-11-17 at 14.13.44.png)