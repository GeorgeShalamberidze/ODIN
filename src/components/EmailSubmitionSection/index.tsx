import React from "react";
import postEmail, { EmailPropType } from "@/services/postEmail";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { validate } from "@/helpers/validateEmail";
import { AiOutlineLoading } from "react-icons/ai";
import "./style.css";
import { toast } from "react-toastify";

const EmailSubmitionSection = () => {
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
          <Formik
            validate={validate}
            initialValues={{ email: "" }}
            onSubmit={(
              { email },
              { setSubmitting, setFieldValue, setTouched }
            ) => {
              postEmail(email as unknown as EmailPropType)
                .then(() => {
                  setFieldValue("email", "");
                  setTouched({ email: false });
                })
                .finally(() => {
                  setSubmitting(false);
                  toast.success("Email submitted successfully !");
                });
            }}
          >
            {({ isSubmitting, errors }) => (
              <>
                <Form className="flex mt-9 gap-4">
                  <Field
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    className="h-[72px] w-full rounded-xl pl-4 outline-none text-base"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-[72px] w-[190px] bg-[#242424] rounded-xl relative"
                  >
                    {isSubmitting ? (
                      <AiOutlineLoading
                        size={35}
                        className="spinner absolute top-5 left-12"
                        fill="white"
                      />
                    ) : (
                      <p className="text-2xl text-white">Submit</p>
                    )}
                  </button>
                </Form>
                {errors.email ? (
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 mt-2 text-2xl"
                  />
                ) : (
                  <div className="h-10 w-full"></div>
                )}
              </>
            )}
          </Formik>
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
