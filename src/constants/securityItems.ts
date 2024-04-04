import { SecurityItem } from "@/types/securityItem.type";
import SecurityImgOne from "@/assets/png/security/security-item1.webp";
import SecurityImgTwo from "@/assets/png/security/security-item2.webp";
import SecurityImgThree from "@/assets/png/security/security-item3.webp";
import SecurityImgFour from "@/assets/png/security/security-item4.webp";

import SecurityImgGeoOne from "@/assets/png/security/security-item-geo1.webp";
import SecurityImgGeoTwo from "@/assets/png/security/security-item-geo2.webp";
import SecurityImgGeoThree from "@/assets/png/security/security-item-geo3.webp";
import SecurityImgGeoFour from "@/assets/png/security/security-item-geo4.webp";

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
