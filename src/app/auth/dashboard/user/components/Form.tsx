import TextInput from "@/components/TextInput";
import React, { FormEvent, useEffect, useState } from "react";
import { getUser, revalidateThisPath } from "@/app/actions";
import { FiLoader } from "react-icons/fi";
import { cleanObjValues } from "@/lib/utils";
import { USER } from "@/utils/constants/endpoints";

interface IProps {
  onSuccess: () => void;
  id?: string;
}

const initialValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
};

const Form = ({ onSuccess, id }: IProps) => {
  const [values, setValues] = useState(initialValues);
  const [loadings, setLoadings] = useState({ submit: false, fetch: false });
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoadings((prev) => ({ ...prev, submit: true }));

    try {
      const user = await getUser();
      const payload = {
        ...values,
        ...(!id ? { addedBy: user?.id } : {}),
        ...(id ? { updatedBy: user?.id, id } : {}),
      };
      const res = await fetch(USER, {
        method: id ? "PUT" : "POST",
        body: JSON.stringify(cleanObjValues(payload)),
      });

      const response = await res.json();
      if (!response?.success) throw new Error(response?.message);
      revalidateThisPath("/auth/dashboard/user");
      onSuccess();
      setValues(initialValues);

      console.log({ payload, response });
    } catch (err: any) {
      setError(err?.message);
      console.log(err?.message);
    } finally {
      setLoadings((prev) => ({ ...prev, submit: false }));
    }
  };

  useEffect(() => {
    if (id) {
      (async () => {
        setLoadings((prev) => ({ ...prev, fetch: true }));
        try {
          const res = await fetch(`${USER}/${id}`);
          const response = await res.json();
          if (!response.success) throw new Error(response.message);
          const payload = {
            name: response?.data?.name,
            phone: response?.data?.phone,
            email: response?.data?.email,
          };
          setValues((prev) => ({ ...prev, ...payload }));
        } catch (err: any) {
          console.log(err?.message);
        } finally {
          setLoadings((prev) => ({ ...prev, fetch: false }));
        }
      })();
    }
  }, [id]);

  return (
    <div className="mb-4 border-b pb-4  border-slate-800">
      {loadings?.fetch ? (
        <FiLoader size={50} className="animate-spin" />
      ) : (
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name"
            value={values?.name}
            type="text"
            placeholder="Enter your Name"
            required
            onChange={(name) =>
              setValues((prev) => ({
                ...prev,
                name,
              }))
            }
          />
          <TextInput
            label="Phone"
            value={values?.phone}
            type="text"
            placeholder="Enter your Phone"
            required
            onChange={(phone) =>
              setValues((prev) => ({
                ...prev,
                phone,
              }))
            }
          />
          <TextInput
            label="Email"
            value={values?.email}
            type="email"
            placeholder="Enter your Email"
            required
            onChange={(email) =>
              setValues((prev) => ({
                ...prev,
                email,
              }))
            }
          />
          <TextInput
            label="Password"
            value={values?.password}
            type="password"
            placeholder="Enter your Password"
            required={!id}
            onChange={(password) =>
              setValues((prev) => ({
                ...prev,
                password,
              }))
            }
          />
          <button className="cursor-pointer border rounded-sm w-fit px-4 py-1 mt-2">
            {loadings.submit ? "Loading..." : "Submit"}
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default Form;
