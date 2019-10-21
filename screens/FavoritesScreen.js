// Screen holds the nationality of food
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.meals);

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorites"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    )
  };
};

export default FavoritesScreen;
