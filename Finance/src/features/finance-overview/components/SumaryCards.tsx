import { StyleSheet, Text, View } from "react-native"
import { useTheme } from "../../../context/themeContext"

export default function SumaryCards() {
    const { theme } = useTheme()

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={[styles.card, { 
                borderColor: theme.colors.border,
                backgroundColor: theme.colors.card 
            }]}>
                <Text style={[styles.title, { color: theme.colors.textSecondary }]}>Ingresos</Text>
                <Text style={[styles.income, { color: theme.colors.income }]}>Q 3,800.00</Text>
            </View>

            <View style={[styles.card, { 
                borderColor: theme.colors.border,
                backgroundColor: theme.colors.card 
            }]}>
                <Text style={[styles.title, { color: theme.colors.textSecondary }]}>Gastos</Text>
                <Text style={[styles.expenses, { color: theme.colors.expense }]}>Q 3,800.00</Text>
            </View>

            <View style={[styles.card, { 
                borderColor: theme.colors.border,
                backgroundColor: theme.colors.card 
            }]}>
                <Text style={[styles.title, { color: theme.colors.textSecondary }]}>Saldo</Text>
                <Text style={[styles.balance, { color: theme.colors.balance }]}>Q 3,800.00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 16,
        height: 350,
        gap: 16,
    },
    card: {
        flex: 1,
        marginHorizontal: 4,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
    title: { 
        fontSize: 16, 
    },
    income: { 
        fontSize: 25, 
        fontWeight: 'bold', 
        marginTop: 4,
    },
    expenses: {
        fontSize: 25, 
        fontWeight: 'bold', 
        marginTop: 4,
    },
    balance: {
        fontSize: 25, 
        fontWeight: 'bold', 
        marginTop: 4,
    }
})