import React, { useState } from "react";
import HowOdinWorksContent from "./odinWorkContent";
import { senderItems, travelerItems } from "@/constants/odinWorkItems";
import { Fade } from "react-awesome-reveal";
const HowOdinWorks = () => {
  const [clientPicked, setCliendPicked] = useState<string>("sender");

  return (
    <div className="mb-24 relative" id="howOdinWorks">
      <Fade triggerOnce className="w-full" duration={800}>
        <div className="flex items-center justify-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-[#212121]">
            How Odin works
          </h1>
        </div>

        <div className="flex items-center justify-center h-28 w-full mb-6">
          <div className="w-11/12 xs:max-w-[414px] flex gap-4 bg-white p-4 px-6 rounded-3xl">
            <div
              className={`${
                clientPicked == "sender"
                  ? "bg-[#2171EC] text-white"
                  : "bg-white text-black"
              } h-[81px] w-[178px] flex justify-center items-center text-2xl font-bold rounded-2xl px cursor-pointer`}
              onClick={() => setCliendPicked("sender")}
              onMouseEnter={() => {
                if (clientPicked == "sender") return;
                setCliendPicked("sender");
              }}
            >
              <p>Sender</p>
            </div>
            <div
              className={`${
                clientPicked == "traveler"
                  ? "bg-[#2171EC] text-white"
                  : "bg-white text-black"
              }  h-[81px] w-[178px] flex justify-center items-center text-2xl font-bold rounded-2xl px cursor-pointer`}
              onClick={() => setCliendPicked("traveler")}
              onMouseEnter={() => {
                if (clientPicked == "traveler") return;
                setCliendPicked("traveler");
              }}
            >
              <p>Traveler</p>
            </div>
          </div>
        </div>

        <div className="mx-4 md:mx-14 lg:mx-28">
          {clientPicked === "sender" ? (
            <HowOdinWorksContent isSender={true} content={senderItems} />
          ) : (
            <HowOdinWorksContent isSender={false} content={travelerItems} />
          )}
        </div>
      </Fade>
    </div>
  );
};

export default HowOdinWorks;
