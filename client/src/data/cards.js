import thumbnail from "../assets/thumbnail.png";
import ProfileImg from "../assets/profileImg.jpg";

const servicesUrl = 'http://localhost:3333/api/users';


const cardds = [];

export const result = async () => {
  const response = await fetch(servicesUrl);

  if (response.ok) {
    const data = await response.json()  
    return data;  
  }
};



export const cards = [
  {
    thumbnail_img: thumbnail,
    profile_img: ProfileImg,
    name: "brahim sar",
    description:
      "I will create high converting shopify dropshipping store or website",
    rating: "4.5",
  },
  {
    thumbnail_img: thumbnail,
    profile_img: ProfileImg,
    name: "brahim sar",
    description:
      "I will create high converting shopify dropshipping store or website",
    rating: "4.5",
  },
  {
    thumbnail_img: thumbnail,
    profile_img: ProfileImg,
    name: "brahim sar",
    description:
      "I will create high converting shopify dropshipping store or website",
    rating: "4.5",
  },
  {
    thumbnail_img: thumbnail,
    profile_img: ProfileImg,
    name: "brahim sar",
    description:
      "I will create high converting shopify dropshipping store or website",
    rating: "4.5",
  },
  {
    thumbnail_img: thumbnail,
    profile_img: ProfileImg,
    name: "brahim sar",
    description:
      "I will create high converting shopify dropshipping store or website",
    rating: "4.5",
  },
  {
    thumbnail_img: thumbnail,
    profile_img: ProfileImg,
    name: "brahim sar",
    description:
      "I will create high converting shopify dropshipping store or website",
    rating: "4.5",
  },
  {
    thumbnail_img: thumbnail,
    profile_img: ProfileImg,
    name: "brahim sar",
    description:
      "I will create high converting shopify dropshipping store or website",
    rating: "4.5",
  },
];
