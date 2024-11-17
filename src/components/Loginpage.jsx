import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faCoffee, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Showpass from "../utils/Showpass";
import usePasswordToggle from "../hooks/usePasswordToggle";

const Loginpage = () => {
    const [emailFeild, setEmailFeild] = useState("");
    const [passType, toggleIcon] = usePasswordToggle();
    const[passValue,setPassValue]=useState("");
    const [isFocus,setIsFocus]=useState(false);
    const [showError ,setShowError]=useState(false);

    return (
        <>
            <div className="flex flex-col  justify-center items-center ">
                <div>
                    <h2 className="font-bold   py-6">Welocme to Pragnyaaa</h2>


                </div>
                <div className="login-box border-solid shadow-md p-4 w-72 rounded-xl  ">

                    <div className="tags flex justify-start items-start flex-col">
                        <label className="mb-2  text-sm" htmlFor="name"> Username Or Email</label>
                        <input onChange={(e)=>{
                            setEmailFeild(e.target.value);
                        }} className="pt-1 pb-1 pl-2 pr-2 border-solid border-2 border-indigo-200 rounded-md mb-2 " type="email" id="name" />
                    </div>

                    <div className="tags flex justify-start items-start flex-col">
                        <label className="mb-2  text-sm" htmlFor="name">Password</label>


                        {/* {password ?
                            <div className="flex justify-between mb-5">
                                <input className="pt-1 pb-1 pl-2 pr-2 border-solid border-2 border-indigo-200 rounded-md  mr-4 " type="password" id="name" />  <button onClick={() => { setPassword(false) }} ><FontAwesomeIcon icon={faEyeSlash} /></button > </div> :
                            <div className="flex justify-between mb-5 ">
                                <input className="pt-1 pb-1 pl-2 pr-2 border-solid border-2 border-indigo-200 rounded-md  mr-4 " type="text" id="name" /><button onClick={() => { setPassword(true) }}><FontAwesomeIcon icon={faEye} /></button>
                            </div>
                        } */}
                        <div className="flex justify-between mb-5">
                            <input onChange={(e)=>{
                                setPassValue(e.target.value)
                            }} className="pt-1 pb-1 pl-2 pr-2 border-solid border-2 border-indigo-200 rounded-md  mr-4 " type={passType} id="name" />
                            {passValue.length>=1 && <span><p> {toggleIcon} </p></span>}
                        </div>


                    </div>

                    {showError && <div className="pb-2" >enter correct details</div> }

                    <div className="flex justify-between">
                        {( passValue.length!==0 && emailFeild.length!==0) ? <Link to={"/home"} className="text-sm">Login</Link> :
                        
                        <div>
                           
                            <Link className="text-sm" onClick={()=>{
                                 setShowError(!showError);
                            }
                            }> Login</Link>
                        </div>

                        }
                        <Link to={"/sign"} className="text-sm underline ">don't have an account</Link>
                    </div>

                </div>
            </div>


        </>
    );
}
export default Loginpage;