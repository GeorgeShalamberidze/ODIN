import React from "react";
import { collection, addDoc, WithFieldValue } from "firebase/firestore";
import { db } from "@/config/firebase";
import { EMAIL } from "@/enum/Email";

export type EmailPropType = {
  email: WithFieldValue<DocumentType> | undefined;
};

const postEmail = async (email: EmailPropType) => {
  try {
    await addDoc(collection(db, EMAIL.DB), { email });
  } catch (e) {
    console.error("Error occured during email execution", e);
  }
};

export default postEmail;
