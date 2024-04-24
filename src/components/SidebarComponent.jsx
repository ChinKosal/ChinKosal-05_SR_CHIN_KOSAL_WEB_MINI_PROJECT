import Image from "next/image";
import Link from "next/link";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import { getAllWorkspaceServices } from "@/service/workspace.service";

export default async function SidebarComponent() {
  const allWorkspace = await getAllWorkspaceServices();
  console.log("All work space : ", allWorkspace);
  return (
    <div className="pl-10 mt-6 h-screen">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}
      {allWorkspace.data
        .filter((i) => i.isFavorite === false)
        .map((i) => {
          return (
            <Link href={`/todo-list/${i.workSpaceId}`}>
              <div
                key={i.workSpaceId}
                className="flex items-center mt-5 w-full"
              >
                <div className="rounded-full w-4 h-4 bg-todo"></div>
                <div className="flex justify-between w-full pl-3">
                  <p>{i.workspaceName}</p>
                  <EditDeleteDropDownComponent />
                </div>
              </div>
            </Link>
          );
        })}

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>

      {/* each favorite workspace */}
      {}
      {allWorkspace.data
        .filter((i) => i.isFavorite === false)
        .map((i) => {
          return (
            <div key={i.workSpaceId} className="flex items-center mt-5 w-full">
              <div className="rounded-full w-4 h-4 bg-workingOn"></div>
              <div className="flex justify-between w-full pl-3">
                <p>{i.workspaceName}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
