import React from "react";
import PropTypes from "prop-types";

export default function MenuOverall({
  menuTitle,
  menuDescription,
  menuBackgroundColor,
  menuIconName,

}) {
  return (
<div className="h-full">
                    <div className="relative flex flex-col min-w-0 break-words bg-blueGray-700 rounded-b mb-6 xl:mb-0 shadow-lg h-full">
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div className="relative w-full pr-4 pt-4 max-w-full flex-grow flex-1">
                            <div className='flex-row pt-12'>
                              <h5 className="text-white uppercase inline-flex text-xl">
                              {menuTitle}
                              </h5>
                            </div>
                          </div>
                          <div className="relative w-auto pl-4 flex-initial">
                            <div
                              className={
                                "text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 shadow-lg " 
                                
                              }
                            >
                              <i class={menuIconName}></i>
                            </div>
                          </div>
                        </div>
                        <div className="relative pr-4 mt-5 mb-3 flex-grow flex-1">


                          <span className="text-xs text-white">
                            ZMK <span className="text-xl text-white font-bold">
                            {menuDescription}
                            </span>
                            </span>
                        </div>
                        



                      </div>
                    </div>
                  </div>
                
  );
}

MenuOverall.defaultProps = {
  menuIconName: "far fa-chart-bar",
  menuIconColor: "bg-red-500",
};

MenuOverall.propTypes = {
  menuIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  menuIconColor: PropTypes.string,
};
