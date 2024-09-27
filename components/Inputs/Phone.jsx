"use client";

import React from "react";
import { PhoneIcon, UserPlusIcon } from "@heroicons/react/20/solid";

function Phone() {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-4">
        <div className={`form__inputs flex-1`}>
          <label htmlFor="phone">
            <span>Phone number</span>
            <PhoneIcon className={`h-6 w-6 absolute right-3`} />
          </label>
          <div className="flex items-center">
            <span className="bg-black/10 mr-4 font-[Suse] rounded-r-2xl pr-3 pl-2 py-1">
              +234
            </span>
            <input type="text" name="phone" id="phone" required={true} />
          </div>
        </div>
        <div className={`form__inputs  `}>
          <label htmlFor="age">
            <span>Age</span>
            <UserPlusIcon className={`h-6 w-6 absolute right-3`} />
          </label>
          <input
            type="number"
            className="md:w-5 w-full"
            style={{ width: "60px" }}
            name="age"
            id="age"
            required={true}
          />
        </div>
      </div>
    </>
  );
}

export default React.memo(Phone);
