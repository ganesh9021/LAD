import { Launchpage } from "english-olabsnxtg-library";
import React from "react";
import ActStartPopupContent from "./ActStartPopupContent";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig";
import { SendLogData } from "../config/wslog.js";

const Homepage = () => {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  var arr = [
    "Students will be able to understand the spoken language and decode the message accurately.",
  ];
  return (
    <div>
      <Launchpage
        L_title="Listen and Decode"
        L_objective="Objective:"
        L_act_objective="To listen and be able to decode the English instructions."
        L_learning_outcome="Learning Outcome:"
        L_array={arr}
        L_startbutton="START"
        WAWGTL_title_string="What are we going to learn?"
        WAWGTL_comp={<ActStartPopupContent />}
        ok="OK"
        cancel="CANCEL"
        WS_sendJsonMessage={sendJsonMessage}
        WS_SendLogData={SendLogData}
        labNo="3"
        labShortName="Listen and Decode"
      />
    </div>
  );
};

export default Homepage;
