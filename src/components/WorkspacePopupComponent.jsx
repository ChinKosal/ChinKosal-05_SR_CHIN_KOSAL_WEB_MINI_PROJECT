import { insertWorkspaceService } from "@/service/workspace.service";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import React from "react";

export default function WorkspacePopupComponent() {
  async function handleWorkspace(workspaceInput) {
    "use server";
    // console.log("dsahfujdhsujg", workspaceInput);
    const newWorkspace = {
      workspaceName: workspaceInput.get("workspaceName"),
    };
    console.log("New workspace name : ", newWorkspace);
    console.log("New : ", newWorkspace);
    await insertWorkspaceService(newWorkspace);
    // call revalidateTage
    revalidateTag("workspace");
  }
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="cursor-pointer">
        <Image src={"/assets/icons/plus.svg"} width={22} height={22} />
      </label>

      {/* Put this part before </body> tag */}

      <form action={handleWorkspace}>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg capitalize">
              create new workspace
            </h3>
            <input
              type="text"
              name="workspaceName"
              placeholder="workspace name"
              className="mt-3 block border border-gray rounded-lg w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
            />
            <div className="modal-action">
              <button
                type="submit"
                htmlFor="my_modal_6"
                className="bg-blue-600 rounded-lg text-white mr-3 h-12 px-5 flex items-center"
              >
                Create
              </button>
              <label htmlFor="my_modal_6" className="btn">
                Close!
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
