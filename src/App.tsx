import { useEffect, useState } from "react";
import GenshinLoading from "./components/GenshinLoading";
import { Box, Center, Image } from "@chakra-ui/react";
import Mondstadt from "./pages/mondstadt";

export default function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const progress = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progress);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  }, []);

  useEffect(() => {
    console.log(loadingProgress);
  }, [loadingProgress]);

  if (loadingProgress < 100) {
    return <GenshinLoading progress={loadingProgress} />;
  }

  return (
    <Box>
      <Mondstadt />

      <Center h="calc( 100vh - 4rem )">
        <Image src="/genshin_logo.png" />
      </Center>

      <Center mt="2rem" bg="rgba(255, 255, 255, 0.4)">
        s1b10210160 楊澤華
      </Center>
    </Box>
  );
}
