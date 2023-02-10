import { Image, VStack } from "native-base";

import BackgroundImg from "@assets/background.png";

export function Signin() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
        src={BackgroundImg}
      />
    </VStack>
  );
}
