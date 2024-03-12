import { FlatList, StyleSheet, Text, View } from "react-native";
import { useGetMovieByIdQuery } from "../store/redux/api";

export default function MovieDetails() {
    const { data } = useGetMovieByIdQuery();

    console.log(data)


    return (
        <View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.container}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 50,
        padding: 50
    }
});
