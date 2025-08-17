import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack>
			<Switch.Root
				checked={colorMode === "dark"}
				onCheckedChange={toggleColorMode}
				colorPalette={"green"}
			>
				<Switch.HiddenInput />
				<Switch.Control />
				<Switch.Label>
					<Text whiteSpace={"nowrap"}>Dark Mode</Text>
				</Switch.Label>
			</Switch.Root>
		</HStack>
	);
};

export default ColorModeSwitch;
