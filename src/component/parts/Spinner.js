import React from "react";

export default function Spinner() {
  return (
    <div>
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-6 h-6 border-4 border-white m-auto border-solid rounded-full animate-spin"
      ></div>
    </div>
  );
}
