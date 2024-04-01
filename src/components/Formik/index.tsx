import React from "react";
import postEmail, { EmailPropType } from "@/services/postEmail";
import { validate } from "@/helpers/validateEmail";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";

const FormikForm = () => {
  return (
    <Formik
      validate={validate}
      initialValues={{ email: "" }}
      onSubmit={({ email }, { setSubmitting, setFieldValue, setTouched }) => {
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
          <Form className="flex mt-5 md:mt-9 gap-4 flex-col 2xs:flex-row">
            <Field
              type="email"
              placeholder="Enter Email"
              name="email"
              className="h-[72px] w-full rounded-xl pl-4 outline-none text-base border-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-[72px] w-full 2xs:w-[190px] bg-[#242424] rounded-xl relative cursor-pointer border-none outline-none"
            >
              {isSubmitting ? (
                <AiOutlineLoading
                  size={35}
                  className="spinner absolute top-5 left-12 -translate-x-1/2"
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
  );
};

export default FormikForm;
