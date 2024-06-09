import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import useGoals from "../../Store/goals";
import GoalView from "../../components/Goal";
import GoalModal from "../../components/GoalModal";
import styles from "./styles";

const Goals = () => {
  const objState = useGoals((state: any) => state.goals);

  const KEY_EXTRACTOR = useCallback((item: any, index: number) => {
    const key = item.name + index.toString();
    return key;
  }, []);

  return (
    <View style={styles.container}>
      <GoalModal />
      <FlatList
        data={objState}
        keyExtractor={KEY_EXTRACTOR}
        renderItem={({ item }) => <GoalView goal={item} />}
      />
    </View>
  );
};

export default Goals;
