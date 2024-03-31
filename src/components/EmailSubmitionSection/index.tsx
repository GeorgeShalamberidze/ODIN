import React, { useState } from "react";

const EmailSubmitionSection = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="bg-[#F5F5F5] mb-[103px]">
      <div className="px-[110px] flex items-center justify-between">
        <div className="max-w-[800px]">
          <div className="flex flex-col gap-6">
            <p className="text-[40px] text-[#262C40] font-bold">
              Let's Get In Touch
            </p>
            <p className="text-xl text-[#262C40]">
              ODIN offers unmatched cost-effectiveness, allowing you to save on
              shipping fees while ensuring swift and reliable delivery. Our
              verification systems ensure reliable exchanges between senders and
              travellers.
            </p>
          </div>

          <div className="flex mt-9 gap-4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              type="email"
              className="h-[72px] w-full rounded-xl pl-4 outline-none text-base"
              pattern=".+@example\.com"
              size={30}
            />
            <button
              type="submit"
              className="h-[72px] w-[190px] bg-[#242424] rounded-xl"
            >
              <p className="text-2xl text-white">Submit</p>
            </button>
          </div>
        </div>

        <div>
          <img
            src="./src/assets/png/parcelOne.png"
            alt="handout parcel"
            className="h-[431px] my-[31px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailSubmitionSection;
