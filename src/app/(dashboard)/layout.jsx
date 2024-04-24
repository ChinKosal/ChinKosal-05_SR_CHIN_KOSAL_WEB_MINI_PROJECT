import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

const DashboardPage = ({ children }) => {
  return (
    <main>
      <div className="grid grid-cols-12">
        <div className="col-span-2 px-10">
          <div>
            <SidebarComponent />
          </div>
        </div>
        <div className="col-span-10">
          <div>
            <NavbarComponent />
          </div>
          <div className="grid grid-cols-12 gap-10 my-5">
            <div className="col-span-7">
              <ListBoardComponentHeader />
            </div>
            <div className="col-span-5">
              <MonthlyStatisticsComponent />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
