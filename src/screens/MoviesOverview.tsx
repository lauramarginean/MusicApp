import { FlatList, Text, View } from "react-native";
import { useGetMoviesQuery } from "../store/redux/api";

export default function MovieList() {
    const {data} = useGetMoviesQuery();

    console.log(data)

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item}</Text>
                    </View>
                )}
            />
        </View>
    )
}