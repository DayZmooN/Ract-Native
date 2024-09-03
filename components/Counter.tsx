import { Button, Text,View } from 'react-native';
import { useState } from 'react';

export default function Counter(){
const [count,setCount] = useState(0);

function add(){
     setCount(count+1);
     

}

function negative(){
    setCount(count-1);
}
return (
    <View>
      <Button title='-'  onPress={negative} ></Button>
      <Text >{count}</Text>
      <Button title='+' onPress={add} ></Button>
    </View>
  );
}