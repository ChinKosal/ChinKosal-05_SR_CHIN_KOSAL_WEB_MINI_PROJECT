import headerToken from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";
export const fetchCache = "default-cache";

export const getAllWorkspaceServices = async () => {
  // since headerToken is an async function that why we need to use await
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/workspaces`, {
    method: "GET",
    headers: header,
    caches: "no-store",
  });
  const data = await res.json();
  return data;
};

export const getWorkspaceByIdService = async (listId) => {
  const header = await headerToken();

  const res = await fetch(`${baseUrl}/workspaces/${listId}`, {
    method: "GET",
    headers: header,
    cache: "no-store",
  });

  const data = await res.json();
  return data;
};

export const insertWorkspaceService = async (workspaceData) => {
  const header = await headerToken();

  const res = await fetch(`${baseUrl}/workspaces`, {
    method: "POST",
    headers: {
      ...header,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(workspaceData),
    caches: "no-store",
    next: { tags: ["workspace"] },
  });

  const result = await res.json();
  return result;
};

// delete
export const deleteWorkspaceService = async (workspaceId) => {
  const header = await headerToken();

  const res = await fetch(`${baseUrl}/workspaces/${workspaceId}`, {
    method: "DELETE",
    headers: header,
    cache: "no-store",
  });

  const result = await res.json();
  return result;
};
