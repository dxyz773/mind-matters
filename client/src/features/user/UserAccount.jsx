import Dashboard from "./Dashboard";

import UserBio from "./UserBio";

function UserAccount() {
  return (
    <div className="h-100 grid grid-cols-[1fr_auto] grid-rows-[auto_1fr_1fr]">
      <Dashboard />
      <UserBio />
    </div>
  );
}

export default UserAccount;
