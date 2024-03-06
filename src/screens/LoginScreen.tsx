import {  Button, StyleSheet, TextInput, View } from "react-native"
import { useDispatch } from "react-redux";
import { Controller, useForm } from 'react-hook-form'
import { authenticate } from "../store/redux/authSlice";
import { Text, InputField, GluestackUIStyledProvider, ButtonText, GluestackUIProvider } from "@gluestack-ui/themed"
import { Input, FlatList } from '@gluestack-ui/themed';

function LoginScreen() {

    const predefinedUsername = 'admin';
    const predefinedPasswoar = 'pass';



    const dispatch = useDispatch();
    const { control, handleSubmit } = useForm();

    const onSubmit = () => {

        dispatch(authenticate());
    }


    return (
        <View>
            {/* <GluestackUIProvider >
                <Button>
                    <ButtonText>Hello World</ButtonText>
                </Button>
            </GluestackUIProvider> */}
            <Text>login</Text>
            <Input
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
            >
                <InputField placeholder="Enter Text here" />
            </Input>

            <Controller
                name="username"
                defaultValue=""
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                    <TextInput
                        placeholder="Username"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            <Controller
                name="password"
                defaultValue=""
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                    <TextInput
                        placeholder="Password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />

            <Button title="Login"
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        margin: 50,
        padding: 50
    }
});
