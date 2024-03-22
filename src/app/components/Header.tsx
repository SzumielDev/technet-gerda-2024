import { Flex } from "@/app/components/layout/Flex";
import header from "@/app/assets/header.jpg";
import Image from "next/image";

export const Header = () => {
    return (
        <Flex className={`h-screen flex items-center justify-center`}>
            <div className="-z-10">
                <Image
                    src={header}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="header image"
                />
            </div>
            <h1 className="text-4xl">JESTEŚMY DOSTĘPNI DLA CIEBIE</h1>
        </Flex>
    )
}