import React from "react";
import FormikForm from "../Formik";
import Parcel from "@/assets/png/parcel101.png";
import "./style.css";

const EmailSubmitionSection = () => {
  return (
    <div className="bg-[#F5F5F5] mx-4 md:mx-14 lg:mx-28 flex justify-between gap-5 mb-16">
      <div className="flex items-center justify-between flex-1">
        <div className="max-w-[800px]">
          <div className="flex flex-col gap-3 md:gap-6">
            <p className="text-2xl md:text-[32px] font-bold text-[#262C40]">
              Join Our Global Community
            </p>
            <p className="text-md md:text-xl text-[#262C40]">
              Ready to revolutionize the way you send and receive parcels?
              Provide your e-mail address and stay informed. We’ll let you know
              as soon as ODIN goes live, so you can be among the first to
              experience the future of parcel delivery
            </p>
          </div>
          <FormikForm />
        </div>
      </div>

      <div className="flex-1 justify-end hidden md:flex">
        <img
          src={Parcel}
          alt="handout parcel"
          className="h-[431px] my-[31px] object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default EmailSubmitionSection;
