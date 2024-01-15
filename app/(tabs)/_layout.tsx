import { Tabs } from "expo-router"
import Colors from "@/constants/Colors"
import { Octicons, Feather } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.primary[0],
      tabBarLabelStyle: {
        fontFamily: 'mon-sb',
      }
    }}>
      <Tabs.Screen 
        name='Main'
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: ({ color, size }) =>
          <Octicons name="home" size={size} color={color} />
        }}
      />
      <Tabs.Screen 
        name='Favourites'
        options={{
          tabBarLabel: 'Избранное',
          tabBarIcon: ({ color, size }) =>
          <Octicons name="heart" size={size} color={color} />
        }}
      />
        <Tabs.Screen 
        name='AddAdvertisement'
        options={{
          tabBarLabel: 'Добавить',
          tabBarIcon: ({ color, size }) =>
          <Octicons name="plus-circle" size={size} color={color} />
        }}
      />
      <Tabs.Screen 
        name='Messages'
        options={{
          tabBarLabel: 'Сообщения',
          tabBarIcon: ({ color, size }) =>
          <Feather name="message-circle" size={size} color={color} />
        }}
      />
        <Tabs.Screen 
        name='Profile'
        options={{
          tabBarLabel: 'Профиль',
          tabBarIcon: ({ color, size }) =>
          <Feather name="user" size={size} color={color} />
        }}
      />
    </Tabs>
  )
}

export default Layout
