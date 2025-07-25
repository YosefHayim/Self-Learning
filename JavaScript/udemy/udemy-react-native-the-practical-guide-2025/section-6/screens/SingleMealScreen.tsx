import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";
import SubTitle from "../components/SubTitle";
import List from "../components/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

const SingleMealScreen: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const handlerHeaderButton = () => {
    console.log("pressed");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={handlerHeaderButton} color="white" size={24} name={"star"} />;
      },
    });
  }, [navigation]);

  if (!selectedMeal) return;

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealsDetails
        affordability={selectedMeal?.affordability}
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        textStyle={styles.detailStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal?.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleMealScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },
  image: {
    flex: 350,
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    color: "white",
  },
  detailStyle: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
