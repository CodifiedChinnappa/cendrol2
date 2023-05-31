import { useState } from "react";
import Search from "./Search";
import { data } from "../mockData/data";

const Banner = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [searchData, setSearchData] = useState(0);

  const handleTabClick = (item) => {
    setActiveTab(item.id);
    setSearchData(item);
  };

  return (
    <section
      className="flex flex-col items-center py-4 bg-cover"
      style={{
        backgroundImage:
          "url(https://landsandhomes.com/front/images/banner2.png)",
      }}
    >
      <ul className="flex flex-wrap justify-center items-center my-10 p-3 gap-8">
        {data.map((item, i) => (
          <li
            key={item.title}
            onClick={() => handleTabClick(item)}
            className={`flex items-center bg-[#ED1A25] rounded-md px-3 py-[0.2rem] border-red-400 cursor-pointer  hover:bg-[#DFDFDF]  hover:text-[#ED1A25]  ${
              activeTab === item.id ? "text-[#ED1A25] bg-white" : "text-white "
            }`}
          >
            <img src={item.icon} width="36px" />
            <a>{item.title}</a>
          </li>
        ))}
      </ul>
      {searchData?.tags && <Search data={searchData} />}
    </section>
  );
};

export default Banner;
