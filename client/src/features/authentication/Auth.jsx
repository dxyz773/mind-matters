import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001";

const Auth = () => {
  const [result, setResult] = useState({
    isLoading: true,
    isAuthorized: false,
    username: "",
  });

  useEffect(() => {
    let cancelRequest = false;
    console.log("this");
    const authToken = localStorage.getItem("psg_auth_token");
    console.log("anything at all");
    axios
      .post(`${API_URL}/auth`, null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        if (cancelRequest) {
          return;
        }
        const { authStatus, identifier } = response.data;
        console.log("response is " + JSON.stringify(response.data));
        if (authStatus === "success") {
          setResult({
            isLoading: false,
            isAuthorized: authStatus,
            username: identifier,
          });
        } else {
          setResult({
            isLoading: false,
            isAuthorized: false,
            username: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setResult({
          isLoading: false,
          isAuthorized: false,
          username: "",
        });
      });

    return () => {
      cancelRequest = true;
    };
  }, []);

  return (
    result
  );
};

export default Auth;
