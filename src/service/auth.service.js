import { baseUrl } from "@/utils/constants";

export const loginService = async (user) => {
  console.log("working : ");
  // try {
  const res = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
  // } catch (e) {
  //   console.log("Error : ", e);
  // }
};
