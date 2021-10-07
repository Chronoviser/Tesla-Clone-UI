import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    menuItems: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    menuRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    menuTextBox: {
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10
    },
    menuRowTitle: {
        fontSize: 18,
        color: "white",
        textTransform: "uppercase"
    },
    menuRowSubtitle: {
        fontSize: 14,
        color: "grey"
    }
});

export default styles;