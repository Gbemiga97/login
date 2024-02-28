import { LinearGradient } from 'expo-linear-gradient'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'


export default function WelcomeScreen() {
  return (
    <LinearGradient
    colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']}
    style={tw`w-full flex-1`}
    >
        <SafeAreaView style={tw`flex-1`}>
            <View style={tw`flex-1 flex justify-around my-4`}>
                 <Text>Let's Get Started!</Text>
            </View>
        </SafeAreaView>
    </LinearGradient>

  )
}