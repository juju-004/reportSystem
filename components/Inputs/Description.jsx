"use client";

import React from "react";
import { HomeIcon, DocumentIcon } from "@heroicons/react/20/solid";

function Description({ title, home }) {
  return (
    <>
      <div className={`form__inputs flex-1`}>
        <label htmlFor={home ? "homeAddress" : "description"}>
          <span>{title}</span>
          {home ? (
            <HomeIcon className={`h-6 w-6 absolute right-3 `} />
          ) : (
            <DocumentIcon className={`h-6 w-6 absolute right-3 `} />
          )}
        </label>
        <textarea
          className="min-h-28"
          name={home ? "homeAddress" : "description"}
        ></textarea>
      </div>
    </>
  );
}

export default React.memo(Description);
