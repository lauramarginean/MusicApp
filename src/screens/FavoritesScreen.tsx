import { useSelector } from "react-redux";
import { selectFavoritesIds } from "../store/redux/favorites";
import { Box, Text } from "@gluestack-ui/themed";

function FavoritesScreen() {
  const favoriteMovieIds = useSelector(selectFavoritesIds)

  return (
    <Box>
      <Text
        size={'lg'}
        bold={true}>
        {favoriteMovieIds}
      </Text>
    </Box>
  )

}

export default FavoritesScreen