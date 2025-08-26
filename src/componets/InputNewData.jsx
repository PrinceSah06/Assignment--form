import React from 'react'
import { useState } from 'react'
import InputField from './InputFIeld'
import {useDispatch} from 'react-redux'
import { addDataInfo } from '../utils/infoSlice'

function InputNewData() {
    const dispatch = useDispatch()

  const[dataInfo,setDataInfo]=useState({
    name:'',
    age:"",
    email:'',
 
  })


    const handelChange=(e)=>{
  console.log('handelChaged clicked')
  const {value,name}= e.target
  setDataInfo({...dataInfo,[name]:value ,id:Date.now()})
  console.log(dataInfo)

  }
    
   const addNewDate = ()=>{
    setDataInfo(dataInfo)//
    console.log('new data is ' ,dataInfo)

  }
  return (
    <div className='flex mx-1 gap-1 shadow-sm'>
    <InputField  name='name' placeholder='Name' onChange={handelChange} label="Name"  value={dataInfo.name} errMSg='please enter name'/>
    <InputField name='email' placeholder='Email' label="Email" onChange={handelChange}   value={dataInfo.email} errMSg='please enter email'/>
    <InputField  name='age' placeholder='Age' label="Age"  onChange={handelChange}   value={dataInfo.age} errMSg='please enter Age'/>
    <button onClick={()=>{
        dispatch(addDataInfo({...dataInfo,}))
        console.log('iffo',dataInfo)
        setDataInfo({
            name:'',
    age:"",
    email:''
        })
    }}> Add Data</button>
      
    </div>
  )
}

export default InputNewData
