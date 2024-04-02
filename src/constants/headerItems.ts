import { HeaderItem } from "@/types/headerItems.type";
import { FaCircleInfo } from "react-icons/fa6";
import { MdAppSettingsAlt } from "react-icons/md";
import { MdConnectingAirports } from "react-icons/md";
import { MdContactPage } from "react-icons/md";

export const headerItems: HeaderItem[] = [
  { id: 0, name: "howOdinWorks", icon: FaCircleInfo },
  { id: 1, name: "keyFeatures", icon: MdAppSettingsAlt },
  { id: 2, name: "trustAndSecurity", icon: MdConnectingAirports },
  { id: 3, name: "contacts", icon: MdContactPage },
];
