import React from "react";
import { Button, Alert } from "react-native";
import axios from 'axios';
import { Dog } from "@/entities";

interface Props {
    id: number;  // Le composant attend un ID en prop comme nombre
    onDelete: (id: number) => void;  // Callback après suppression pour informer le parent
}

export default function Delete({ id, onDelete }: Props) {

    const handleDelete = async () => {
        try {
            // Suppression de l'élément via l'API en utilisant l'ID
            await axios.delete(`/api/dogs/${id}`);
            
            // Appel de la fonction de rappel pour informer le composant parent
            onDelete(id);

            Alert.alert("Success", "The item has been deleted.");
        } catch (error) {
            Alert.alert("Error", "Failed to delete the item.");
            console.error("Error deleting item:", error);
        }
    }

    return (
        <Button 
            title="Delete"
            onPress={handleDelete}  // Déclenche la suppression lors du clic
        />
    );
}
