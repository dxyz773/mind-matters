import Dashboard from "./Dashboard";
import Tracker from "../wellness-tracker/Tracker";
import UserBio from "./UserBio";

function UserAccount() {
  return (
    <div className="grid h-screen grid-cols-[1fr_auto] grid-rows-[auto_1fr_1fr]">
      <Dashboard />
      <UserBio />

      <Tracker />
    </div>
  );
}

export default UserAccount;
