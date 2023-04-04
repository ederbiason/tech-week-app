import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 bg-zinc-900 items-center justify-center">
      <Text className="text-4xl font-bold text-white">Hello world!</Text>
      <StatusBar style="light" />
    </View>
  )
}