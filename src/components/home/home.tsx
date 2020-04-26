import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonPage, IonRouterOutlet } from '@ionic/react';
import { calendar, create, logOut, personCircle, map, informationCircle, people } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Tab1 from '../../pages/Tab1';
import Tab2 from '../../pages/Tab2';
import Tab3 from '../../pages/Tab3';
import logout from '../../methods/logout';
export const Home: React.FC = () => {

  function signout(){
    logout()
  }

  if(localStorage.getItem('bearer_token')){
    return(
      <IonTabs>
      <IonRouterOutlet>
        <Route path="/tab1" component={Tab1} />
        <Route path="/tab2" component={Tab2} />
        <Route path="/tab3" component={Tab3} />
      </IonRouterOutlet>
      <IonTabBar color="dark" slot="bottom">
        <IonTabButton tab="schedule" href="/tab1">
          <IonIcon icon={calendar} />
          <IonLabel>Schedules</IonLabel>
        </IonTabButton>
        <IonTabButton tab="speakers" href="/tab2">
          <IonIcon icon={create} />
          <IonLabel>Book</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map" href="/tab3">
          <IonIcon icon={map} />
          <IonLabel>Map</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href="/tab1">
          <IonIcon icon={informationCircle} />
          <IonLabel>About</IonLabel>
        </IonTabButton>
        <IonTabButton onClick={signout} >
          <IonIcon icon={logOut} />
          <IonLabel>Sign Out</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
    )
  }
  return(
    <Redirect to='/'/>
  )
};

export default Home;