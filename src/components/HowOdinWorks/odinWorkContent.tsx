import React from "react";
import { OdinWorkContent } from "@/types/odinWorkContent.type";

type HowOdinWorksContentPropType = {
  content: OdinWorkContent[];
  isSender: boolean;
};

const HowOdinWorksContent = ({
  content,
  isSender,
}: HowOdinWorksContentPropType) => {
  return (
    <div className="flex gap-4 flex-col">
      {content.map((data) => (
        <div
          key={data.id}
          className={`${
            isSender ? "flex-row-reverse" : ""
          } flex items-center justify-center gap-4 h-fit md:max-h-[260px] flex-col md:flex-row`}
        >
          <div className="w-full flex flex-col gap-3 bg-white rounded-2xl h-fit md:h-[260px] justify-center text-center md:text-start py-8">
            <h1 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl xl:text-2xl text-[#021228] px-8">
              {data.title}
            </h1>
            <p className="sm:text-2xl md:text-sm lg:text-base text-[#636B77] px-8">
              {data.info}
            </p>
          </div>
          <div className="w-full">
            <img
              className="h-[180px] lg:h-[260px] md:h-[260px] w-full object-cover rounded-3xl"
              src={data.imgUrl}
              alt={data.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowOdinWorksContent;
