import React, { useState } from 'react';
import InputField from './InputFIeld';  // make sure the import matches your actual file/component name
import {useDispatch} from 'react-redux'
import { addInfo } from '../utils/infoSlice';
import { useNavigate } from 'react-router-dom';
function SignupPage() {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    confirm: ''
  });
  console.log(info)
  const navigate = useNavigate()
   const dispatch = useDispatch()

  const [errors, setErrors] = useState({});

  function handleChanges(e) {
    const { name, value } = e.target;
    
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Simple per-field validation example
    setErrors((prev) => {
      let errorMsg = '';

      if (value.trim() === '') {
        errorMsg = `Invalid ${name.charAt(0).toUpperCase() + name.slice(1)}`;
      } else if (name === 'confirm' && value !== info.password) {
        errorMsg = 'Password does not match';
      }

      return {
        ...prev,
        [name]: errorMsg,
      };
    });
  }
   const addDataToStore =()=>{
    dispatch(addInfo(info))
    navigate('data')

   }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      
      <InputField
        value={info.name}
        name="name"
        label="Name"
        placeholder="Enter your Name"
        errorMessage={errors.name}
        onChange={handleChanges}
        invalid={!!errors.name}
      />
      
      <InputField
        value={info.email}
        name="email"
        label="Email"
        placeholder="Enter your Email"
        errorMessage={errors.email}
        onChange={handleChanges}
        invalid={!!errors.email}
      />
      
      <InputField
        value={info.phone}
        name="phone"
        label="Phone"
        placeholder="Enter your Phone Number"
        errorMessage={errors.phone}
        onChange={handleChanges}
        invalid={!!errors.phone}
      />
      
      <InputField
        value={info.password}
        name="password"
        label="Password"
        placeholder="Enter your Password"
        errorMessage={errors.password}
        onChange={handleChanges}
        invalid={!!errors.password}
      />
      
      <InputField
        value={info.confirm}
        name="confirm"
        label="Confirm Password"
        placeholder="Confirm your Password"
        errorMessage={errors.confirm}
        onChange={handleChanges}
        invalid={!!errors.confirm}
      />

      <button onClick={addDataToStore}>Sign up </button>
    </div>
  );
}

export default SignupPage;
