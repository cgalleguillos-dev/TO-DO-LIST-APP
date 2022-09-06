import React, { useState } from "react";
import { IonContent, IonInput, IonItem } from "@ionic/react";
import { useStorage } from "../useStorage";

const AddAsignatureItem: React.FC = () => {
    const [name, setName] = useState<string>();
    const [credit, setCredit] = useState<number>();
    const { addAsignature } = useStorage();

    const addAsignatureA = async (name: string, credit: number) => {
        await addAsignature(name, credit);
        setName('');
        setCredit(0);
    }

    return (
        <IonContent>
            <IonItem>
                <IonInput placeholder="Nombre" required={true} value={name} type="text" onIonChange={ev => { setName(ev.detail.value!)}} />
            </IonItem>

            <IonItem>
                <IonInput placeholder="Créditos" value={credit} onIonChange={ev => {setCredit(parseInt(ev.detail.value!))}} />
            </IonItem>
        {
            name && credit ? <IonItem button onClick={() => addAsignatureA(name!, credit!)}>Añadir</IonItem> : <IonItem button disabled>Añadir</IonItem>
        }
        </IonContent>
    );


}

export default AddAsignatureItem;