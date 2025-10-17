import { useState } from "react"
import { View, Text, Modal, Pressable, FlatList, StyleSheet } from "react-native"
import { useTheme } from "../../../context/themeContext"
import { Ionicons } from '@expo/vector-icons'

export default function MonthSelector() {
    const { theme } = useTheme()
    
    // Función para obtener el mes actual
    const getCurrentMonth = () => {
        const months = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ]
        const currentDate = new Date()
        return months[currentDate.getMonth()]
    }

    const [modalVisible, setModalVisible] = useState(false)
    const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth()) // Usar mes actual

    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ]

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>

            <View style={styles.monthContainer}>
                <Text style={[styles.monthTitle, { color: theme.colors.textPrimary }]}>
                    {selectedMonth}
                </Text>
                <Pressable
                    onPress={() => setModalVisible(true)}
                    style={[styles.monthSelector, { backgroundColor: theme.colors.surface }]}
                >
                    <Text style={[styles.monthSelectorText, { color: theme.colors.textSecondary }]}>
                        Mes actual
                    </Text>
                    <Ionicons 
                        name="chevron-down" 
                        size={16} 
                        color={theme.colors.textSecondary} 
                    />
                </Pressable>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={[styles.modalContent, { backgroundColor: theme.colors.card }]}>
                        <FlatList
                            data={months}
                            renderItem={({item}) => (
                                <Pressable
                                    onPress={() => {
                                        setSelectedMonth(item)
                                        setModalVisible(false)
                                    }}
                                    style={[styles.monthItem, { borderBottomColor: theme.colors.border }]}
                                >
                                    <Text style={[styles.monthItemText, { color: theme.colors.textPrimary }]}>
                                        {item}
                                    </Text>
                                </Pressable>
                            )}
                            keyExtractor={item => item}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    addButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#666',
    },
    monthContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    monthTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    monthSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: '#f8f8f8',
    },
    monthSelectorText: {
        fontSize: 14,
        marginRight: 4,
        color: '#666',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: '50%',
    },
    monthItem: {
        padding: 15,
        borderBottomWidth: 1,
    },
    monthItemText: {
        textAlign: 'center',
        fontSize: 16,
    },
})