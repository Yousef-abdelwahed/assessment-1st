import React from "react";

export default function Spinner() {
  return (
    <div className="spinner-wrapper d-flex justify-content-center align-items-center position-fixed top-0 left-0 h-100 w-100 ">
      <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>{" "}
    </div>
  );
}
