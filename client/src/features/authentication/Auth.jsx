import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://mindmatters-backend.onrender.com";

const Auth = () => {
  const [result, setResult] = useState({
    isLoading: true,
    isAuthorized: false,
    username: "",
    userId: "",
  });

  useEffect(() => {
    let cancelRequest = false;
    const authToken = localStorage.getItem("psg_auth_token");
    axios
      .post(`${API_URL}/users/auth`, null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        if (cancelRequest) {
          return;
        }
        const { authStatus, identifier, user } = response.data;
        console.log("response is " + JSON.stringify(response.data));
        if (authStatus === "success") {
          setResult({
            isLoading: false,
            isAuthorized: authStatus,
            username: identifier,
            userId: user.id,
          });
        } else {
          setResult({
            isLoading: false,
            isAuthorized: false,
            username: "",
            userId: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setResult({
          isLoading: false,
          isAuthorized: false,
          username: "",
          userId: "",
        });
      });

    return () => {
      cancelRequest = true;
    };
  }, []);

  return result;
};

export default Auth;
