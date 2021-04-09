import React from "react";

// components

import MenuItem from "components/Cards/MenuItems";

export default function Menu() {
    return (
        <>
            {/* Header */}
            <div className="flex flex-wrap">
                <div className="w-full px-4 flex-1">
                    <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100 bg-white text-center"><i class="fas fa-th-large"></i><div>Dashboard</div></span>
                </div>
                <div className="w-full px-4 flex-1">
                    <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100 bg-white text-center"><i class="fas fa-comment-alt"></i><div>Chat</div></span>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full px-4 flex-1">
                    <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100 bg-white text-center"><i class="fas fa-user"></i><div>User Profile</div></span>
                    
                </div>
                <div className="w-full px-4 flex-1">
                    <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100 bg-white text-center"><i class="fas fa-comments"></i><div>Help & FAQ</div></span>
                </div>
            </div>
        </>
    );
}
