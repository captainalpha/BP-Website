"use server";

import { LOGIN } from "@/utils/constants/endpoints";

export const login = async (formData: FormData) => {
  try {
    const email = formData?.get("email");
    const password = formData?.get("password");
    const res = await fetch(LOGIN, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const response = await res.json();
    if (!response?.success) throw new Error(response?.message);
    console.log({ response });
  } catch (err: any) {
    console.log(err?.message);
  }
};
