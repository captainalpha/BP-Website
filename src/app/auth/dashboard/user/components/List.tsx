"use client";
import React, { useState } from "react";
import Form from "./Form";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";
import { revalidateThisPath } from "@/app/actions";
import { USER } from "@/utils/constants/endpoints";

interface IPropTypes {
  users: IUser[];
}

const List = ({ users }: IPropTypes) => {
  const [formComp, setFormComp] = useState({
    visible: false,
    id: "",
  });
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${USER}/${id}`, {
        method: "DELETE",
      });
      const response = await res.json();
      if (!response.success) throw new Error(response.message);
      revalidateThisPath("/auth/dashboard/user");
    } catch (err: any) {
      console.log(err?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white shadow p-6 w-fit rounded-md">
      <div className="text-black">
        <button
          onClick={() =>
            setFormComp((prev) => ({
              ...prev,
              visible: !prev?.visible,
              id: "",
            }))
          }
          className="block border rounded-md ml-auto px-4 py-1 cursor-pointer mb-4 border-gray-200 shadow hover:shadow-none"
        >
          {formComp?.visible ? "Cancel" : "Add User"}
        </button>

        {formComp?.visible && (
          <Form
            onSuccess={() => setFormComp({ id: "", visible: false })}
            id={formComp?.id}
          />
        )}

        <table className="border">
          <thead>
            <tr>
              <th className="border px-2 py-1">S.No</th>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Phone</th>
              <th className="border px-2 py-1">Email</th>
              <th className="border px-2 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, ind) => (
              <tr key={user?._id}>
                <td className="border px-2 py-1">{ind + 1}</td>
                <td className="border px-2 py-1">{user?.name}</td>
                <td className="border px-2 py-1">{user?.phone}</td>
                <td className="border px-2 py-1">{user?.email}</td>
                <td className="border px-2 py-1">
                  <div className="flex items-center gap-4">
                    <button
                      className="cursor-pointer border-none outline-none"
                      title="Delete"
                      onClick={() => handleDelete(user?._id)}
                    >
                      {loading ? (
                        <FiLoader className="animate-spin" />
                      ) : (
                        <BiTrash />
                      )}
                    </button>
                    <button
                      className="cursor-pointer border-none outline-none"
                      title="Edit"
                      onClick={() =>
                        setFormComp({ id: user?._id, visible: true })
                      }
                    >
                      <BiEdit />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
