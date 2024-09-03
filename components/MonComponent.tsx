import { Text } from 'react-native';
import { useState } from 'react';

/*
Les composant react ne son pas conventioner en pascalCase
le nom du composant doit etre pareil que la function 
pour pouvoir etre afficher
*/

export default function MonComponent(){
    const [name,setName]=useState('hello world');
return(
        <Text>{name}</Text>

)

}