"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useDispatch } from "react-redux";
import { updateUser } from "@/lib/features/user/userSlice";
import { toast, ToastContainer } from "react-toastify";

export default function UpdateModal({ open, setOpen, user, setUser }) {
  const dispatch = useDispatch();

  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setUsername(user?.username);
  }, [user]);

  const handleUpdate = async () => {
    // dispatch(updateUser({id: user.id, n_user: { ...user, name, email, username}}));
    // setOpen(false);
    try {
      const res = await dispatch(
        updateUser({ id: user.id, n_user: { ...user, name, email, username } })
      ).unwrap();

      toast.success("User updated successfully", { autoClose: 3000 })
      setOpen(false)
    } catch (error) {
      toast.error(error)
    }
  };

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4  min-[300px]:min-w-60">
              <div className="flex items-start">
                <div className="mt-3  sm:mt-0 sm:ml-4 text-left w-full">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                  >
                    Update User
                  </DialogTitle>
                  <div className="mt-2 w-full">
                    <form className="text-sm text-gray-500 w-full">
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => handleUpdate()}
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Update
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
