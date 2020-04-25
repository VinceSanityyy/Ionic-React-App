import React,{ useState } from 'react';
import { IonApp, IonAlert, IonInput, IonContent, IonPage, IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonButton, IonRouterOutlet, IonCol, IonRow } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import axios from 'axios'
import { IonReactRouter } from '@ionic/react-router';
import login from '../../methods/login';
export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [ password, setPassword ] = useState('');
  const [errorAlert, showError] = useState(false);
  const [unauthrozedAlert, showUnauth] = useState(false);

  

  async function loginAuth(){
    await login(email,password)
  }

  return (
    <IonPage>
      <IonContent className="ion-padding">
       <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <IonCard class=" align-center">
        <IonCardHeader color="dark" class="ion-text-center">Login</IonCardHeader>
          <IonCardContent>
          <br></br>
            <IonLabel>Email</IonLabel>
          <IonItem>
            <IonInput value={email} required placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
           <br></br>
            <IonLabel>Password</IonLabel>
          <IonItem>
             <IonInput value={password}required type="password" placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
      </IonCardContent>
        </IonCard>
        <IonRow class="cardfooter">
          <IonCol>
          <IonButton expand="block" type="submit" onClick={loginAuth}>Login</IonButton>
          <IonButton expand="block" routerLink='/register'>Register</IonButton>
          </IonCol>
          </IonRow> 
      </IonContent>
    </IonPage>
  );
};

export default Login;