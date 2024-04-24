import { getWorkspaceByIdService } from "@/service/workspace.service";
import React from "react";

const DynamicListPage = ({ params }) => {
  const data = getWorkspaceByIdService();
  return (
    <main>
      <section className="grid grid-cols-12 gap-10">
        <div className="col-span-7 h-auto">
          <div className="w-full mb-5 grid grid-cols-12  h-auto p-3 rounded-xl bg-green-400">
            <div className="col-span-8 flex items-center gap-5">
              <div className=" px-10 py-4 bg-white rounded-lg">
                <p className="text-lg font-medium ">Wed</p>
                <p className="text-xl">17</p>
              </div>
              <div className="text-white">
                <h3 className="text-xl">Name workspace</h3>
                <p className="text-base">string</p>
              </div>
            </div>
            <div className="col-span-4 flex items-end justify-end px-5 ">
              <div className="w-fit rounded-2xl px-10 py-2 bg-white">
                <p className="text-black font-medium text-sm">Completed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 bg-yellow-500"></div>
      </section>
    </main>
  );
};
export default DynamicListPage;
