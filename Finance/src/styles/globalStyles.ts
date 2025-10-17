import { StyleSheet } from "react-native"
import { Theme } from "../types/theme"

export const createStyles = (theme: Theme) => StyleSheet.create({
    screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 16,
  },
  card: {
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  // Layouts comunes
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Typography
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  body: {
    fontSize: 16,
    color: theme.colors.textSecondary,
  },
  caption: {
    fontSize: 14,
    color: theme.colors.textTertiary,
  },
  
  // Amounts (específicos de tu app financiera)
  incomeAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.income,
  },
  expenseAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.expense,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.balance,
  }
})