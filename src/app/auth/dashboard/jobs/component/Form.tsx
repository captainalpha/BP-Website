import TextInput from "@/components/TextInput";
import React, { FormEvent, useEffect, useState } from "react";
import { getUser, revalidateThisPath } from "@/app/actions";
import { FiLoader } from "react-icons/fi";
import { cleanObjValues } from "@/lib/utils";
import SelectInput from "@/components/SelectInput";
import { JOB } from "@/utils/constants/endpoints";

interface IProps {
  onSuccess: () => void;
  id?: string;
}

const initialValues = {
  position: "",
  description: "",
  minimumExperience: "",
  jobType: "",
  employmentType: "",
};

const Form = ({ onSuccess, id }: IProps) => {
  const [values, setValues] = useState(initialValues);
  const [loadings, setLoadings] = useState({ submit: false, fetch: false });
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoadings((prev) => ({ ...prev, submit: true }));

    try {
      if (!values?.jobType) throw new Error("Select job type");
      if (!values?.employmentType) throw new Error("Select Employment type");
      const user = await getUser();
      const payload = {
        ...values,
        ...(!id ? { addedBy: user?.id } : {}),
        ...(id ? { updatedBy: user?.id, id } : {}),
      };
      const res = await fetch(JOB, {
        method: id ? "PUT" : "POST",
        body: JSON.stringify(cleanObjValues(payload)),
      });

      const response = await res.json();
      if (!response?.success) throw new Error(response?.message);
      revalidateThisPath("/auth/dashboard/jobs");
      onSuccess();
      setValues(initialValues);
    } catch (err: any) {
      setError(err?.message);
    } finally {
      setLoadings((prev) => ({ ...prev, submit: false }));
    }
  };

  const handleChange = (name: string, value: string) => {
    if (error) setError("");

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (id) {
      (async () => {
        setLoadings((prev) => ({ ...prev, fetch: true }));
        try {
          const res = await fetch(`${JOB}/${id}`);
          const response = await res.json();
          if (!response.success) throw new Error(response.message);
          const payload = {
            position: response?.data?.position,
            description: response?.data?.description,
            minimumExperience: response?.data?.minimumExperience,
            jobType: response?.data?.jobType,
            employmentType: response?.data?.employmentType,
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
    <div className="mb-4 border-b pb-4 border-slate-800">
      {loadings?.fetch ? (
        <FiLoader size={50} className="animate-spin" />
      ) : (
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Position"
            value={values?.position}
            type="text"
            placeholder="Enter Position"
            required
            onChange={(position) => handleChange("position", position)}
          />
          <TextInput
            label="Description"
            value={values?.description}
            type="text"
            placeholder="Enter Description"
            required
            onChange={(description) => handleChange("description", description)}
          />
          <TextInput
            label="Minimum Experience"
            value={values?.minimumExperience}
            type="text"
            placeholder="Enter Minimum Experience"
            required
            onChange={(minimumExperience) =>
              handleChange("minimumExperience", minimumExperience)
            }
          />
          <SelectInput
            label="Job Type"
            value={values?.jobType}
            options={["WFH", "WFO"]}
            placeholder="Select Job Type"
            required
            onChange={(jobType) => handleChange("jobType", jobType)}
          />
          <SelectInput
            label="Employment Type"
            value={values?.employmentType}
            options={["Part Time", "Permanent", "Contractual"]}
            placeholder="Select Employment Type"
            required
            onChange={(employmentType) =>
              handleChange("employmentType", employmentType)
            }
          />

          <button className="cursor-pointer border rounded-sm w-fit px-4 py-1 mt-2 border-gray-300 bg-gray-100 shadow hover:shadow-none">
            {loadings.submit ? "Loading..." : "Submit"}
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default Form;
