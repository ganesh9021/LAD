import { Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage";
import TheoryPage from "./component/TheoryPage";
import MathsQuiz from "./quiz/MathsQuiz";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import useWebSocket from "react-use-websocket";
import logconfig from "./config/dbconfig";
import { v4 as uuid } from "uuid";
import axios from "axios";
import SelectApproach from "./component/SelectApproach";
import SawASeed from "./component/SawASeed";

const App = () => {
  const [ip, setIP] = useState("");
  const sid = uuid();

  useEffect(() => {
    localStorage.setItem("sessionid", sid);
  }, []);

  useEffect(() => {
    // to call get data function which return ip address
    getData();
  }, [ip]);

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    //console.log(res.data);
    setIP(res.data.ip);
    localStorage.setItem("clientip", ip);
  };

  const { sendJsonMessage, readyState } = useWebSocket(logconfig.logurl, {
    onOpen: () => {
      console.log("WebSocket connection established.");
    },
    onError: () => {
      console.log("WebSocket connection Error");
    },
    share: true,
    filter: () => false,
    retryOnError: true,
    shouldReconnect: () => true,
  });

  useEffect(() => {
    ReactGA.initialize("G-ZLKNSX7SDM", {
      gaOptions: {
        gtag: true,
      },
    });
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/letusverify" element={<Homepage />} />
      <Route
        exact
        path="/launchpage/englishactivity"
        element={<SelectApproach />}
      />
      <Route
        exact
        path="/launchpage/englishactivity/sas"
        element={<SawASeed />}
      />
      <Route exact path="/theory" element={<TheoryPage />} />
      <Route exact path="/quiz" element={<MathsQuiz />} />
    </Routes>
  );
};

export default App;
