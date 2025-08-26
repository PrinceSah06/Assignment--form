import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from "./InputFIeld";
import InputNewData from "./InputNewData";
import { addInfo,deleteDataFromInfo,editDataInfo } from "../utils/infoSlice";

function DataTable({  }) {
  const dispatch = useDispatch()
  
    const [editRowId,setEditRowId] =useState(null);

    const [editFormData,setEditFormData] =useState({})
    const [searchText,setSearchText] =useState('')

    const [sortconfig,setSortConfig] =useState({
      key:null,
      direction:'acending'
    })

  
  const data = useSelector(store=> store.info.dataBase)
  // console.log('this is data1',data1)
  
  
  const handleEditClick = (row)=>{

    setEditRowId(row.id)
// add object which  we want edit
    setEditFormData(row)

  }

  const handelEditFormData = (e)=>{

    //this is for update editform obj
    const {name,value} = e.target;
    setEditFormData((preData)=>(
      {
       ...preData,[name]:value
      }
    ))
  }
  const handleSaveClick=()=>{
    dispatch(editDataInfo(editFormData))
    setEditRowId(null)
  }

  const deleteData=(id)=>{
    dispatch(deleteDataFromInfo(id))

  }
  const handleSearchText = (e)=>{
    setSearchText(e.target.value)

  }
  const filterData =data.filter(item =>{
    if(searchText===''){
      return true;
    }
    const inLowerCase = searchText.toLowerCase()
    return(
        item.name.toLowerCase().includes(inLowerCase)) ||item.email.toLowerCase().includes(inLowerCase)
    
        

  })
  const handelclickDirection=(key)=>{
          let direction ="ascending"
          if(sortconfig.key ===key && direction ==="ascending"){
            direction= "desecding"
          }
        }
  return (<div >
    <InputNewData/>
    <div className=" flex justify-center items-center"><label className="px-2 text-2xl " htmlFor="search">Search </label>
      <input className="w-1/4 rounded p-2 border" type="text" placeholder="Search" value={searchText} onChange={(e)=>handleSearchText(e)}/></div>
    <div  className="flex justify-center items-center ">
   <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="" >
            <td  onClick={()=>handelclickDirection('name')} className="p-2 border border-gray-300 cursor-pointe  ">Name</td>
            <td onClick={()=>handelclickDirection('age')} className="p-2 border border-gray-300 cursor-pointe  ">age</td>
            <td onClick={()=>handelclickDirection('email')} className="p-2 border border-gray-300 cursor-pointe  ">Email</td>
          </tr>
        </thead>
        <tbody>
          {
           filterData.map((e,i)=>{
              return <tr key ={i} >

                {editRowId ===e.id ?
               ( <>
                <td className="p-2 border border-gray-300"><input type="text " name='name'  value={editFormData.name} onChange={handelEditFormData} /></td>
                <td className="p-2 border border-gray-300"><input type="text " name='age'  value={editFormData.age} onChange={handelEditFormData} /></td>
                <td className="p-2 border border-gray-300"><input type="text " name='email'  value={editFormData.email} onChange={handelEditFormData} /></td>
                <td className="p-2 border border-gray-300" >
                  <button onClick={handleSaveClick}>
                    save
                  </button>
                </td>
                </>):   (<>   <td className="p-2 border border-gray-300">{e.name}</td>
                <td className="p-2 border border-gray-300">{e.age}</td>
                <td className="p-2 border border-gray-300">{e.email}</td>
                 <td className="p-2 border border-gray-300">
                  {/* The Edit button */}
                  <button className="px-4  font-bold text-cyan-900 border-gray-500 mx-2 hover:bg-gray-400 hover:rounded-lg"  onClick={() => handleEditClick(e)}>
                    Edit
                  </button>
                  <button className="px-2 font-bold text-cyan-900 border-gray-500 mx-2 hover:bg-gray-400 hover:rounded-lg" onClick={()=>deleteData(e.id)}>Delete</button>
                </td></>)}
              
                
              </tr>

            })
          }

        </tbody>
      </table>
    </div>










    </div>
  );
}

export default DataTable;
