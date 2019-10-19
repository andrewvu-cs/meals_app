// Screen holds the nationality of food
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The CategoyMealsScreen!</Text>
      <Button title="GO to MEAL DETAILS" onPress={()=>{
        props.navigation.navigate('MealDetails')
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
