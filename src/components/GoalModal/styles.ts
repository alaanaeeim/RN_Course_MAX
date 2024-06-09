
import {
    StyleSheet,
    Dimensions,
} from "react-native";

import COLORS from "../../utils/Colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    openButtonText: {
        fontSize: 18,
        color: "blue",
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalView: {
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        height: height,
        width: width,
        padding: 35,
    },
    modalText: {
        textAlign: "center",
        marginBottom: 15,
    },
    closeButton: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        elevation: 2,
        padding: 10,
    },
    textStyle: {
        textAlign: "center",
        fontWeight: "500",
        color: "white",
        fontSize: 14,
    },
    containerBtn: {
        justifyContent: "center",
        alignItems: "center",
    },
    btnAddStyle: {
        backgroundColor: COLORS.primaryDark,
        justifyContent: "center",
        alignItems: "center",
        width: width * 0.3,
        marginRight: 15,
        borderRadius: 5,
        height: 30,
    },
    btnCancelStyle: {
        backgroundColor: COLORS.primaryLight,
        justifyContent: "center",
        alignItems: "center",
        width: width * 0.3,
        borderRadius: 5,
        marginLeft: 15,
        height: 30,
    },
    image: {
        marginBottom: 15,
        height: 100,
        width: 100,
    },
    input: {
        borderColor: COLORS.white,
        paddingHorizontal: 10,
        color: COLORS.white,
        paddingVertical: 5,
        width: width * 0.9,
        fontWeight: 600,
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 16,
        height: 40,
    },
    actionsBtn: {
        flexDirection: "row",
        marginTop: 25,
    },
    btnStyle: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        width: width * 0.8,
        marginVertical: 15,
        borderRadius: 5,
        borderWidth: 1,
        height: 30,
    },
    title: {
        color: COLORS.white,
        fontSize: 16,
    },
    errorMessage: {
        color: COLORS.error,
        fontWeight: "400",
        fontSize: 14,
    },
    goalsLength: {
        color: COLORS.white,
        marginTop: 5,
        fontSize: 15,
    },
});

export default styles