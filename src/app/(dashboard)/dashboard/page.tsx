
import UserProfileDashboard from "@/components/modules/dashboard/UserDashoboard";

const DashboardHomePage =async () => {
  
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
