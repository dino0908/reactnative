import { NativeBaseProvider, Input, Progress, HStack, Button } from "native-base";
import { SafeAreaView, Text } from "react-native";

export default function Index() {
  return (
    <NativeBaseProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            marginTop: 20,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          To Do App
        </Text>
        <HStack space={3} justifyContent="center" marginTop={5}>
        <Input placeholder="Input" w="60%"  height={"40px"}/>
        <Button height={"40px"} onPress={() => console.log("hello world")}>Click Me</Button>
        </HStack>
        
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
