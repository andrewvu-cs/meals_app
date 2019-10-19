// Screen holds the nationality of food
import React from "react";
import { View, Text, StyleSheet, Button, Platform} from "react-native";

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = props => {
  const catID = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catID);

  return (
    <View style={styles.screen}>
      <Text>The CategoyMealsScreen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="GO to MEAL DETAILS" onPress={()=>{
        props.navigation.navigate('MealDetails')
      }}/>
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
