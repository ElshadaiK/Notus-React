import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import MenuItem from "components/Cards/MenuItems.js";
import MenuOverall from "components/Cards/MenuOverall";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <h4 className="mb-4">Loan & Scholarships</h4>
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap">
                <div className="w-4/12 px-4">
                  <MenuItem
                    menuTag="REG"
                    menuTitle="STUDENT LOAN"
                    menuDescription="INSTANT LOAN"
                    menuBackgroundColor='bg-blueGray-700'
                    menuLink='forms'
                    menuIconName='far fa-chart-bar'
                  />
                </div>
                <div className="w-4/12 px-4">
                  <MenuItem
                    menuTag="YES"
                    menuTitle="STUDENT SCHOLARSHIP"
                    menuDescription="CHINA SCHOLARSHIP"
                    menuBackgroundColor='bg-blueGray-700'
                    menuLink='#'
                    menuIconName='fas fa-chart-pie'
                  />
                </div>
                <div className="w-8/12 px-4 flex-1">
                <MenuOverall
                    menuTitle="Total Loan Balance"
                    menuDescription="85,603.00 "
                    menuBackgroundColor='bg-blueGray-700'
                    menuIconName='fas fa-spinner'
                  />
                  </div>
              </div>
            </div>{/* Card stats */}
          </div>
        </div>
      </div>
    </>
  );
}
