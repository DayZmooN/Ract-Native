import MonComponent from '@/components/MonComponent';
import Counter from '@/components/Counter';
import { useState } from 'react';
import { Text,View } from 'react-native';

export default function index(){
    const [name,setName]=useState('jean');


    return(
        <View>
        <Text onPress={()=>setName('toto')}>{name}</Text>
        <MonComponent/>
        <Counter/>
        </View>
    );
}