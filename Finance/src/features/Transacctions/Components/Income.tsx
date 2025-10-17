import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../context/themeContext"

export default function Income() {
    const { theme } = useTheme()
    return (
        <View style={[styles.container]}>
            <Text style={[styles.title, { color: theme.colors.textPrimary}]}>Ingresos</Text>
            <View style={[styles.card, { 
                borderColor: theme.colors.border,
                backgroundColor: theme.colors.card 
            }]}>
                {/* IMG */}
                <View>
                    <Text>Salario</Text>
                    <Text>Mensual</Text>
                </View>
                <Text style={styles.amount}>+ Q 3,800.00</Text>
            </View>
            <View style={[styles.card, { 
                borderColor: theme.colors.border,
                backgroundColor: theme.colors.card 
            }]}>
                {/* IMG */}
                <View>
                    <Text>Salario</Text>
                    <Text>Mensual</Text>
                </View>
                <Text style={styles.amount}>+ Q 3,800.00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        marginBottom: 16,
        gap: 16,
    },
    title: {
        fontSize: 25,
        fontWeight: '600',
        color: '#333',
        marginBottom: 16,
        paddingLeft: 16,
    },
    amount: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#059669', // Green color for income
    },
    card: {
        flex: 1,
        marginHorizontal: 4,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
})