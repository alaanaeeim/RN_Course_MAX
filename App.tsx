import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import Goals from "./src/screens/GoalsScreens";
import COLORS from "./src/utils/Colors";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Goals />
    </View>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (StatusBar.currentHeight || 0) + 50,
    backgroundColor: COLORS.primaryDark
  }
})