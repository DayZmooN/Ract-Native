import MonComponent from '@/components/MonComponent';
import Counter from '@/components/Counter';
import ListNames from '@/components/ListNames';
import { useState } from 'react';
import { Text,View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Link } from "expo-router";

export default function index(){
    const [name,setName]=useState('jean');
const [list, seyList]=useState([0,1,2,3]);

function addList()
{
    setList([...list,4]);

    // faire 
    
    //un nouveuatableau pour la destructuration
}
    return(
        <View>
        <Text onPress={()=>setName('toto')}>{name}</Text>

        <TextInput value={name}  onChange={(event)=>setName(event.nativeEvent.text)}/>

           {list.map((item,index)=>
            <Text key={index}>{item}</Text>)}
        <MonComponent message={'hello'}/>


        <Counter/>        
        <Link href="/list">Go to List Screen</Link>
        <Link href="/dog">View Dogs</Link>


        </View>
    );
}