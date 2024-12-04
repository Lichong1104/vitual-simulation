import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { Excalidraw, WelcomeScreen } from "@excalidraw/excalidraw";
import MyEditor from "../../../../components/MyEditor/MyEditor";
import mindMapData from "./mindMapData";

function CourseItem(props) {
  const [open, setOpen] = useState(false);
  const [html, setHtml] = useState("<p>content</p>");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const print = () => {
    // @ts-ignore
    window.document.body.innerHTML = document.getElementById("preView").innerHTML;
    // sessionStorage.setItem("html", html);
    window.print();
    window.location.reload();
  };
  const url = decodeURIComponent(props.match.params.url);
  //decodeURIComponent 对编码格式的字符串解码

  const libraryItems = [
    {
      status: "published",
      id: "1",
      created: 1,
      elements: mindMapData.libraryItems[1].elements,
    },
    {
      status: "unpublished",
      id: "2",
      created: 2,
      elements: mindMapData.libraryItems[1].elements,
    },
  ];

  // useEffect(() => {
  //   excalidrawAPI.updateLibrary({
  //     libraryItems,
  //     openLibraryMenu: true,
  //   });
  // }, []);
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <iframe title="iframe" src={url} width={"92%"} height={"100%"} frameBorder="none"></iframe>
      <Button type="primary" onClick={showDrawer}>
        思维导图
      </Button>
      <Drawer title="思维导图" placement="top" onClose={onClose} size="large" open={open}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            height: "100%",
          }}
        >
          <div style={{ width: "60%" }}>
            <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
            <div style={{ height: "100%" }}>
              <Excalidraw initialData={{ libraryItems: libraryItems }}>
                <WelcomeScreen />
              </Excalidraw>
            </div>
          </div>
          <div style={{ width: "40%" }}>
            <MyEditor
              html={html}
              changeHtml={(v) => {
                setHtml(v);
              }}
            />
            {/* <Button
              type="primary"
              style={{ position: "absolute", bottom: 10, right: 10 }}
              size="small"
              onClick={() => {
                print();
              }}
            >
              打印
            </Button> */}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default CourseItem;
