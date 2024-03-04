import { Button, StyleSheet, Text, View } from "react-native"
import { useDispatch } from "react-redux";
import { logout } from "../store/redux/authSlice";
import { store } from "../store/redux/store";

function ProfileScreen() {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <View>
            <Text>Profile Screen</Text>
            <Button title="Logout" onPress={handleLogout}/>
    
        </View>
        
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        margin: 50,
        padding: 50
    }
});
