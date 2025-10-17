import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/themeContext";
import SumaryCards from "../components/SumaryCards";
import MonthSelector from "../components/MonthSelector";
import RecentTransaction from "../components/RecentTransaction";
import ThemeToggleButton from "../components/TogglePrueba";

export default function HomePage() {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.title, { color: theme.colors.textPrimary }]}>Resumen</Text>
            {/* <Text style={[styles.title, { color: theme.colors.textPrimary }]}>Foto</Text> */}
            <MonthSelector />
            <ThemeToggleButton />
            <SumaryCards />
            <RecentTransaction />
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