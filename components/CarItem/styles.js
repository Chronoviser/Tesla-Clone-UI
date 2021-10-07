import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: "100%"
    },
    header: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "yellow"
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "fixed"
    },
    batterySection: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    batteryImage: {
        height: 26,
        width: 70,
        marginRight: 12
    },
    batteryText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    status: {
        alignItems: "center"
    },
    statusText: {
        fontSize: 19,
        fontWeight: "bold",
        color: "white"
    },
    controls: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 175
    },
    controlsButton: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
        padding: 15
    }
});

export default styles;