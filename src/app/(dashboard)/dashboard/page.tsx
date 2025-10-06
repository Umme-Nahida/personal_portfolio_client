
import UserProfileDashboard from "@/components/modules/dashboard/UserDashoboard";
import { getUserSession } from "@/utils/getUserSession";

const DashboardHomePage =async () => {

 const session = await getUserSession()
   console.log("session",session)
  
  return (
    <div>

      <h1 className="text-xl text-center mt-5 xl:mt-10">My Dashboard</h1>
      <div className="flex items-center justify-center">
        <UserProfileDashboard/>
      </div>
    </div>
  );
};

export default DashboardHomePage;
