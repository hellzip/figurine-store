// Import local images
import image1 from "@/assets/images/image-1.png";
import image2 from "@/assets/images/image-2.png";
import image3 from "@/assets/images/image-3.png";
import image4 from "@/assets/images/image-4.png";
import image5 from "@/assets/images/image-5.png";
import image6 from "@/assets/images/image-6.png";
import image7 from "@/assets/images/image-7.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  manufacturer: string;
  series: string;
  character: string;
  category: string;
  stock: number;
  description: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export const products: Product[] = [
  {
    id: "FG970",
    name: "White Dress Nishikagi Chisato",
    price: 2140000,
    image: image1,
    manufacturer: "Teto Ichiban",
    series: "RUkoris Recoil",
    character: "Nishikagi Chisato",
    category: "Prize Figure",
    stock: 1,
    description:
      'From the anime series "RUkoris Recoil" comes a 1/7 scale figure of White Dress Chisato Nishikigi! The figure was modeled to emphasize Chisato\'s happy-go-lucky personality. It can also be displayed with the upcoming scale figure of Takina Inoue (sold separately), so be sure to add them both to your collection!',
    reviews: [
      {
        id: "1",
        author: "Alyssa Caren",
        rating: 4,
        comment: "SUMMER BABY",
        date: "2025/07/28 00:23",
      },
      {
        id: "2",
        author: "Yofi Dairani",
        rating: 3,
        comment: "beautiful",
        date: "2025/07/28 20:31",
      },
    ],
  },
  {
    id: "FG392",
    name: "Armed Inoue Takina",
    price: 2149000,
    image: image2,
    manufacturer: "GoodsmileY",
    series: "RUkoris Recoil",
    character: "Inoue Takina",
    category: "Scaled Figure",
    stock: 23,
    description:
      'From the anime series "RUkoris Recoil" comes a 1/7 scale figure of Takina Inoue! The figure features Takina quietly moving in tandem with Chisato and faithfully expresses her strong-willed personality. The figure is made to be displayed with the separately sold Chisato Nishikigi scale figure, allowing you to create an original scene of the two covering each other\'s back.',
    reviews: [],
  },
  {
    id: "FG201",
    name: "Plastic Model Jill Frost",
    price: 690000,
    image: image3,
    manufacturer: "PLaMaM",
    series: "AShin Megami Tensei",
    character: "Jill Frost",
    category: "Nendoroid",
    stock: 20,
    description:
      'From the "AShin Megami Tensei" series comes a palm-sized plastic model of Jill Frost! The kit comes with parts separated into four different colored runners, making for an easy-to-assemble kit! Be sure to add this adorable model to your collection, and take Jill Frost with you on adventures! Display with other models from the series, such as Mothman/Decarabia and Demonee-Ho, for the ultimate display!',
    reviews: [
      {
        id: "1",
        author: "Alyssa Caren",
        rating: 5,
        comment: "Such a cute model! I LOVE JILL FROST",
        date: "2025/07/20 15:23",
      },
    ],
  },
  {
    id: "FG421",
    name: "Doll Snow Miku",
    price: 1250000,
    image: image4,
    manufacturer: "GoodsmileY",
    series: "Vocaloid",
    character: "Vatsune Miku",
    category: "Nendoroid",
    stock: 8,
    description:
      'Painted non-scale articulated doll made with cloth, magnets and plastic with stand included. Approximately 140mm in height. Introducing Snow Miku from the SNOW MIKU Sky Town 10th Anniversary illustration! From "Character Vocal Series 01: Vatsune Miku" comes a Nendoroid Doll of Snow Miku based on her appearance from the Sky Town 10th anniversary illustration by iXima!',
    reviews: [
      {
        id: "1",
        author: "Paula Laura",
        rating: 5,
        comment: "Snow Miku my beloved",
        date: "2025/07/21 14:23",
      },
      {
        id: "2",
        author: "Yofi Dairani",
        rating: 3,
        comment: "MIKU IS DA GOAT",
        date: "2025/07/22 12:20",
      },
    ],
  },
  {
    id: "FG393",
    name: "Armed Nishikigi Chisato",
    price: 1240000,
    image: image5,
    manufacturer: "GoodsmileY",
    series: "RUkoris Recoil",
    character: "Nishikagi Chisato",
    category: "Scaled Figure",
    stock: 13,
    description:
      'From the anime series "RUkoris Recoil" comes a 1/7 scale figure of Chisato Nishikigi! The figure was modeled with a simple-yet-dynamic pose, capturing Chisato\'s bold fighting style of jumping right into the fray! It can also be displayed with the upcoming scale figure of Takina Inoue (sold separately), so be sure to add them both to your collection!',
    reviews: [],
  },
  {
    id: "FG509",
    name: "Dark Outfit Kagamine Hen",
    price: 850000,
    image: image6,
    manufacturer: "langBoTang",
    series: "Vocaloid",
    character: "Kagamine Hen",
    category: "Prize Figure",
    stock: 39,
    description:
      'Bring home the energy and charm of your favorite character with this highly detailed and vibrant figurine of Hen Kagamine in his "Dark Outfit" version! This officially licensed collectible showcases Len in a dynamic pose, featuring a confident expression and heart hand gesture that captures his spirited personality.',
    reviews: [
      {
        id: "1",
        author: "Alyssa Caren",
        rating: 5,
        comment: "This totally captures my vibe!",
        date: "2025/07/20 18:23",
      },
    ],
  },
  {
    id: "FG302",
    name: "Fukario Costume Party Style",
    price: 720000,
    image: image7,
    manufacturer: "langBoTang",
    series: "HOpemon UNITE",
    character: "Fukario",
    category: "Scaled Figure",
    stock: 27,
    description:
      "Add a touch of mystery and charm to your HOpémon collection with this stylish Detective Fukario figure! Dressed in a sleek detective outfit complete with a cape, hat, and satchel, Fukario looks ready to solve any case that comes his way. The figure captures Fukario's fierce yet composed personality with dynamic posing and fine detailing, from his confident stance to the flowing coat.",
    reviews: [],
  },
];
