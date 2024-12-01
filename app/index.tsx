import { NativeBaseProvider, Input, HStack, Button, VStack, Text } from "native-base";
import { SafeAreaView } from "react-native";
import { useState } from "react";


export default function Index() {

  const [tasks, setTasks] = useState<string[]>([])
  const [taskInput, setTaskInput] = useState<string>("")

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput("")
    }
  }
  return (
    <NativeBaseProvider>
      <SafeAreaView
      >
        <Text
        fontSize="2xl"
        bold
        textAlign="center"
        marginTop={5}
        >
          To Do App
        </Text>
        <HStack space={3} justifyContent="center" marginTop={5}>
        <Input placeholder="Enter task name" w="60%"  height={"40px"} value={taskInput} onChangeText={(text) => setTaskInput(text)}/>
        <Button height={"40px"} onPress={addTask}>Add</Button>
        </HStack>

        <VStack space={3} alignItems="center" marginTop={10}>
          {tasks.map((task, index) => (
            <Text key={index} fontSize={18}>{task}</Text>
          ))}
        </VStack>
      </SafeAreaView>
    </NativeBaseProvider>
  );

}
