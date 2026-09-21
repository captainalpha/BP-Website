"use client";
import TextInput from "@/components/TextInput";
import { RouteNames } from "@/utils/types/enums";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Login = () => {
  const router = useRouter();
  const [values, setValues] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: values?.email,
          password: values?.password,
        }),
      });

      const response = await res.json();
      if (!response?.success) throw new Error(response?.message);
      router.replace(RouteNames.USERS);
    } catch (err: any) {
      setError(err?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (name: string, value: string) => {
    if (error) setError("");
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f7] px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">
            BPAAS Login
          </h1>
          <p className="text-sm  dark:text-slate-500 mt-1">
            Enter your credentials to access your dashboard
          </p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            value={values?.email}
            type="email"
            placeholder="example@bpaas.io"
            required
            onChange={(email) => handleChange("email", email)}
          />
          <TextInput
            label="Password"
            value={values?.password}
            type="password"
            placeholder="••••••••"
            required
            onChange={(password) => handleChange("password", password)}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-[#0077FF] hover:bg-[#0063d3] text-white font-semibold rounded-md transition-all duration-300 shadow-sm"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}
        </form>
        <div className="text-center text-sm text-slate-500 dark:text-slate-400">
          Need help?{" "}
          <a href="mailto:sales@bpaassolutions.com" className="text-[#0077FF] hover:underline">
            Contact support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
