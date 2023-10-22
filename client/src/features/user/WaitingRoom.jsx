import { useNavigate } from "react-router-dom";
import Auth from "../authentication/Auth";

function WaitingRoom() {
  const navigate = useNavigate();

  const { isLoading, isAuthorized, username, userId } = Auth();
  function navigateToAccount() {
    navigate(`/account/${userId}`);
  }

  console.log(`Waiting room: ${userId}, ${isAuthorized}`);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {isAuthorized ? (
        <button onClick={() => navigateToAccount()}>
          Click to continue your wellnes tracking...
        </button>
      ) : (
        <>
          <h3>Unauthorized</h3>
          <p>Please check login information or register for Mind Matters</p>
        </>
      )}
    </div>
  );
}

export default WaitingRoom;
