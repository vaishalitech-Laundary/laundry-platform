import React from "react";

const MobileFooter = ({ active = "home" }) => {
  const icons = [
    { name: "home", icon: "ri-home-4-fill" },
    { name: "calendar", icon: "ri-calendar-line" },
    { name: "box", icon: "ri-box-3-line" },
    { name: "user", icon: "ri-user-3-line" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center py-3 bg-transparent z-10">
      <div className="w-[90%] bg-white rounded-xl shadow-md flex justify-around py-3 px-4">
        {icons.map((item) => (
          <button
            key={item.name}
            className={`p-2 rounded-full ${
              active === item.name
                ? "bg-[#1f2b3d] text-white shadow-md"
                : "text-[#1f2b3d]"
            }`}
          >
            <i className={`${item.icon} text-xl`}></i>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileFooter;
