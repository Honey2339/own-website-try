import React from "react";
import "./load.css";

export default function OnLoadPage() {
  return (
    <main>
      <div className="loading-page">
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
        >
          <path d="M0 96C0 60.7 28.7 32 64 32h96c88.4 0 160 71.6 160 160s-71.6 160-160 160H64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V320 96zM64 288h96c53 0 96-43 96-96s-43-96-96-96H64V288z" />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
        >
          <path d="M311 86.3c12.3-12.7 12-32.9-.7-45.2s-32.9-12-45.2 .7l-155.2 160L64 249V64c0-17.7-14.3-32-32-32S0 46.3 0 64V328 448c0 17.7 14.3 32 32 32s32-14.3 32-32V341l64.7-66.7 133 192c10.1 14.5 30 18.1 44.5 8.1s18.1-30 8.1-44.5L174.1 227.4 311 86.3z" />
        </svg>
      </div>
    </main>
  );
}
