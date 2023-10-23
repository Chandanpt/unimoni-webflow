import India from "../assets/Property 1=India.png"
import Bangladesh from "../assets/Property 1=Bangladesh.png"
import SriLanka from "../assets/Property 1=Sri Lanka.png"
import Philippines from "../assets/Property 1=Philippines.png"
import Nepal from "../assets/Property 1=Nepal.png";
import { StaticImageData } from "next/image";

export interface CurrencyDataProps {
      flagSvg: StaticImageData;
      currency: string;
      code: string;
      rate?: number;
      symbol?: string;
    };

export const CURRENCY_DATA = [
    {
        flagSvg: India,
        currency: "India Rupee",
        code: "INR",
        rate: 22.63,
        symbol: "₹"
    },
    {
        flagSvg: Bangladesh,
        currency: "Bangladesh Taka",
        code: "BDT",
        rate: 29.95,
        symbol: "৳",
    },
    {
        flagSvg: SriLanka,
        currency: "Lankan Rupee",
        code: "LKR",
        rate: 88.28,
        symbol: "₨",
    },
    {
        flagSvg: Philippines,
        currency: "Pesos",
        code: "PHP",
        rate: 15.47,
        symbol: "₱",

    },
    {
        flagSvg: Nepal,
        currency: "Nepali Rupee",
        code: "NPR",
        rate: 36.19,
        symbol: "₹",
    },
]