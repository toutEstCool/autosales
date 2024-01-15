import { Link } from "expo-router"
import { View, Text } from "react-native"

const Main = () => {
  return (
    <View>
      <Text>Главная</Text>
      <Link href={'/(modals)/login'}>Login</Link>
      <Link href={'/(modals)/booking'}>Bokkings</Link>
      <Link href={'/listing/1234'}>Details Page</Link>
    </View>
  )
}

export default Main
