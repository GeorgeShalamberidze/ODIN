import { HeaderItem } from "@/types/headerItems.type";
import { FaCircleInfo } from "react-icons/fa6";
import { MdAppSettingsAlt } from "react-icons/md";
import { MdConnectingAirports } from "react-icons/md";
import { MdContactPage } from "react-icons/md";

export const headerItems: HeaderItem[] = [
  { id: 0, name: "about", icon: FaCircleInfo },
  { id: 1, name: "features", icon: MdAppSettingsAlt },
  { id: 2, name: "ourApproach", icon: MdConnectingAirports },
  { id: 3, name: "contacts", icon: MdContactPage },
];
