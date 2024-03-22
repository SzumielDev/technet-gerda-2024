import { Rubik, Roboto_Flex } from 'next/font/google';

export const rubik = Rubik({
    weight: "600",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-rubik",
});

export const roboto = Roboto_Flex({
    weight: "700",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
})