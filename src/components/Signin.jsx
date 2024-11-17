import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import usePasswordToggle from '../hooks/usePasswordToggle';

const Signin = () => {
    const [verify, setverify] = useState(false);
    const [otp, setOtp] = useState("");
    const [number, setNumber] = useState("");
    const [dumyNum, setDummyNum] = useState(true);
    const [passValue, setPassValue] = useState("");
    const [rePassValue, setRePassValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    const [isReFocus, setIsReFocus] = useState(false);
 
    const [enteredOTP, setEnteredOTP] = useState(false);
    const [passType, toggleIcon] = usePasswordToggle();
    const [repassType, retoggleIcon] = usePasswordToggle();
    const [emailFeild,setEmailFeild] =useState("");
    // const [signPassValue,setSignPassValue]=useState("");
    // const [signResPassValue,setSignResPassValue]=useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
            setverify(false);
            setEnteredOTP(false);
            setDummyNum(true);
        if (/^[0-9]*$/.test(value)) {
            setNumber(value); // Update state only if the value is a number
        }
    };

    return (


        <>
            <div className="flex flex-col  justify-center items-center ">
                <div>
                    <h2 className="font-bold   py-6">Welocme to Pragnyaaa</h2>
                </div>
                <div className="login-box border-solid shadow-md p-4 w-72 rounded-xl  ">

                    <div className="tags flex justify-start items-start flex-col">
                        <label className="mb-2  text-sm" htmlFor="name">Mobile No</label>
                        <div className='flex flex-row justify-evenly mb-5'>
                            <div>
                                <input className="pt-1 pb-1 pl-2 pr-2 border-solid border-2 border-indigo-200 rounded-md mr-3 " onChange={handleInputChange} type="tel" value={number} maxLength="10" id="name" />
                            </div>
                            {
                                number.length === 10 && dumyNum ? (
                                    <div>
                                        <button className='text-xs pt-2' onClick={() => setverify(true)}>
                                            Get OTP
                                        </button>
                                    </div>
                                ) :
                                    (
                                        enteredOTP ? <div className='text-xs pt-2' > VERIFIED </div> : <div></div>
                                    )
                            }

                        </div>

                    </div>




                    {/* <div className="tags flex justify-start items-start flex-col ">
                        <label className="mb-2  text-sm" htmlFor="name">Enter OTP</label>
                        <div className='flex flex-row justify-between mb-5'>
                           <div>
                                <input className=" border-solid border-2 border-indigo-200 rounded-md mr-7 " type="password"  id="name" />
                           </div>
                           <div>
                                <button onClick={()=>{
                                    setverify(true);
                                }}>Verify</button>
                           </div>
                        </div>
                    </div> */}

                    {verify && <div>
                        <div>
                            <input className="pt-1 pb-1 pl-2 pr-2 border-solid border-2 border-indigo-200 rounded-md mr-7 " type="tel" maxLength={4} onChange={(e) => {
                                setOtp(e.target.value)
                            }} id="name" />
                        </div>
                        <div>
                            <button className='mt-3 mb-3 ml-3 shadow-md p-1 rounded-md ' onClick={() => {
                                setEnteredOTP(otp.length === 4);
                                setDummyNum(otp.length !== 4);
                                setverify(otp.length !== 4);
                            }}>verify OTP</button>
                        </div>
                    </div>}

                    <div className="tags flex justify-start items-start flex-col">
                        <label className="mb-2  text-sm" htmlFor="name">Username Or email</label>
                        <input onChange={(e)=>{
                            setEmailFeild(e.target.value)
                        }} className="pt-1 pb-1 pl-2 pr-2 border-solid border-2 border-indigo-200 rounded-md  mb-5" type="password" id="name" />
                    </div>

                    <div className="tags flex justify-start items-start flex-col">
                        <label className="mb-2  text-sm" htmlFor="name">Password</label>

                        <div className="flex justify-between mb-5">
                            <input onChange={(e) => {
                                setPassValue(e.target.value);

                            }} onFocus={() => {
                                setIsFocus(true);1111111111
                                setIsReFocus(false)
                            }} className="pt-1 pb-1 pl-2 pr-2 border-solid border-2 border-indigo-200 rounded-md  mr-4 " type={passType} id="name" />
                            {(passValue.length >= 1 && isFocus) && <span><p> {toggleIcon} </p></span>}

                        </div>
                    </div>

                    <div className="tags flex justify-start items-start flex-col">
                        <label className="mb-2  text-sm" htmlFor="name">Re-enter-password</label>

                        <div className="flex justify-between mb-5">
                            <input onChange={(e) => {
                                setRePassValue(e.target.value)

                            }} onFocus={() => {
                                setIsReFocus(true);
                                setIsFocus(false);


                            }} className="pt-1 pb-1 pl-2 pr-2 border-solid border-2 border-indigo-200 rounded-md  mr-4 " type={repassType} id="name" />
                            {(rePassValue.length >= 1 && isReFocus) && <span><p> {retoggleIcon} </p></span>}
                        </div>
                    </div>

                <div className='flex justify-between'>
                    <div className='mb-3' >
                        { (passValue===rePassValue) && !verify  && emailFeild.length!==0 ? <Link className='mb-2' to={"/"} >Sign Up</Link> : <Link>Sign Up</Link> }
                    </div>


                    <div>
                        <button><Link to={"/"}>back to login</Link></button>
                    </div>
                </div>

                   
                </div>
            </div >
        </>
    )
}

export default Signin
