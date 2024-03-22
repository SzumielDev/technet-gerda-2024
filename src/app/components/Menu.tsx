import { Flex } from "@/app/components/layout/Flex"
import { ThemeSwitch } from "@/app/components/buttons/ThemeSwitch"
import { roboto } from "@/app/components/utils/fonts"

export const Menu = () => {
    return (
        <div className="bg-blue-200 dark:bg-blue-950 rounded-lg max-w-max">
            <Flex className={`${roboto.className} text-neutral-900 dark:text-white gap-x-8 items-center justify-center p-4`}>
                <button>PROMOCJE</button>
                <button>WSPÓŁPRACA</button>
                <button>KONTAKT</button>
                <ThemeSwitch />
            </Flex>
        </div>
    )
}