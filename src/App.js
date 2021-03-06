import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Walletlink from 'walletlink';
import  Web3 from "web3";
import {TerminalHttpProvider, SourceType} from '@terminal-packages/sdk';
const walletlink = new Walletlink({appName: 'testWalletlink'});
const ethereum = walletlink.makeWeb3Provider('https://mainnet.infura.io/v3/d44c7ae787e4470499b9a8118db2f71e',1);
//const web3 = new Web3(ethereum);
// const web3 = new Web3(
//   new TerminalHttpProvider({
//     apiKey: '21BzLD5JGU+GYjASdpXGKg==',
//     source: 'Walletlink',
//     customHttpProvider: ethereum,
//   })
// )


function App() {
  const getBalanceMM = async () => {
    window.web3.eth.getBalance(
      "0xab7c74abC0C4d48d1bdad5DCB26153FC8780f83E",
      (error, result) => {
        console.log(error);
        console.log(result.toString(10));
      }
    );
  };

  // const enableMM = async () => {
  //   web3.eth.currentProvider._provider.enable().then((accounts: string[]) => {
  //     console.log(`User's address is ${accounts[0]}`)
      
  //   })
  // };
  const enableMM = async () => {
    window.ethereum.enable((error, result) => {
      console.log(error);
      console.log(result);
    });
  };

  const getAddress = async () => {
    window.web3.eth.getAccounts((error, result) => {
      console.log(error);
      console.log(result);
    });
  };

  const requestSignature = async () => {
    window.web3.eth.getAccounts((error, result) => {
      window.web3.eth.sign(
        result[0],
        ["SOME DATA TO SIGN"],
        (error, result) => {
          console.log(error);
          console.log(result);
        }
      );
    });
  };

  return (
    <div>
      <button onClick={() => getBalanceMM()}>Test button getBalance</button>
      <button onClick={() => enableMM()}>
        Enable (hard refresh page after)
      </button>
      <button onClick={() => getAddress()}>test coinbase</button>
      <button onClick={() => requestSignature()}>request signature</button>
    </div>
  );
}

export default App;
