'use client'

import { Flex } from "@/app/components/layout/Flex";
import { roboto } from "@/app/components/utils/fonts";

export const Header = () => {
  return (
    <main>
      <video className="video" src={require("/videos/video.mp4")} muted autoPlay loop controls={false} />
      <div className="absolute top-0 left-0 right-0">
        <Flex className={`${roboto.className} h-screen items-center justify-center`}>
          <Flex className="flex-col gap-y-4">
            <Flex className="gap-x-4">
              <p className="text-4xl text-white">TECHNET GERDA</p>
              <button className="border px-4 py-2 rounded">ZOBACZ OFERTE</button>
            </Flex>
            <p className="text-2xl text-white">Najlepsze rozwiązania dla Twojego domu</p>
          </Flex>
        </Flex>
      </div>
    </main>
  );
};
