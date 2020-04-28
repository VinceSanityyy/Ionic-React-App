import React, { useState } from 'react';
import { IonContent, IonDatetime, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [schedType, setschedType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  function changed(){
    
    console.log(schedType)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Book Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonItem>
        <IonLabel>Select Appointment</IonLabel>
        <IonSelect onIonChange={e => setschedType(e.detail.value!)}>
          <IonSelectOption value="Consultation">Consultation</IonSelectOption>
          <IonSelectOption value="Examination">Examination</IonSelectOption>
        </IonSelect>
      </IonItem>
        <IonItem>
          <IonLabel>D MMM YYYY H:mm</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY H:mm A" min="2015" max="2030" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
      </IonItem>
      {/* <IonButton onClick={changed}>Click</IonButton> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
