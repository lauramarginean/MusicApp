import {
    Box, FlatList,
    Heading,
    RefreshControl,
    Spinner
} from "@gluestack-ui/themed";
import { useGetMoviesQuery, Movie } from "../store/redux/api";
import MovieItem from "../components/MovieItem";
import { useState } from "react";

export default function MovieList() {

    const { data, isLoading, isError } = useGetMoviesQuery();
    const [refreshing, setRefreshing] = useState(false)
    if (!data) { return null }

    if (isError) {
        console.log("error")
    }

    if (isLoading) {
        return <Spinner size="large" />
    }

    const handleRefresh = () => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 1000)
    }

    function renderProductsItem(itemData: { item: Movie }) {
        return (
            <MovieItem id={itemData.item.id} original_title={itemData.item.original_title}
                popularity={itemData.item.popularity}
                release_date={itemData.item.release_date}
                backdrop_path={itemData.item.backdrop_path} />
        );
    }

    return (

        <Box m='$2' >
            <Heading size="xl" p="$3" pb="$2">
                Popular Movies
            </Heading>
            <FlatList
                data={data.results}
                renderItem={renderProductsItem}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                }
            />
        </Box>
    )
}
