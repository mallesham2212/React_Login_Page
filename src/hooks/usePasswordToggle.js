import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons';

const usePasswordToggle = () => {
  const [visible,setVisible] =useState(true);

  const Icon= <FontAwesomeIcon icon  ={ visible ?  faEye:faEyeSlash} onClick={()=>{
    setVisible(!visible)
  }} /> ;

  const InputType= visible ? "password": "text";
  
  return [InputType,Icon];
}

export default usePasswordToggle
