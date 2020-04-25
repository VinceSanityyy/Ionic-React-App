import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonListHeader, IonLabel, IonButton, IonList, IonItem, IonText, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import axios from 'axios'
import {
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave
} from '@ionic/react';
import getExams from '../methods/exams';
const Tab1: React.FC = () => {
  
  

  useIonViewDidEnter(() => {
    const config = {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('bearer_token') ,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      }
  };
    axios.get('http://127.0.0.1:8000/api/auth/getSchedules',config).
    then((res)=>{
        response = res.data
        console.log(response)
    }).catch((err)=>{
        console.log(err)
    })
  });


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Appointments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
    <IonList>
      {response.map(elem =>(
           <IonItem key={elem.id}>
           <IonLabel>
             <h2>{elem.schedule_type}</h2>
             <h3>{elem.type}</h3>
             <h3>{elem.start_date}</h3>
           </IonLabel>
           <br></br>
         </IonItem> 
      ))}
    </IonList>
  </IonContent>
    </IonPage>
  );
};

export default Tab1;
