import React from "react";

// components

import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardStudentLoan from "components/Cards/CardStudentLoan.js";
import HeaderStats from "components/Headers/HeaderStats.js";

export default function Dashboard() {
  return (
    <>
    
        {/* Header */}
        <HeaderStats />
      <div className="flex flex-wrap">
      </div>
      <h4>Outstanding Loan</h4>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardStudentLoan />
        </div>
        <div className="w-full xl:w-6/12 px-4">
          <CardStudentLoan />
        </div>
      </div>
      <h4>Repayment History</h4>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-100 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
      </div>
    </>
  );
}
