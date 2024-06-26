import React, { useEffect, useState } from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import Window1 from './components/Window1';
import Window3 from './components/Window3';
import Window2 from './components/Window2';
import AddFrom from './components/AddFrom';
import { useParams } from 'react-router-dom';

export default function App() {
  const [frameworking, setFrameWorking] = useState(true);
  const [visible, setVisible] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  const [isEditable, setisEditable] = useState(null);

  let { id } = useParams();
  useEffect(() => {
    if (id) {
      const today = new Date(Date.now());
      const matchString = today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString() + today.getHours() % 12 + today.getMinutes().toString();
      if (matchString === id) {
        setAdminUser(true);
      }
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const ele = document.querySelectorAll(".p-splitter-gutter");

    ele.forEach((e) => {
      e.addEventListener(("mouseover"), () => {
        setFrameWorking(false);
      });
    })
  }, []);

  return (
    <div style={{ height: "100%", backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%" }}>
      <Splitter layout="vertical" style={{ height: "100%", background: "transparent" }} gutterSize={10} onResizeEnd={() => setFrameWorking(true)}>
        <SplitterPanel size={65} style={{ overflow: "hidden" }}>
          <Splitter style={{ background: "transparent", display: "flex" }} gutterSize={10} onResizeEnd={() => setFrameWorking(true)}>
            <SplitterPanel style={{ height: "100%" }} className="flex align-items-center justify-content-center" size={20}>
              <Window1 setVisible={setVisible} adminUser={adminUser} setisEditable={setisEditable} />
            </SplitterPanel>
            <SplitterPanel style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="flex align-items-center justify-content-center" size={80}>
              <Window2 frameworking={frameworking} />
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
        <SplitterPanel style={{ overflowY: "scroll" }} className="flex align-items-center justify-content-center" size={35}>
          <Window3 />
        </SplitterPanel>
      </Splitter>
      <AddFrom setVisible={setVisible} visible={visible} isEditable={isEditable} />
    </div>
  )
}
