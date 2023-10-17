import Dashboard from "./Dashboard";
import Tracker from "../wellness-tracker/Tracker";
import { useParams } from "react-router-dom";
function UserAccount() {
  const { username } = useParams();
  return (
    <div>
      <h2>User Profile</h2>
      <h3>{`Welcome, ${username.toUpperCase()}`}</h3>
      <Dashboard />
      <Tracker />
    </div>
  );
}

export default UserAccount;
