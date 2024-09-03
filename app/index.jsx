import { useState } from 'react';
import { Text } from 'react-native';

export default function index(){
    const [name,setName]=useState('jean');

    return(
        <Text onPress={()=>setName('toto')}>{name}</Text>
    );
}