import { FlatList, StyleSheet, Text, View } from "react-native";
import { useGetMoviesQuery } from "../store/redux/api";

export default function MovieList() {
    const {data} = useGetMoviesQuery();

    console.log(data)


    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.results.id}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.container}>{item.results.title}</Text>
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
