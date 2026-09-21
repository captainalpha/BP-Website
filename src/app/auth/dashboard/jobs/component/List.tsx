"use client";

import React, { useState } from "react";
import { revalidateThisPath } from "@/app/actions";
import Form from "./Form";
import { FiLoader } from "react-icons/fi";
import { BiEdit, BiTrash } from "react-icons/bi";
import { JOB } from "@/utils/constants/endpoints";

interface IProps {
  jobs: IJob[];
}

const List = ({ jobs }: IProps) => {
  const [formComp, setFormComp] = useState({
    visible: false,
    id: "",
  });
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${JOB}/${id}`, {
        method: "DELETE",
      });
      const response = await res.json();
      if (!response.success) throw new Error(response.message);
      revalidateThisPath("/auth/dashboard/jobs");
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
          {formComp?.visible ? "Cancel" : "Add Job"}
        </button>

        {formComp?.visible && (
          <Form
            onSuccess={() => setFormComp({ id: "", visible: false })}
            id={formComp?.id}
          />
        )}

        <table className="">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1">S.No</th>
              <th className="border px-2 py-1">Position</th>
              <th className="border px-2 py-1">Description</th>
              <th className="border px-2 py-1">Minimum Experience</th>
              <th className="border px-2 py-1">Job Type</th>
              <th className="border px-2 py-1">Employment Type</th>
              <th className="border px-2 py-1">Added By</th>
              <th className="border px-2 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs?.map((user, ind) => (
              <tr key={user?._id}>
                <td className="border px-2 py-1 text-center">{ind + 1}</td>
                <td className="border px-2 py-1">{user?.position}</td>
                <td className="border px-2 py-1">{user?.description}</td>
                <td className="border px-2 py-1">{user?.minimumExperience}</td>
                <td className="border px-2 py-1">{user?.jobType}</td>
                <td className="border px-2 py-1">{user?.employmentType}</td>
                <td className="border px-2 py-1">{user?.addedByObj?.name}</td>
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
