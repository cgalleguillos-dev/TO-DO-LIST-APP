import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from "react-router";
import AddTaskItem from "../components/AddTaskItem";

const AddItemPage: React.FC = () => {
    const { name } = useParams<{ name: string; }>();
    
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
            <IonTitle>{name}</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
            </IonHeader>
        <AddTaskItem />
        </IonContent>
        </IonPage>
    );
}

export default AddItemPage;