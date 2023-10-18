import Auth from '../authentication/Auth';


function AfterAuth() {
    const {isLoading, isAuthorized, username} = Auth();
    console.log(JSON.stringify(isAuthorized));
    if (isLoading) {
        return null;
    }
    const authorizedBody = 
    <>
        You successfully signed in with Passage.
        <br/><br/>
        Your username is: <b>{username}</b>
    </>

    const unauthorizedBody = 
    <>
        You have not logged in and cannot view the dashboard.
        <br/><br/>
    </>

    return (
        <div>
            <div>{isAuthorized ? 'Welcome!' : 'Unauthorized'}</div>
            <div>
                { isAuthorized ? authorizedBody : unauthorizedBody }
            </div>
        </div>
    );

}

export default AfterAuth;
