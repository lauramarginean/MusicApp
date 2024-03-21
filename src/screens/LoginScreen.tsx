import { useDispatch } from "react-redux";
import { Controller, useForm } from 'react-hook-form'
import { authenticate } from "../store/redux/authSlice";
import { Text, InputField, ButtonText, 
    Box, InfoIcon, 
    Button, AlertDialog, AlertDialogBackdrop, AlertDialogHeader, 
    AlertDialogContent, HStack, Icon, Heading, AlertDialogBody, AlertDialogFooter, 
    InputSlot, InputIcon, EyeIcon, EyeOffIcon, } from "@gluestack-ui/themed"
import { Input } from '@gluestack-ui/themed';
import React, { useState } from "react";

function LoginScreen() {

    const predefinedUsername = 'Admin';
    const predefinedPasswoar = 'Pass';

    const dispatch = useDispatch();
    const { control, handleSubmit } = useForm();
    const [showAlertDialog, setShowAlertDialog] = React.useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const handleState = () => {
        setShowPassword((showState) => {
          return !showState
        })
      }

    const onSubmit = (data: { username: string; password: string }) => {
        if (data.username === predefinedUsername && data.password === predefinedPasswoar) {
            dispatch(authenticate());
        } else {
            setShowAlertDialog(true)
            console.log(showAlertDialog)
        }
    }

    return (

        <Box alignItems="center">
            <Text
                size={'lg'}
                bold={true}>
                Login
            </Text>

            <Controller
                name="username"
                defaultValue=""
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                    <Input
                        variant="outline"
                        size="md"
                        m='$2'
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                        <InputField placeholder="Username"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value} />
                    </Input>

                )}
            />
            <Controller
                name="password"
                defaultValue=""
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                    <Input
                        variant="outline"
                        size="md"
                        m='$2'
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                        <InputField
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value} />
                        <InputSlot pr="$3" onPress={handleState}>
                            <InputIcon
                                as={showPassword ? EyeIcon : EyeOffIcon}
                                color="$darkBlue500"
                            />
                        </InputSlot>
                    </Input>

                )}
            />

            <Button
                m='$2'
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={handleSubmit(onSubmit)}>
                <ButtonText>Login </ButtonText>
            </Button>
            <AlertDialog
                isOpen={showAlertDialog}
                onClose={() => {
                    setShowAlertDialog(false)
                }}
            >
                <AlertDialogBackdrop />
                <AlertDialogContent>
                    <AlertDialogHeader borderBottomWidth="$0">
                        <HStack space="sm" alignItems="center">
                            <Icon
                                as={InfoIcon}
                                color="$error"
                                $dark-color="$error"
                            />
                            <Heading size="lg">Error</Heading>
                        </HStack>
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        <Text size="sm">
                            Incorrect username or password
                        </Text>
                    </AlertDialogBody>
                    <AlertDialogFooter borderTopWidth="$0">
                        <Button
                            variant="outline"
                            size="sm"
                            action="secondary"
                            mr="$3"
                            onPress={() => {
                                setShowAlertDialog(false)
                            }}
                        >
                            <ButtonText>Cancel</ButtonText>
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Box>
    )
}

export default LoginScreen
