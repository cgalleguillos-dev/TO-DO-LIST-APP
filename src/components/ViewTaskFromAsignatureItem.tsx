import React, { useEffect, useState } from "react";
import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import { Task } from "../models/task.model";
import { useStorage2 } from "../useStorage2";



interface ContainerProps {
    name: string;
  }
  
const ViewTaskFromAsignatureItem: React.FC<ContainerProps> = ({name}) => {
    const [task, setAllTask] = useState<Task[]>([]);
    const { getTaskByNameAsignature } = useStorage2();

    useEffect(() => {
        const actionGetAllTaskFromAsignature = async () => {
            const auxTask = await getTaskByNameAsignature(name);
            setAllTask(auxTask);
        }
        actionGetAllTaskFromAsignature();
    });
    return (
        <IonContent>
            <IonList>
                {
                    task? task.map((task, index) => {
                        return (
                            task.nameAsignature === name ?
                            <IonItem key={index}>
                                <IonLabel>
                                    <h2>{task.name}</h2>
                                    <h3>{task.nameAsignature}</h3>
                                    <p>{task.description}</p>
                                </IonLabel>
                            </IonItem>
                            :
                            <></>
                        );
                    })
                    :
                <></>
                }
            </IonList>
        </IonContent>
    );
}

export default ViewTaskFromAsignatureItem;