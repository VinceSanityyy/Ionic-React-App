import { IonToolbar, IonTitle, IonHeader, IonButtons, IonBackButton, IonPage } from "@ionic/react"
import React, {useState, useEffect} from "react"

export const Register: React.FC = () =>{
    return(
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton defaultHref="/" />
            </IonButtons>
            </IonToolbar>
        </IonHeader>
        </IonPage>
    )
}
 


export default Register