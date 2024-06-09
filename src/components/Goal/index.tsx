import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import { Goal } from "../../types";
import useGoals from "../../Store/goals";
import styles from "./styles";

interface IGoal {
  goal: Goal;
}

const GoalView = ({ goal }: IGoal) => {
  const objState = useGoals((state: any) => state);
  return (
    <View style={styles.container}>
      <View style={styles.goalStyle}>
        <Text style={styles.title}>{goal?.name || ""}</Text>
        <TouchableOpacity onPress={() => objState?.removeGoal(goal)}>
          <FeatherIcon name="trash" style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoalView;
