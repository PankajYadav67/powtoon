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
    Text,
} from '@chakra-ui/react'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import { PasswordField } from './PasswordField'

export const Login = () => (
    <Container
        maxW="lg"
        py={{
            base: '12',
            md: '24',
        }}
        px={{
            base: '0',
            sm: '8',
        }}
    >
        <a href="/home" className="default-logo login-logo" aria-label="Powtoon logo">
            <img src="https://static.powtoon.co/images/account/authentication/SignupPage_Logo.svg?24.1.2.1" alt="powtoon | The Visual Communication Platform"/>
        </a>
        <Stack spacing="8">

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
                        <Text color="fg.muted" >
                            new to powtoon ?  <Link href="#" color="#3A57FA" >Create an account</Link>
                        </Text>
                    </Stack>
                    <Stack spacing="5">
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input id="email" type="email" />
                        </FormControl>
                        <PasswordField />
                    </Stack>
                    <HStack justify="space-between">
                        <Checkbox defaultChecked>Remember me</Checkbox>
                        <Button variant="text" size="sm">
                            Forgot password?
                        </Button>
                    </HStack>
                    <Stack spacing="6">
                        <Button color="white" background="#3A57FA" _hover={{ color: 'white', backgroundColor: '#0000ff' }}>Log in</Button>
                        <HStack>
                            <Divider />
                            <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                                or continue with
                            </Text>
                            <Divider />
                        </HStack>
                        <OAuthButtonGroup />
                        <Text>
                            Log in to your    <Link href="#" color="#3A57FA">Enterprise account</Link>
                        </Text>
                    </Stack>

                </Stack>
            </Box>
        </Stack>
    </Container>
)