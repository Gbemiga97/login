import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {

  const navigation = useNavigation()

  return (
    <LinearGradient
    colors={['rgba(58, 131, 244,0.9)', 'rgba(9, 181, 211, 0.6)']}
    style={tw`w-full flex-1 overflow-hidden`}
    >
        <SafeAreaView style={tw`flex`}>
            <View style={tw`flex-row justify-start my-4`}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={tw`bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4`}
                >
                    <ArrowLeftIcon size="20" color="black" />
                </TouchableOpacity>
            </View>
            <View style={tw`flex-row justify-center mr-10`}>
              <Image source={require('../assets/images/3D-3.png')} style={{width: 200, height: 200}} />
            </View>
        </SafeAreaView>
        {/* Login Form */}
        <View style={tw`bg-white flex-1 px-8 pt-8 rounded-tr-[50px] rounded-tl-[50px]`}>
          <View style={tw`form gap-y-2`}>
          <Text style={tw`text-gray-700 ml-4`}>Your Full Name</Text>
            <TextInput style={tw`bg-gray-100 text-gray-700 rounded-2xl p-4 mb-3`} 
            value='John Snow'
            placeholder='Enter Email'
            />
            <Text style={tw`text-gray-700 ml-4`}>Email Address</Text>
            <TextInput style={tw`bg-gray-100 text-gray-700 rounded-2xl p-4 mb-3`} 
            value='johndoe@gmail.com'
            placeholder='Enter Email'
            />
            <Text style={tw`text-gray-700 ml-4`}>Password</Text>
             <TextInput style={tw`bg-gray-100 text-gray-700 rounded-2xl p-4  mb-7`} 
            value='text1234'
            placeholder='Enter Password'
            secureTextEntry
            />
            <TouchableOpacity style={tw`bg-yellow-400 rounded-xl py-3`}>
              <Text style={tw`text-center text-gray-700 font-bold text-xl`}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={tw`text-xl text-gray-700 text-center font-bold py-5`}>
            Or
          </Text>
          <View style={tw`flex-row justify-center gap-x-12`}>
            <TouchableOpacity style={tw`bg-gray-100 rounded-2xl p-2`}>
              <Image source={require('../assets/images/google.png')} style={tw`w-10 h-10`} />
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-gray-100 rounded-2xl p-2`}>
              <Image source={require('../assets/images/apple.png')} style={tw`w-10 h-10`} />
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-gray-100 rounded-2xl p-2`}>
              <Image source={require('../assets/images/facebook.png')} style={tw`w-10 h-10`} />
            </TouchableOpacity>
          </View>
          <View style={tw`flex-row justify-center gap-x-1 mt-7`}>
                            <Text style={tw`text-gray-500 font-semibold`}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                                <Text style={tw`font-semibold text-yellow-500`}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
        </View>
    </LinearGradient>
      
  )
}