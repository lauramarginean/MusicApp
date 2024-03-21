import { useNavigation } from "@react-navigation/native";
import { HStack, Text, VStack, Pressable, Image } from "@gluestack-ui/themed";
import { MovieDetailScreenProps } from "../screens/MovieDetails";

interface MovieItemsProps {
  id: number;
  original_title: string;
  popularity: number;
  release_date: string;
  backdrop_path: string
}

function MovieItem({ id, original_title, popularity, release_date, backdrop_path }: MovieItemsProps) {

  const navigation = useNavigation<MovieDetailScreenProps['navigation']>();

  function selectMovie() {
    navigation.navigate('MovieDetails', {
      movieId: id
    });
  }

  return (
    <Pressable
      onPress={selectMovie}
      borderBottomWidth="$1"
      borderColor="$trueGray800"
      $base-pl={0}
      $base-pr={0}
      $sm-pl="$4"
      $sm-pr="$5"
      py="$2"

    >
      <HStack space="md" >
        <Image
          alt="Movie List Image"
          size="lg"
          borderRadius="$2xl"
          source={{
            uri: 'https://image.tmdb.org/t/p/w1280/' + backdrop_path,
          }}
        />
        <VStack space="md">
          <Text
            color="$coolGray800"
            fontWeight="$bold"
          >
            {original_title}
          </Text>
          <Text color="$coolGray600" >
            Popularity: {popularity}
          </Text>
          <Text
            fontSize="$xs"
            color="$coolGray800"
            alignSelf="flex-start"
          >
            Release date: {release_date}
          </Text>
        </VStack>

      </HStack>
    </Pressable>
  )
}

export default MovieItem