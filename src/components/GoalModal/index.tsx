import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import useGoals from "../../Store/goals";
import styles from "./styles";

const GoalModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [goalName, setGoalName] = useState<string>("");

  const { goals, setGoals } = useGoals((state: any) => state);

  const AddGoalValue = () => {
    if (goalName.length < 10) {
      setErrorMessage("Goal Must Be Larger Than or Equal 10 Characters");
      return;
    } else {
      setErrorMessage("");
      setGoals({ name: goalName });
      setGoalName("");
      setModalVisible(false);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setErrorMessage("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerBtn}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.title}>Add New Goal</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={require("../../images/goal.png")}
              style={styles.image}
            />

            <TextInput
              style={styles.input}
              onChangeText={(goalText: string) => setGoalName(goalText)}
              value={goalName}
            />
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <View style={styles.actionsBtn}>
              <TouchableOpacity
                style={styles.btnAddStyle}
                onPress={AddGoalValue}
              >
                <Text style={styles.textStyle}>ADD GOAL</Text>
              </TouchableOpacity>
              <Text style={styles.goalsLength}>{goals.length}</Text>
              <TouchableOpacity
                style={styles.btnCancelStyle}
                onPress={closeModal}
              >
                <Text style={styles.textStyle}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default GoalModal;
