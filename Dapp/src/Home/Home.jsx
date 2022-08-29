import {FaBitcoin} from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import {useState} from 'react'
import {FaMapMarked} from "react-icons/fa";
import {FaMailBulk} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";
import { useEffect } from 'react';
// import Market_1 from './pages/Market/Market1'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './Home.css'
import React from 'react';
import { Link } from "react-router-dom";

const HomePage= (props) => {


    
    const email_= /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/


    const [input1value , setvalue] = useState("");
    const [regexerror , setregexerror] = useState(true);

    function click_handler(){

        const result= email_.test(input1value);
        if(result){

            console.log("True");
            setregexerror(true);

        }
        else{
            console.log("False")
            setregexerror(false);
        }

    }

    return (
        
        <div className='container_'>

                <div className="container6">
                    <nav className="navbar text-danger navbar-expand-lg navbar-light p-2 d-flex flex-row g-2 justify-content-start align-items-center">
                        <Link to="/Connect" className="link_">
                            <a className="navbar-brand d-flex  " style={{"color":"antiquewhite"}} href="/Connect">Market</a>
                        </Link>

                        <Link to="/Singin" className="link_">
                        <a className="navbar-brand d-flx " style={{"color":"antiquewhite"}} href="/Singin">Connect Wallet</a>
                        </Link>
                        
                        <a className="navbar-brand d-flex " style={{"color":"antiquewhite"}} href="#">Contact</a>
                    </nav>
                </div>

                <div className='main-banner'>

                    <video  autoPlay muted loop id='my_video' src={props.video_link} type="video/mp4">
                        {/* {console.log("Confirm")} */}
                    </video>
                    <div className="div1">

                            <div className="text1 font-weight-bold h1" style={{"whiteSpace":"pre"}}>
                                The Green NFT
                            </div>

                            <form  className='form_ '>

                                <input type="email"  className=" label_set1 select_ ml-0"  placeholder="Enter Email Address..."  value={input1value} onChange={(event)=> setvalue(event.target.value)}/>
                                

                                <div className="d-flex flex-column ">

                                    <button type="button"   onClick={click_handler} className="btn btn-secondary btt" >Register</button>
                                    {/* <small  className={` text-center ml-5   w-auto bg-danger  ${regexerror ? 'd-none' : 'd-block'}`} style={{display: regexerror ? 'block' : 'none' }}  > invalid !</small> */}


                                    <small  className={` text-center ml-5   w-auto1 bg-danger`} style={{display: regexerror ? 'none' : 'block' }}  > invalid !</small>

                                </div>
                                
                            </form>
                    
                    </div>

                </div>



                <div className='d-flex w-100 container2'>

                        <a className="items_1 d-flex flex-column justify-content-end  " href="http://www.google.com">

                            <p className="d-flex w-100 font-weight-bolder text-decoration-none">Planting seedlings</p>

                            <p className="d-flex w-100 ml-5">plant your seedling and make the air clean.</p>

                        </a>

                        <a className="items_2 d-flex flex-column justify-content-end" href="http://www.google.com">

                            <p className="d-flex w-100 text_black text-decoration-none">Plant Market</p>

                            <p className="d-flex w-100 text_black ml-5">Buy or Sell your plants</p>

                        </a>

                        <a className="items_3 d-flex flex-column justify-content-end" href="http://www.google.com">
                                <p className="d-flex w-100 text-decoration-none">Plant health</p>

                                <p className="d-flex w-100 ml-5">Your can check your plant's health information</p>



                        </a>


                        <a className="items_4 d-flex flex-column justify-content-end" href="http://www.google.com">



                                <p className="d-flex w-100 text-decoration-none">Representation</p>

                                <p className="d-flex w-100 ml-5">You can work with us !</p>                 


                        </a>
                    

                </div>
                <div className='main-banner_2'>

                    <video  autoPlay muted loop id='my_video' src={props.video_link_2} type="video/mp4">
                        {/* {console.log("Confirm")} */}
                    </video>
                    <div className="div1">

                            <div className="text1  h4" style={{"whiteSpace":"pre-wrap"}}>
                             <p>We are here to protect the earth .</p>
                             <p>We must help ourselves to be able to live longer and in clean air.</p>
                             <p>This project was created to help whole the earth</p>
                            </div>

                            <form  className='form_ '>

                                <input type="email"  className=" label_set1 select_ ml-0"  placeholder="Enter Email Address..."  value={input1value} onChange={(event)=> setvalue(event.target.value)}/>
                                

                                <div className="d-flex flex-column ">

                                    <button type="button"   onClick={click_handler} className="btn btn-secondary btt" >Register</button>
                                    {/* <small  className={` text-center ml-5   w-auto bg-danger  ${regexerror ? 'd-none' : 'd-block'}`} style={{display: regexerror ? 'block' : 'none' }}  > invalid !</small> */}


                                    <small  className={` text-center ml-5   w-auto1 bg-danger`} style={{display: regexerror ? 'none' : 'block' }}  > invalid !</small>

                                </div>
                                
                            </form>
                    
                    </div>

                </div>


        </div>


    )


}

export default HomePage




// // import { useWeb3React } from "@web3-react/core"
// import {useState, useEffect } from "react";
// // import { injected } from "../components/wallet/Connectors"

// export default function Home() {
//     const [haveMetamask, sethaveMetamask] = useState(true);

//     const connectWallet = async () => {
//         console.log(haveMetamask);
//       };

//     useEffect(() => {
//       const { ethereum } = window;
//       const checkMetamaskAvailability = async () => {
//         if (!ethereum) {
//           sethaveMetamask(false);
//         }
//         sethaveMetamask(true);
//       };
//       checkMetamaskAvailability();
//     }, []);

//   return (

//     <button className="btn" onClick={connectWallet}>
//         Connect
//     </button>
//   )
