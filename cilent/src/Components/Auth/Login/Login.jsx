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
import axios from 'axios';
import { URL } from '../../../Constants/EndPoints';
import { useAuth } from '../../../Contexts/Auth.Context';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const url = URL;
    const toast = useToast();
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {

        setPassword(event.target.value);
    };

    const handleLogIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/auth/login`, {
                email,
                password,
            });
            // Successful login
            toast({
                title: `Successfully Logged In`,
                description: `Welcome back! You have successfully logged in.`,
                status: 'success',
                duration: 3000,
                position: "top",
                isClosable: true,
            });
            // Update AuthContext with login data

            if (response) {
                const { _id, email, token } = response.data.payload;
                login({
                    _id,
                    email,
                    token
                });
                // Navigate to the home page
                navigate('/');
            }
            // Handle the response, e.g., show a success message or redirect the user
            console.log(response.data);
        } catch (error) {
            toast({
                title: `Login Failed`,
                description: `Oops! There was an error during login. Please check your credentials and try again.`,
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
            <div className=' p-4 w-[500px] mx-10 h-auto'>
                <Link href="/" className="default-logo login-logo" aria-label="Powtoon logo">
                    <Image src="https://static.powtoon.co/images/account/authentication/SignupPage_Logo.svg?24.1.2.1" alt="powtoon | The Visual Communication Platform" />
                </Link>
                {/* Add any additional elements to the navbar here */}
            </div>

            <Container
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
                maxWidth={"fit-content"}
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
                    width="35%"
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
                                Log in to Powtoon
                            </Heading>
                            <Text color="fg.muted">
                                New to powtoon? <Link href="/auth/signup" color="#3A57FA">Create an account</Link>
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
                            <Button color="white" onClick={handleLogIn} background="#3A57FA" _hover={{ color: 'white', backgroundColor: '#0000ff' }}>
                                Log in
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
                                Log in to your <Link href="#" color="#3A57FA">Enterprise account</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
                <Box width="50%"  >
                    <Image src='/images/loginLoco.png' alt='Login Logo' height="auto" />
                </Box>

            </Container>
        </div>
    );
};