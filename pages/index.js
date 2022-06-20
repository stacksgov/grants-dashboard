import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  Box,
  useColorModeValue,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
3;
import { IoIosRocket } from "react-icons/io";

const Home = () => {
  const { data: session } = useSession();

  return (
    // shorthand
    <Flex
      backgroundColor="black"
      bgImage="url('/images/home.svg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      align="center"
      justify="center"
      height="100vh"
      width="100vw"
      gap="100px"
    >
      <Flex maxWidth={450} maxHeight={550} direction="column">
        <Heading
          size="lg"
          fontWeight={300}
          color="gray.900"
          letterSpacing={-1.5}
        >
          Stacks Foundation
        </Heading>
        <Heading
          size="4xl"
          fontWeight={800}
          color="whiteAlpha.900"
          letterSpacing={-1.5}
          marginBottom="40px"
        >
          Project Launchpad
        </Heading>
        <Heading
          size="sm"
          fontWeight={300}
          color="gray.600"
          maxWidth={300}
          marginBottom="10px"
        >
          Committed to helping developers, designers, community leaders,
          artists, entrepreneurs, and more build a more...
        </Heading>
        <Heading
          size="lg"
          fontWeight={500}
          color="gray.500"
          letterSpacing={-1.5}
          maxWidth={400}
        >
          User-owned & open-source internet powered by the Stacks blockchain,
          Clarity smart contracts, and secured by Bitcoin.
        </Heading>
      </Flex>
      <Flex maxWidth={400} maxHeight={550} direction="column">
        <Flex backgroundColor="black" direction="column" padding="40px">
          <Text
            fontSize="2xl"
            color="whiteAlpha.900"
            fontWeight={300}
            lineHeight="30px"
            letterSpacing={-1.5}
          >
            Funding available from:
          </Text>
          <Text
            color="whiteAlpha.600"
            fontWeight={300}
            lineHeight="20px"
            letterSpacing={-1.5}
          >
            One-thousand to two-hundred and fifty thuosand dollars
          </Text>
          <Button
            color="white"
            fontWeight={600}
            background="linear-gradient(93.72deg, #3182CE 0%, #97266D 100%);"
            p="10px"
            height="50px"
            width="300px"
            border="1px"
            borderColor="white"
            borderRadius="4px"
            rightIcon={<IoIosRocket />}
          >
            Submit Your Application
          </Button>
        </Flex>
        <Flex backgroundColor="black" direction="column" padding="40px">
          <Text
            fontSize="2xl"
            color="whiteAlpha.900"
            fontWeight={300}
            lineHeight="30px"
            letterSpacing={-1.5}
          >
            Funding available from:
          </Text>
          <Text
            color="whiteAlpha.600"
            fontWeight={300}
            lineHeight="20px"
            letterSpacing={-1.5}
          >
            One-thousand to two-hundred and fifty thuosand dollars
          </Text>
          <Button
            color="white"
            fontWeight={600}
            background="linear-gradient(93.72deg, #3182CE 0%, #97266D 100%);"
            p="10px"
            height="50px"
            width="300px"
            border="1px"
            borderColor="white"
            borderRadius="4px"
            rightIcon={<IoIosRocket />}
          >
            Submit Your Application
          </Button>
        </Flex>{" "}
        <Flex backgroundColor="black" direction="column" padding="40px">
          <Text
            fontSize="2xl"
            color="whiteAlpha.900"
            fontWeight={300}
            lineHeight="30px"
            letterSpacing={-1.5}
          >
            Funding available from:
          </Text>
          <Text
            color="whiteAlpha.600"
            fontWeight={300}
            lineHeight="20px"
            letterSpacing={-1.5}
          >
            One-thousand to two-hundred and fifty thuosand dollars
          </Text>
          <Button
            color="white"
            fontWeight={600}
            background="linear-gradient(93.72deg, #3182CE 0%, #97266D 100%);"
            p="10px"
            height="50px"
            width="300px"
            border="1px"
            borderColor="white"
            borderRadius="4px"
            rightIcon={<IoIosRocket />}
          >
            Submit Your Application
          </Button>
        </Flex>
      </Flex>

      <Flex
        color="white"
        height={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {!session && (
          <Button backgroundColor="grey" onClick={signIn}>
            Connect Github
          </Button>
        )}
        {session && (
          <>
            <Button backgroundColor="grey" onClick={signOut}>
              Sign out {session.user.name}
            </Button>
            <Heading>Test</Heading>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Home;
