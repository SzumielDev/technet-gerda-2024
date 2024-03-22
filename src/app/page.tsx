import { Section } from "@/app/components/layout/Section";
import { Menu } from "@/app/components/Menu";
import { Flex } from "@/app/components/layout/Flex";

export default function Home() {
  return (
    <Section>
      <Flex className="justify-center">
        <Menu />
      </Flex>
    </Section>
  );
}
