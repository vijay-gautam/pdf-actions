import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const SocialButton = ({ children, label, href, color }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      color={color}
      rounded={"full"}
      w={[4 , 8]}
      h={[4 ,8] }
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer({h , w}) {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      h= {h}
      w={w}
    >
      <Container
        as={Stack}
        maxW={"7xl"}
        py={[4 ,3] }
        direction={{ base: "column", md: "row" }}
        spacing={[2 ,4 ]}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text
          fontSize={ [10 , 30 ]}
          fontFamily="Roboto Condensed"
          fontWeight="extrabold"
          color={useColorModeValue("black", "white")}
        >
          © 2021 G.V. | All rights reserved
        </Text>
        <Stack direction={"row"} spacing={[ 3, 6]}>
          <SocialButton
            label={"Twitter"}
            href={"#"}
            color={useColorModeValue("#00acee", "#00acee")}
          >
            <Link href="https://chakra-ui.com" isExternal>
              <FaTwitter />
            </Link>
          </SocialButton>
          <SocialButton label={"Github"}>
            <Link href="https://chakra-ui.com" isExternal>
              <FaGithub />
            </Link>
          </SocialButton>
          <SocialButton
            label={"Linkedin"}
            color={useColorModeValue("#0077b5", "#0077b5")}
          >
            <Link href="https://chakra-ui.com" isExternal>
              <FaLinkedin />
            </Link>
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
