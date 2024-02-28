import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'

export default function LoginScreen() {
  return (
    <LinearGradient
    colors={['rgba(58, 131, 244,0.9)', 'rgba(9, 181, 211, 0.6)']}
    style={tw`w-full flex-1`}
    >
        <SafeAreaView style={tw`flex`}>
            <View style={tw`flex-row justify-start my-4`}>
                <TouchableOpacity
                style={tw`bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4`}
                >
                    <ArrowLeftIcon size="20" color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </LinearGradient>
      
  )
}