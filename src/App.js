import React from "react";
import logo from "./logo.svg";
import "./App.css";

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
        Enable Metamask (hard refresh page after)
      </button>
      <button onClick={() => getAddress()}>Get Current Metamask Address</button>
      <button onClick={() => requestSignature()}>request signature</button>
    </div>
  );
}

export default App;
