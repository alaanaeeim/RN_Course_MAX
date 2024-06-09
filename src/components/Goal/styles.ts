import {
    Dimensions,
    StyleSheet,
} from "react-native";

import COLORS from "../../utils/Colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 12,
    },
    goalStyle: {
        backgroundColor: COLORS.primary,
        justifyContent: "space-between",
        flexDirection: "row",
        width: width * 0.8,
        borderRadius: 5,
        padding: 8,
    },
    title: {
        color: COLORS.white,
        fontWeight: "500",
        fontSize: 14,
    },
    iconStyle: {
        color: COLORS.error,
        fontSize: 18,
    },
});

export default styles