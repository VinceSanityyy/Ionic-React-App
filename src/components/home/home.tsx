import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonPage, IonRouterOutlet } from '@ionic/react';
import { calendar, personCircle, map, informationCircle, people } from 'ionicons/icons';
import axios from 'axios'
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import Tab1 from '../../pages/Tab1';
import Tab2 from '../../pages/Tab2';
export const Home: React.FC = () => (
<IonTabs>
      <IonRouterOutlet>
        <Route path="/tab1" component={Tab1} />
        <Route path="/tab2" component={Tab2} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule" href="/tab2">
          <IonIcon icon={calendar} />
          <IonLabel>Schedules</IonLabel>
        </IonTabButton>
        <IonTabButton tab="speakers" href="/tab1">
          <IonIcon icon={people} />
          <IonLabel>Speakers</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map" href="/tab3">
          <IonIcon icon={map} />
          <IonLabel>Map</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href="/tab1">
          <IonIcon icon={informationCircle} />
          <IonLabel>About</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
);

export default Home;