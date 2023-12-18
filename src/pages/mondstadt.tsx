import { Box } from "@chakra-ui/react";

export default function Mondstadt() {
  return (
    <Box pos="absolute" zIndex={-1}>
      <video src="/main_visual.mp4" autoPlay loop muted />
    </Box>
  );
}
