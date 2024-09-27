"use client";

import React from "react";
import { UserIcon } from "@heroicons/react/20/solid";

function Name() {
  return (
    <>
      <div className={`form__inputs`}>
        <label htmlFor="fullName">
          <span>Full name</span>
          <UserIcon className={`h-6 w-6 absolute right-3`} />
        </label>
        <input type="text" name="fullName" id="fullName" required={true} />
      </div>
    </>
  );
}

export default React.memo(Name);
