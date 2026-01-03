import { useState } from "react";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <div>
      <div className="flex">
        <button
          onClick={() => setActiveTab("description")}
          className={`border py-3 px-6 cursor-pointer active:bg-gray-300 border-gray-300 ${
            activeTab === "description" && "bg-gray-300"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`border py-3 px-6 cursor-pointer active:bg-gray-300 border-gray-300 ${
            activeTab === "reviews" && "bg-gray-300"
          }`}
        >
          Reviews(122)
        </button>
      </div>
      <div>
        {activeTab === "description" ? (
          <p className={`p-7 border border-gray-300`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius
            explicabo et eum officiis id earum impedit. Commodi illum delectus
            et libero eligendi eum, necessitatibus nemo quibusdam atque
            reiciendis facilis culpa voluptas rem ratione distinctio quam
            laudantium error nulla ab dolorem dignissimos repellat? Incidunt
            totam qui, doloremque ab, corrupti quisquam quia molestias modi
            eaque non veniam dicta pariatur aliquam soluta?
          </p>
        ) : (
          <p className="p-7 border border-gray-300">
            active Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            eius explicabo et eum officiis id earum impedit. Commodi illum
            delectus et libero eligendi eum, necessitatibus nemo quibusdam atque
            reiciendis facilis culpa voluptas rem ratione distinctio quam
            laudantium error nulla ab dolorem dignissimos repellat? Incidunt
            totam qui, doloremque ab, corrupti quisquam quia molestias modi
            eaque non veniam dicta pariatur aliquam soluta?
          </p>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
