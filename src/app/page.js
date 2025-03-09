"use client";
import { deleteUser, getUsers } from "@/lib/features/user/userSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import UpdateModal from "./components/UpdateModal";
import { toast, ToastContainer } from "react-toastify";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const error = useSelector((state) => state.users.error);
  const [open, setOpen] = useState(false);
  const [userSelected, setUserSelected] = useState(null);

  const handleUpdate = (e, user) => {
    e.stopPropagation();
    setOpen(true);
    setUserSelected(user);
  };
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await dispatch(deleteUser(id)).unwrap();
      toast.success("User deleted Successfully")
    } catch (error) {
      toast.error(error)
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="container p-5 m-auto">
      <UpdateModal
        open={open}
        setOpen={setOpen}
        user={userSelected}
        setUser={setUserSelected}
      />

      <h1 className=" text-center text-4xl mt-4 font-bold">User Management</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4 px-30">
        {users.map((user) => (
          <li
            key={user.id}
            className="shadow-2xl border-4 border-amber-800 bg-amber-100 p-3 rounded-2xl flex flex-col gap-3 justify-between"
            onClick={() => {
              router.push(`/detail/${user.id}`);
            }}
          >
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
            </section>
            <section className="flex gap-4 mt-2 font-bold">
              <button
                className="w-1/2 bg-amber-300 p-2 rounded-3xl flex justify-center"
                onClick={(e) => handleUpdate(e, user)}
              >
                <PencilIcon className="text-black h-5 w-5" />
              </button>
              <button
                className="w-1/2 bg-red-700 p-2 rounded-3xl flex justify-center"
                onClick={(e) => handleDelete(e, user.id)}
              >
                <TrashIcon className="text-white h-5 w-5" />
              </button>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}
