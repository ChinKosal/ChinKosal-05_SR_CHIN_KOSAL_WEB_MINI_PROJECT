import { getServerSession } from "next-auth";
import { authOption } from "./auth/[...nextauth]/route";

export default async function headerToken() {
  // getServerSession is used to get the token that provided from the api
  const session = await getServerSession(authOption);
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session?.user?.token}`,
  };
}
