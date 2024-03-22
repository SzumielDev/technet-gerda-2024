import { Flex } from "@/app/components/layout/Flex"
import { ThemeSwitch } from "@/app/components/buttons/ThemeSwitch"

export const Menu = () => {
    return (
        <Flex className="gap-x-8 items-center justify-center p-4">
            <button>PROMOCJE</button>
            <button>WSPÓŁPRACA</button>
            <button>KONTAKT</button>
            <ThemeSwitch />
        </Flex>
    )
}