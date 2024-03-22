import { Section } from "@/app/components/layout/Section";
import { Menu } from "@/app/components/Menu";
import { Flex } from "@/app/components/layout/Flex";
import { Header } from "@/app/components/Header";

export default function Home() {
  return (
    <Section>
      <div className="relative">
        <div className="fixed top-0 left-0 right-0">
          <Flex className="justify-center">
            <Menu />
          </Flex>
        </div>
      </div>
      <Header />
    </Section>
  );
}
