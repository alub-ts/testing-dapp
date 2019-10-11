import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const requestSignature = async () => {
    window.web3.eth.getAccounts((error, result) => {
      console.log(error);
      console.log(result);
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
      <button
        onClick={() =>
          window.web3.eth.getBalance(
            "0xab7c74abC0C4d48d1bdad5DCB26153FC8780f83E",
            (error, result) => {
              console.log(error);
              console.log(result.toString(10));
            }
          )
        }
      >
        Test button getBalance
      </button>
      <button
        onClick={() =>
          window.web3.eth.getTransaction(
            "0x177ebae8e77cd190cbd291eefd317ede12c3a0049dba61453b596bac90c17bff",
            (error, result) => {
              console.log(error);
              console.log(result);
            }
          )
        }
      >
        Test button getTransaction
      </button>
      <button
        onClick={() =>
          window.ethereum.enable((error, result) => {
            console.log(error);
            console.log(result);
          })
        }
      >
        Enable Metamask
      </button>
      <button
        onClick={() =>
          window.web3.eth.getAccounts((error, result) => {
            console.log(error);
            console.log(result);
          })
        }
      >
        Get Current Metamask Address
      </button>
      <button onClick={() => requestSignature()}>request signature</button>
    </div>
  );
}

export default App;
