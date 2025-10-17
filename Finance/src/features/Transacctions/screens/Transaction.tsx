import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../../context/themeContext";
import Income from "../Components/Income";
import Expenses from "../Components/Expenses";

export default function Transaction() {
    const { theme } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.textPrimary}]}>Transacciones Recurrentes</Text> 
            <Income />
            <Expenses />
            {/* New */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {        
        flex: 1,
        paddingTop: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        marginTop: 16,
    }
})