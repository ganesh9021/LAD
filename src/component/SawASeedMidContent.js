import React from "react";
import { useState } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import { Button, styled, Tooltip, tooltipClasses } from "@mui/material";
import backgroundImg from "../image/sawaseed/background600*400.png";
import Swal from "sweetalert2";

//imports for audio instuctions
import AudioPlayer from "./AudioPlayer";
import audio_instr_2 from "../audio/SawASeed/audio_instr_2.mp3";
import audio_instr_1 from "../audio/SawASeed/audio_instr_1.mp3";
import audio_instr_3 from "../audio/SawASeed/audio_instr_3.mp3";
import audio_instr_4 from "../audio/SawASeed/audio_instr_4.mp3";
import audio_instr_5 from "../audio/SawASeed/audio_inst_5.mp3";

//imports for small option images
import table_1 from "../image/sawaseed/table_1.png";
import table_2 from "../image/sawaseed/table_2.png";
import table_3 from "../image/sawaseed/table_3.png";
import potwithsoil_1 from "../image/sawaseed/pot_1.png";
import potwithsoil_2 from "../image/sawaseed/pot_2.png";
import seed_1 from "../image/sawaseed/seed_1.png";
import seed_2 from "../image/sawaseed/seed_2.png";
import seed_3 from "../image/sawaseed/seed_3.png";
import sprayer_1 from "../image/sawaseed/sprayer_1.png";
import sprayer_2 from "../image/sawaseed/sprayer_2.png";
import sprayer_3 from "../image/sawaseed/sprayer_3.png";

//imports for draggable images
import table from "../image/sawaseed/table.png";
import pot from "../image/sawaseed/potwithsoil.png";
import seed from "../image/sawaseed/seed_2.png";
import sprayer from "../image/sawaseed/sprayer.gif";

//imports for hint
import tableDemo from "../image/sawaseed/demo/tab.jpg";
import potDemo from "../image/sawaseed/demo/pot.jpg";
import seedDemo from "../image/sawaseed/demo/seed.jpg";
import sprayerDemo from "../image/sawaseed/demo/watersp.jpg";
import { toast } from "react-toastify";

