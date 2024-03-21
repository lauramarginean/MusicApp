
import { useDispatch } from "react-redux";
import { logout } from "../store/redux/authSlice";
import { Box, Button, ButtonText, Text } from "@gluestack-ui/themed";

function ProfileScreen() {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <Box alignItems="center">
            <Text
                size={'lg'}
                bold={true}>
                Profile Screen
            </Text>
            <Button
                m='$2'
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={handleLogout}>
                <ButtonText>Logout </ButtonText>
            </Button>
        </Box>

    )
}

export default ProfileScreen
