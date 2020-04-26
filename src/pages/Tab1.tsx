import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonListHeader, IonLabel, IonButton, IonList, IonItem, IonText, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRefresher, IonRefresherContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import axios from 'axios'
import {
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave
} from '@ionic/react';
import getSchedules from '../methods/schedules'
import { RefresherEventDetail } from '@ionic/core';
const Tab1: React.FC = () => {
  
  const [schedules, setSchedules] = React.useState([]);

  useIonViewWillEnter(() => {
    getSchedules().then(data => setSchedules(data))
  });

  function doRefresh(event: CustomEvent<RefresherEventDetail>){
    const config = {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('bearer_token') ,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      }
  };
    axios.get('http://127.0.0.1:8000/api/auth/getSchedules',config).
    then((res)=>{
      res.data = setSchedules(res.data)
      console.log(schedules)
    event.detail.complete()
    }).catch((err)=>{
      console.log(err)
    })
  }

  // React.useEffect(() => {
    // getSchedules().then(data => setSchedules(data.schedules));
  // }, []);
 
 function viewSchedule(){
   console.log('Hello')
 }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Appointments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent>
        
        </IonRefresherContent>
      </IonRefresher>
      <IonList>
          {schedules.map(elem => {
            return(
              <IonItem key={elem['id']} onClick={viewSchedule}>
              <IonLabel>
                <IonText className="font-weight: bold;">
                <h3>{elem['schedule_type']}</h3>
                </IonText>
                <h4>{elem['type']}</h4>
                <h4>{elem['start_date']}</h4>
              </IonLabel>
              <br></br>
            </IonItem> 
            )
          })}
        </IonList>
  </IonContent>
    </IonPage>
  );
};

export default Tab1;
