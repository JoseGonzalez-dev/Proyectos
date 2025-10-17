import { StyleSheet, Text, View, FlatList, ListRenderItem } from "react-native"
import { useTheme } from "../../../../src/context/themeContext"
import { MaterialIcons } from '@expo/vector-icons'

// Define el tipo para las transacciones
interface Transaccion {
    id: string
    nombre: string
    categoria: string
    monto: number
    icono: keyof typeof MaterialIcons.glyphMap
}

export default function RecentTransaction() {
    const { theme } = useTheme()
    const transacciones: Transaccion[] = [
        {
            id: '1',
            nombre: 'Restaurante La Esquina',
            categoria: 'Comida',
            monto: -50.00,
            icono: 'restaurant',
        },
        {
            id: '2',
            nombre: 'Uber',
            categoria: 'Transporte',
            monto: -25.00,
            icono: 'directions-car',
        },
        {
            id: '3',
            nombre: 'Cine',
            categoria: 'Entretenimiento',
            monto: -30.00,
            icono: 'movie',
        },
    ]

    const renderTransaccion: ListRenderItem<Transaccion> = ({ item }) => (
        <View style={styles.transaccionItem}>
            <View style={styles.iconContainer}>
                <MaterialIcons name={item.icono} size={24} color="#666" />
            </View>
            
            <View style={styles.infoContainer}>
                <Text style={[styles.nombre, { color: theme.colors.textSecondary }]}>{item.nombre}</Text>
                <Text style={[styles.categoria, { color: theme.colors.textTertiary }]}>{item.categoria}</Text>
            </View>
            
            <View style={styles.montoContainer}>
                <Text style={styles.monto}>
                    -${Math.abs(item.monto).toFixed(2)}
                </Text>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: theme.colors.textPrimary }]}>Transacciones recientes</Text>
            
            <FlatList
                data={transacciones}
                renderItem={renderTransaccion}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                style={styles.lista}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        borderRadius: 12,
        marginHorizontal: 16,
        marginTop: 8,
        paddingHorizontal: 16,
        paddingVertical: 20,
        // Quitar height: '100%' para que no ocupe toda la pantalla
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 16,
    },
    lista: {
        maxHeight: 350,
    },
    transaccionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    infoContainer: {
        flex: 1,
    },
    nombre: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginBottom: 2,
    },
    categoria: {
        fontSize: 14,
        color: '#666',
    },
    montoContainer: {
        alignItems: 'flex-end',
    },
    monto: {
        fontSize: 16,
        fontWeight: '600',
        color: '#e74c3c',
    },
})