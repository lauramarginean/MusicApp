import { Alert, Button, StyleSheet, TextInput, View } from "react-native"
import { useDispatch } from "react-redux";
import { Controller, useForm } from 'react-hook-form'
import { authenticate } from "../store/redux/authSlice";
import { Text, InputField, GluestackUIStyledProvider, ButtonText, GluestackUIProvider } from "@gluestack-ui/themed"
import { Input, FlatList } from '@gluestack-ui/themed';

function LoginScreen() {

    const predefinedUsername = 'Admin';
    const predefinedPasswoar = 'Pass';



    const dispatch = useDispatch();
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: { username: string; password: string }) => {
        if (data.username === predefinedUsername && data.password === predefinedPasswoar) {
            dispatch(authenticate());
        } else {
            Alert.alert('Error', 'Incorrect user or password')
        }

    }


    return (
        <View>
            <Text>login</Text>            

            <Controller
                name="username"
                defaultValue=""
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                    <Input
                        variant="outline"
                        size="md"
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
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                        <InputField placeholder="Password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}/>
                    </Input>
                  
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
