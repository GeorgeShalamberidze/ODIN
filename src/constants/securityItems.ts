import { SecurityItem } from "@/types/securityItem.type";
import SecurityImgOne from "@/assets/png/security/security-item1.svg";
import SecurityImgTwo from "@/assets/png/security/security-item2.svg";
import SecurityImgThree from "@/assets/png/security/security-item3.svg";
import SecurityImgFour from "@/assets/png/security/security-item4.svg";

import SecurityImgGeoOne from "@/assets/png/security/security-item-geo1.svg";
import SecurityImgGeoTwo from "@/assets/png/security/security-item-geo2.svg";
import SecurityImgGeoThree from "@/assets/png/security/security-item-geo3.svg";
import SecurityImgGeoFour from "@/assets/png/security/security-item-geo4.svg";

export const securityItems: SecurityItem[] = [
  {
    title: "trustTitleOne",
    imgUrlEn: SecurityImgOne,
    imgUrlGeo: SecurityImgGeoOne,
  },
  {
    title: "trustTitleTwo",
    imgUrlEn: SecurityImgTwo,
    imgUrlGeo: SecurityImgGeoTwo,
  },
  {
    title: "trustTitleThree",
    imgUrlEn: SecurityImgThree,
    imgUrlGeo: SecurityImgGeoThree,
  },
  {
    title: "trustTitleFour",
    imgUrlEn: SecurityImgFour,
    imgUrlGeo: SecurityImgGeoFour,
  },
];
