"use client";

import { addUser } from "@/lib/features/user/userSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
       const res = await dispatch(
        addUser({
          name,
          email,
          username,
        })
      ).unwrap();
  
      console.log("User added successfully:");
      toast.success("User added successfully")
      setEmail("")
      setName("")
      setUsername("")
      router.push("/")
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error(error)
    }
  };
  

  return (
    <div className="mt-2 flex flex-col justify-center items-center">
      <h1 className="text-2xl">Add User</h1>
      <form className="text-sm text-gray-500 w-full px-6 max-w-[500px]" onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mt-3">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="border border-gray-500 rounded-sm w-full p-1 mt-2 text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="username" className="block mt-3">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="border border-gray-500 rounded-sm w-full p-1 mt-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email" className="block mt-3">
          Email
        </label>
        <input
          type="mail"
          id="email"
          className="border border-gray-500 rounded-sm w-full p-1 mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="border block mt-5 w-full bg-green-800 text-white p-3 rounded-3xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