const SawASeedMidContent = () => {
  //Lighttooltip is used to show the names of image on hover
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));

  //Flag 1,2,3,4 are for the images to drag
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);

  //Flag 11,12,13,14 are for the instructions to render one at a time
  const [flag11, setFlag11] = useState(false);
  const [flag21, setFlag21] = useState(false);
  const [flag31, setFlag31] = useState(false);
  const [flag41, setFlag41] = useState(false);

  //This useState are use to set the images after completion of drag
  const [tab, setTab] = useState(null);
  const [potwsoil, setPotwSoil] = useState(null);
  const [sid, setSid] = useState(null);
  const [spray, setSpray] = useState(null);

  //count is use to perform the drag and drop operation in sequence.
  const [count, setCount] = useState(1);

  const handleClick = (object) => {
    switch (object) {
      case "table-1":
        setFlag1(true);

        break;
      case "table-2":
        toast.error(
          "Wrong object selection. Please listen the instruction carefully.",
          {
            position: "top-center",
            autoClose: 2000,
          }
        );

        break;
      case "table-3":
        toast.error(
          "Wrong object selection. Please listen the instruction carefully.",
          {
            position: "top-center",
            autoClose: 2000,
          }
        );

        break;
      case "potwithsoil-1":
        setFlag2(true);

        break;
      case "potwithsoil-2":
        toast.error(
          "Wrong object selection. Please listen the instruction carefully.",
          {
            position: "top-center",
            autoClose: 2000,
          }
        );

        break;
      case "seed-1":
        toast.error(
          "Wrong object selection. Please listen the instruction carefully.",
          {
            position: "top-center",
            autoClose: 2000,
          }
        );

        break;
      case "seed-2":
        setFlag3(true);

        break;
      case "seed-3":
        toast.error(
          "Wrong object selection. Please listen the instruction carefully.",
          {
            position: "top-center",
            autoClose: 2000,
          }
        );
        break;
      case "sprayer-1":
        toast.error(
          "Wrong object selection. Please listen the instruction carefully.",
          {
            position: "top-center",
            autoClose: 2000,
          }
        );

        break;
      case "sprayer-2":
        setFlag4(true);

        break;
      case "sprayer-3":
        toast.error(
          "Wrong object selection. Please listen the instruction carefully.",
          {
            position: "top-center",
            autoClose: 2000,
          }
        );

        break;
    }
  };

  const handleDrop = (e) => {
    switch (e.dragData) {
      case table:
        setTab(e.dragData);
        setFlag1(false);
        setCount(count + 1);
        setFlag11(true);
        break;
      case pot:
        if (count == 2) {
          setPotwSoil(e.dragData);
          setFlag2(false);
          setCount(count + 1);
          setFlag21(true);
        } else {
          alert("Please drag the table first !!!");
          setFlag2(false);
          setFlag3(false);
          setFlag4(false);
        }
        break;
      case seed:
        if (count == 3) {
          setSid(e.dragData);
          setFlag3(false);
          setCount(count + 1);
          setFlag31(true);
        } else {
          alert("Please drag the pot first !!!");
          setFlag1(false);
          setFlag3(false);
          setFlag4(false);
        }
        break;
      case sprayer:
        if (count == 4) {
          setSpray(e.dragData);
          setFlag4(false);
          setFlag41(true);

          Swal.fire(
            "Good job!",
            "Activity is successfully completed !!!",
            "success"
          );
        } else {
          alert("Please drag the seed first !!!");
          setFlag1(false);
          setFlag2(false);
          setFlag4(false);
        }
        break;
    }
  };

  const handelHint = () => {
    if (
      tab == tableDemo ||
      potwsoil == potDemo ||
      sid == seedDemo ||
      spray == sprayerDemo
    ) {
      setTab(null);
      setPotwSoil(null);
      setSid(null);
      setSpray(null);
    } else {
      setTab(tableDemo);
      setPotwSoil(potDemo);
      setSid(seedDemo);
      setSpray(sprayerDemo);
    }
  };
  return (
    <div className="row" style={{ height: "100%", overflow: "auto" }}>
      <div className="col-sm-9 d-flex align-items-center justify-content-center">
        <div className="workbench">
          <div className="row text-center">
            <div
              className="col"
              style={{ border: "1px solid black", borderLeft: "none" }}
            >
              <LightTooltip title="Rectangular table" placement="top" arrow>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick("table-1")}
                  src={table_1}
                />
              </LightTooltip>
            </div>
            <div className="col" style={{ border: "1px solid black" }}>
              <LightTooltip title="White seed" placement="top" arrow>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick("seed-1")}
                  src={seed_1}
                />
              </LightTooltip>
            </div>
            <div className="col" style={{ border: "1px solid black" }}>
              <LightTooltip title="Pink sprayer" placement="top" arrow>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick("sprayer-1")}
                  src={sprayer_1}
                />
              </LightTooltip>
            </div>
            <div className="col" style={{ border: "1px solid black" }}>
              <LightTooltip title="Black seed" placement="top" arrow>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick("seed-3")}
                  src={seed_3}
                />
              </LightTooltip>
            </div>
            <div className="col" style={{ border: "1px solid black" }}>
              <LightTooltip title="Round table" placement="top" arrow>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick("table-2")}
                  src={table_2}
                />
              </LightTooltip>
            </div>
            <div className="col" style={{ border: "1px solid black" }}>
              <LightTooltip
                title="enclosed handle sprayer"
                placement="top"
                arrow
              >
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick("sprayer-2")}
                  src={sprayer_2}
                />
              </LightTooltip>
            </div>
            <div className="col" style={{ border: "1px solid black" }}>
              <LightTooltip title="Black sprayer" placement="top" arrow>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick("sprayer-3")}
                  src={sprayer_3}
                />
              </LightTooltip>
            </div>
            <div className="col" style={{ border: "1px solid black" }}>
              <LightTooltip title="Pot without soil" placement="top" arrow>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick("potwithsoil-2")}
                  src={potwithsoil_2}
                />
              </LightTooltip>
            </div>
            <div className="col" style={{ border: "1px solid black" }}>
              <LightTooltip title="Brown seed" placement="top" arrow>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick("seed-2")}
                  src={seed_2}
                />
              </LightTooltip>
            </div>
            <div className="col" style={{ border: "1px solid black" }}>
              <LightTooltip title="Chair" placement="top" arrow>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick("table-3")}
                  src={table_3}
                />
              </LightTooltip>
            </div>
            <div
              className="col"
              style={{ border: "1px solid black", borderRight: "none" }}
            >
              <LightTooltip title="Pot with soil" placement="top" arrow>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick("potwithsoil-1")}
                  src={potwithsoil_1}
                />
              </LightTooltip>
            </div>
          </div>
          <div
            className="row text-center align-items-end"
            style={{ height: "68vh", marginLeft: "15%" }}
          >
            <div className="col-8 d-flex flex-column">
              <div>
                <DropTarget
                  targetKey="sprayer"
                  onHit={(e) => {
                    handleDrop(e);
                  }}
                >
                  <div
                    className="d-flex justify-content-center align-items-end "
                    style={{ height: "17vh", marginLeft: "25%" }}
                  >
                    <img
                      style={{ maxWidth: "100%", height: "17vh" }}
                      src={spray}
                    />
                  </div>
                </DropTarget>
              </div>

              <div style={{ zIndex: "3" }}>
                <div style={{ zIndex: "6" }}>
                  <DropTarget
                    targetKey="seed"
                    onHit={(e) => {
                      handleDrop(e);
                    }}
                  >
                    <div
                      style={{ height: "0vh", position: "relative" }}
                      className=""
                    >
                      <img style={{objectFit : 'cover', height: "5vh", width: "5vw" ,border : null}} src={sid} />
                    </div>
                  </DropTarget>
                </div>
                <DropTarget
                  targetKey="pot"
                  onHit={(e) => {
                    handleDrop(e);
                  }}
                >
                  <div
                    className="d-flex justify-content-center align-items-end"
                    style={{ height: "15vh" }}
                  >
                    <img
                      style={{ maxWidth: "100%", height: "15vh" }}
                      src={potwsoil}
                    />
                  </div>
                </DropTarget>
              </div>

              <div>
                <DropTarget
                  targetKey="table"
                  onHit={(e) => {
                    handleDrop(e);
                  }}
                >
                  <div
                    className="d-flex justify-content-center align-items-end "
                    style={{ height: "18vh" }}
                  >
                    <img
                      style={{ maxWidth: "100%", height: "20vh" }}
                      src={tab}
                    />
                  </div>
                </DropTarget>
              </div>
            </div>
            <div
              className="col-4 d-flex flex-column align-items-center"
              style={{ height: "90%" }}
            >
              {flag1 && (
                <DragDropContainer targetKey="table" dragData={table}>
                  <img src={table} />
                </DragDropContainer>
              )}
              {flag2 && (
                <DragDropContainer targetKey="pot" dragData={pot}>
                  <img src={pot} />
                </DragDropContainer>
              )}
              {flag3 && (
                <DragDropContainer targetKey="seed" dragData={seed}>
                  <img src={seed} />
                </DragDropContainer>
              )}
              {flag4 && (
                <DragDropContainer targetKey="sprayer" dragData={sprayer}>
                  <img src={sprayer} />
                </DragDropContainer>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-3 d-flex justify-content-center align-items-center">
        <div
          style={{
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            height: "90%",
            width: "90%",
            borderRadius: "13px",
            boxShadow: "0px 4px 7px #00000029",
            display: "block",
            overflow: "auto",
          }}
        >
          <div
            className="sticky-top text-center"
            style={{
              background: "#002F65",
              borderRadius: "10px 10px 0px 0px",
              opacity: "1",
              color: "#FFFFFF",
              fontSize: "1.3rem",
              fontWeight: "bolder",
            }}
          >
            Instructions
          </div>
          <div style={{ maxHeight: "50vh", padding: "2%" }}>
            <div className="p-2" style={{ maxHeight: "50vh" }}>
              <div>
                Play the audio to listen the instructions and perform the
                activity.
              </div>
              <div className="fw-bolder text-success text-center">
                Audio of Instructions
              </div>
              <div className="row">
                <div className="col d-flex align-items-center justify-content-center">
                  Step-1:
                </div>
                <div className="col">
                  <AudioPlayer src={audio_instr_1} />
                </div>
              </div>

              {flag11 && (
                <div className="row">
                  <div className="col d-flex align-items-center justify-content-center">
                    Step-2:
                  </div>
                  <div className="col">
                    <AudioPlayer src={audio_instr_2} />
                  </div>
                </div>
              )}

              {flag21 && (
                <div className="row">
                  <div className="col d-flex align-items-center justify-content-center">
                    Step-3:
                  </div>
                  <div className="col">
                    <AudioPlayer src={audio_instr_3} />
                  </div>
                </div>
              )}
              {flag31 && (
                <div className="row">
                  <div className="col d-flex align-items-center justify-content-center">
                    Step-4:
                  </div>
                  <div className="col">
                    <AudioPlayer src={audio_instr_4} />
                  </div>
                </div>
              )}

              {flag41 && (
                <div className="row">
                  <div className="col d-flex align-items-center justify-content-center">
                    Step-5:
                  </div>
                  <div className="col">
                    <AudioPlayer src={audio_instr_5} />
                  </div>
                </div>
              )}

              <div className="text-center">
                <Button variant="contained" onClick={handelHint}>
                  Hint
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SawASeedMidContent;
