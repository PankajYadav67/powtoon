import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Image,
    Text,
    useToast,
} from '@chakra-ui/react';
import { OAuthButtonGroup } from './OAuthButtonGroup';
import { PasswordField } from './PasswordField';
import { useState } from 'react';
import { URL } from '../../../Constants/EndPoints';
import axios from "axios";

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const url = URL;
    const toast = useToast()

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/auth/signup`, {
                email,
                password,
            });
            toast({
                title: `Account created.`,
                description: "We've created your account for you.",
                status: 'success',
                duration: 5000,
                position: "top",
                isClosable: true,
            })
            // Handle the response, e.g., show a success message or redirect the user
            console.log(response.data);
        } catch (error) {
            // Handle errors, e.g., show an error message to the user
            toast({
                title: `There Is Some Error.`,
                description: "We've not created your account for you.",
                status: 'error',
                duration: 3000,
                position: "top",
                isClosable: true,
            });
            console.error('Error during signup:', error);
        }
    };

    return (
        <div className='bg-[#3A57FA] min-h-screen flex flex-col'>
            <div className='mx-10 p-4 w-[500px] h-auto'>
                <Link href="/" className="default-logo login-logo" aria-label="Powtoon logo">
                    <Image src="https://static.powtoon.co/images/account/authentication/SignupPage_Logo.svg?24.1.2.1" alt="powtoon | The Visual Communication Platform" />
                </Link>
                {/* Add any additional elements to the navbar here */}
            </div>

            <Container
                maxWidth={"fit-content"}
                className='mx-10'
                py={{
                    base: '3',
                    md: '6',
                }}
                px={{
                    base: '4',
                    sm: '8',
                }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flex="1"
            >
                <Box
                    py={{
                        base: '0',
                        sm: '8',
                    }}
                    px={{
                        base: '4',
                        sm: '10',
                    }}
                    bg={{
                        base: 'transparent',
                        sm: 'bg.surface',
                    }}
                    boxShadow={{
                        base: 'none',
                        sm: 'md',
                    }}
                    borderRadius={{
                        base: 'none',
                        sm: 'xl',
                    }}
                    backgroundColor="white"
                    width="40%"
                >
                    <Stack spacing="6">
                        <Stack
                            spacing={{
                                base: '2',
                                md: '3',
                            }}
                            textAlign="center"

                        >
                            <Heading
                                size={{
                                    base: 'xs',
                                    md: 'sm',
                                }}
                                color="#3A57FA"
                            >
                                Let's Create Your Account
                            </Heading>
                            <Text color="fg.muted">
                                Already have an account <Link href="/auth/login" color="#3A57FA">Login</Link>
                            </Text>
                        </Stack>
                        <Stack spacing="5">
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input id="email" type="email" value={email} onChange={handleEmailChange} />
                            </FormControl>
                            <PasswordField value={password} onChange={handlePasswordChange} />
                        </Stack>
                        <HStack justify="space-between">
                            <Checkbox defaultChecked>Remember me</Checkbox>
                            <Button variant="text" size="sm">
                                Forgot password?
                            </Button>
                        </HStack>
                        <Stack spacing="6">
                            <Button color="white" onClick={handleSignUp} background="#3A57FA" _hover={{ color: 'white', backgroundColor: '#0000ff' }}>
                                Sign Up
                            </Button>
                            <HStack>
                                <Divider />
                                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                                    or continue with
                                </Text>
                                <Divider />
                            </HStack>
                            <OAuthButtonGroup />
                            <Text display={'flex'} alignItems={"center"} justifyContent={"center"}>
                                Sign Up to your <Link href="#" color="#3A57FA">Enterprise account</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
                <Box width="50%">
                    <Image src='/images/loginLoco.png' alt='Login Logo' height="auto" />
                </Box>
            </Container>
        </div>
    );
}
