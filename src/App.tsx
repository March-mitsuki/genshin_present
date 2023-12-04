import { useEffect, useState } from "react";
import GenshinLoading from "./components/GenshinLoading";
import { Box, Button, Center, Spinner } from "@chakra-ui/react";

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
      <Center mt="2rem">
        <Button>
          <Spinner mr={2} />
          Still working...
        </Button>
      </Center>
      <Center mt="2rem">s1b10210160 楊澤華</Center>
    </Box>
  );
}
