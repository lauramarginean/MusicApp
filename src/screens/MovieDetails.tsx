import { useGetMovieByIdQuery } from "../store/redux/api";
import { Box, Button, ButtonText, Image, Spinner, Text, VStack } from "@gluestack-ui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFavorites, selectFavoritesIds } from "../store/redux/favorites";

export type MovieDetailScreenProps = NativeStackScreenProps<
    RootStackParamList,
    'MovieDetails'
>;

export default function MovieDetails({ route }: MovieDetailScreenProps) {

    const favoriteMovieIds = useSelector(selectFavoritesIds)
    const dispatch = useDispatch()

    const { movieId } = route.params

    const { data, isLoading, isError } = useGetMovieByIdQuery(movieId);

    const movieIsFavorite = favoriteMovieIds.includes(movieId)

    function changeFavoritesStatusHandler() {
        if ( movieIsFavorite){
            dispatch(removeFavorites({id: movieId}))
            console.log("removed "+movieId)
        } else {
            dispatch(addFavorites({id: movieId}))
            console.log("added "+movieId)
        }
    }

    if (!data) { return null }
    console.log(isLoading)

    if (isError) {
        console.log("error")
    }

    if (isLoading) {
        return <Spinner size="large" />
    }

    return (
        <Box alignItems="center" m='$2'>

            <VStack space="md" >
                <Image
                    alt="Movie Image"
                    alignSelf="center"
                    size="2xl"
                    borderRadius="$2xl"
                    source={{
                        uri: 'https://image.tmdb.org/t/p/w1280/' + data.backdrop_path,
                    }}
                />

                <Text
                    color="$coolGray800"
                    fontWeight="$bold"
                    alignSelf="flex-start"
                >
                    {data.original_title}
                </Text>
                <Text
                    fontSize="$xs"
                    color="$coolGray800"
                    alignSelf="flex-start"
                >
                    Release date: {data.release_date}
                </Text>
                <Text color="$coolGray600" $dark-color="$warmGray200">
                    {data.tagline}
                </Text>

                <Text
                    fontSize="$xs"
                    color="$coolGray800"
                    alignSelf="flex-start"
                >
                    {data.overview}
                </Text>
                <Text
                    fontSize="$xs"
                    color="$coolGray600" >
                    Popularity: {data.popularity}
                </Text>
                <Button
                m='$2'
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={changeFavoritesStatusHandler}
                >
                <ButtonText>{movieIsFavorite ? "Remove from favorites list" : "Add to favorites list"} </ButtonText>
            </Button>
            </VStack>

        </Box>
    )
}

