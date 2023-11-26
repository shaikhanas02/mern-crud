import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { addUser } from "./services/api";

function Adduser() {
  const input = "outline-none border p-2 m-2";
  
  const defaultValue = {
    name: "",
    username : '',
    email: "",
    phone : ''
  }


      const [user,setUser] = useState(defaultValue) ;
      
      function onValueChange(e){
           setUser({...user, [e.target.name] : e.target.value})
          console.log(user) ;
    }

   async function AddUserDetails(){
      await   addUser(user) ;
    }
  

  return (
    <div>
      <Navbar />
      <div className=" flex flex-col items-center justify-center h-96 ">
        <form className="flex flex-col w-[50%] " onSubmit={AddUserDetails}>
        <h1 className="m-2 font-semibold">Add User</h1>
          <input className={input} type="text" placeholder="Name" onChange={e=> onValueChange(e)} name="name" /> 
          <input type="text" className={input} placeholder="Username" onChange={e=> onValueChange(e)} name="username" />
          <input type="text" className={input} placeholder="Email"  onChange={e=> onValueChange(e)} name="email"/>
          <input type="text" className={input} placeholder="Phone" onChange={e=> onValueChange(e)} name="phone" />
          <button className="bg-blue-500 rounded p-2 m-2 text-white hover:shadow-lg ">Add user</button>
        </form>
      </div>
    </div>
  );
}

export default Adduser;
