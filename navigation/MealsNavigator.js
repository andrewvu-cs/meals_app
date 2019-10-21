import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator  } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs'

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories"
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetails: {
      screen: MealDetailsScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
  }
);

// Created a tab navigator
const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator,
  Favorites: FavoritesScreen
});

// passed tab navigator b/c our MealsNavigatorStack is included within the tab navigator
export default createAppContainer(MealsFavTabNavigator);
