import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import tw from 'twrnc'


export default function WelcomeScreen() {


    const navigation = useNavigation()

  return (
    <LinearGradient
    colors={['rgba(58, 131, 244,0.9)', 'rgba(9, 181, 211, 0.6)']}
    style={tw`w-full flex-1`}
    >
        <SafeAreaView style={tw`flex-1`}>
            <View style={tw`flex-1 flex justify-around my-4`}>
                 <Text style={tw`text-white font-bold text-4xl text-center`}>
                    Let's Get Started!
                    </Text>
                    <View style={tw`flex-row justify-center`}>
                    <Image source={require("../assets/images/3D-1.png")} style={{width: 350, height: 300}} />
                    </View>
                    <View style={tw`gap-y-4`}>
                        {/* sign up button */}
                        <TouchableOpacity style={tw`py-3 bg-yellow-400 mx-7 rounded-xl`}
                        onPress={() => navigation.navigate('SignUp')}
                        >
                            <Text style={tw`text-xl font-bold text-center text-gray-700`}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                        <View style={tw`flex-row justify-center gap-x-1`}>
                            <Text style={tw`text-white font-semibold`}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                <Text style={tw`font-semibold text-yellow-400`}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        </SafeAreaView>
    </LinearGradient>

  )
}