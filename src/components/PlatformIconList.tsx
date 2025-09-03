import type { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => {
        //some games don't have the icons in the iconMap so renders and error and the webpage crashes so check if there is an icon and only render the icon
        const IconComponent = iconMap[platform.slug];
        return (
          IconComponent && (
            <Icon key={platform.id} as={IconComponent} color="gray.500" />
          )
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
