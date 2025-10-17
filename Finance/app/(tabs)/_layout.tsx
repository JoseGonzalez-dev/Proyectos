import { FontAwesome6, Ionicons, FontAwesome } from "@expo/vector-icons"
import { Tabs } from "expo-router"

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons  name={focused ? "home-outline" : "home"} color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="transactions"
                options={{
                    headerShown: false,
                    tabBarLabel: "Transacciones",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name="list-check" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="categories"
                options={{
                    headerShown: false,
                    tabBarLabel: "Categorias",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="tag" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="winnings"
                options={{
                    headerShown: false,
                    tabBarLabel: "Metas",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="trophy" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    tabBarLabel: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    )
}