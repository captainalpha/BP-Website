const url =
  process.env.NEXT_PUBLIC_CONFIG === "LOCAL"
    ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL
    : process.env.NEXT_PUBLIC_BASE_URL_PROD;

export const JOB = `${url}/api/job`;
export const LOGIN = `${url}/api/user/login`;
export const USER = `${url}/api/user`;
