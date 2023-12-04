/* eslint @typescript-eslint/no-use-before-define: 0 */

import { Flex, FlexProps } from "@chakra-ui/react";
import {
  AnemoIcon,
  CryoIcon,
  DendroIcon,
  ElectroIcon,
  GeoIcon,
  HydroIcon,
  PyroIcon,
} from "./icons";
import { motion } from "framer-motion";

type ThisProps = {
  progress: number;
};

/**
 * @progress 0 < progress < 100, 100 = finish
 *
 * progress 93 左右是卡半岩
 *
 * 推荐 30 70 93 100
 */
export default function GenshinLoading({ progress }: ThisProps) {
  return (
    <Flex
      pos="fixed"
      zIndex={9999}
      bg="white"
      h="100vh"
      w="100vw"
      align="center"
      justify="center"
    >
      <LoadingIconBar
        flexProps={{
          pos: "absolute",
        }}
        color="#f5f5f5"
      />
      <motion.div
        initial={{
          clipPath: `polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`,
        }}
        animate={{
          clipPath: `polygon(0% 0%, ${progress}% 0%, ${progress}% 100%, 0% 100%)`,
        }}
        transition={{
          duration: 0.1,
        }}
      >
        <LoadingIconBar color="#666666" />
      </motion.div>
    </Flex>
  );
}

type LoadingIconBarProps = {
  color: string;
  size?: number;
  style?: any;
  flexProps?: FlexProps;
};
// eslint-disable-next-line
const LoadingIconBar: React.FC<LoadingIconBarProps> = ({
  color,
  size = 50,
  style,
  flexProps,
}) => {
  return (
    <Flex {...flexProps} style={style}>
      <PyroIcon boxSize={size} color={color} />
      <HydroIcon boxSize={size} color={color} />
      <AnemoIcon boxSize={size} color={color} />
      <ElectroIcon boxSize={size} color={color} />
      <DendroIcon boxSize={size} color={color} />
      <CryoIcon boxSize={size} color={color} />
      <GeoIcon boxSize={size} color={color} />
    </Flex>
  );
};
