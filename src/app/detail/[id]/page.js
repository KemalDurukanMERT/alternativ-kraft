"use client";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { use } from "react";
import { useSelector } from "react-redux";

const DetailDyn = ({ params }) => {
  const [user, setUser] = useState();
  const { id } = use(params);
  const users = useSelector((state) => state.users.users);
 const router = useRouter()

  useEffect(() => {
    if (id) {
      let newUser = users.filter((el) => el.id == id)[0];
      if (newUser){
        setUser(newUser);
      }else{
        setTimeout(() => router.push("/"), 3000)
      }
    }
  }, [id]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mt-4 font-bold">Person Detail</h1>
      {user ? (
        <div className="m-4  shadow-2xl border-4 border-amber-800 bg-amber-100 p-3 rounded-2xl flex flex-col gap-3 justify-between">
          <p className="text-center text-xl italic font-semibold break-words">
            {user.name}
          </p>
          <section>
            <p className="text-red-900 font-semibold break-words">
              <span className="font-semibold text-black">Email:</span>{" "}
              {user.email}
            </p>
            <p className="text-red-900 font-semibold break-words">
              <span className="font-semibold text-black">Phone:</span>{" "}
              {user.phone}
            </p>
            <p className="text-red-900 font-semibold break-words">
              <span className="font-semibold text-black">Address:</span>{" "}
              {`${user.address.street} Street ${user.address.suite} ${user.address.city} ${user.address.zipcode}`}
            </p>
            <p className="text-red-900 font-semibold break-words">
              <span className="font-semibold text-black">Company:</span>{" "}
              {user.company.name} === {user.company.catchPhrase}
            </p>
            
          </section>
         
        </div>
      ) : (
        <p>There is no user with this id...</p>
      )}
    </div>
  );
};

export default DetailDyn;
