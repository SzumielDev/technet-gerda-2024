'use client'

import { Flex } from "@/app/components/layout/Flex";

export const Header = () => {
  return (
    <main>
      <video src={require("/videos/video.mp4")} muted autoPlay loop controls={false} />
      <div className="absolute top-0 left-0 right-0">
        <Flex className="h-screen flex items-center justify-center">
          AAA
        </Flex>
      </div>
    </main>
  );
};
