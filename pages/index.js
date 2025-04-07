import React, {useState, useContext} from "react";
import {  Header,
  Footer,
  Feature,
  Hero,
  Platfrom,
  Preloader,
  Scroll,
  Scurity,
  Statistics,
  Testomonial,
  Token,}
 from "../components/index"
 import {CONTEXT} from "../context/context"
const index = () => {
  const { TOKEN_SWAP,
    LOAD_TOKEN,
    notifyError,
    notifySuccess,
    setLoader,
    loader,
    connect,
    address,
    swap}  = useContext(CONTEXT);
    //Open token component
    const [token_1, setToken_1]  = useState();
    const [token_2, setToken_2] = useState();
    const [openToeken, setOpenToken] = useState(false)


    //input data
    const [slippageAmount, setSlippageAmount]  = useState(2);
    const [deadlineMinutes, setDeadlineMinutes] = useState(10);
    const [inputAmount, setInputAmount] = useState(undefined);

    //output data
    const [outputAmount, setOutputAmount] = useState(undefined);
    const [transaction, setTransaction] = useState(undefined);
    const [ratio, setRatio] = useState(undefined)

  return <div>{TOKEN_SWAP}</div>;
};

export default index;
