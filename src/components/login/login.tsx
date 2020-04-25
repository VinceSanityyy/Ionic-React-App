import React,{ useState } from 'react';
import { IonApp, IonAlert, IonInput, IonContent, IonPage, IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonButton, IonRouterOutlet, IonCol, IonRow } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import axios from 'axios'
import { IonReactRouter } from '@ionic/react-router';
// import Register from './components/register/register'
export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [ password, setPassword ] = useState<string>();
  const [errorAlert, showError] = useState(false);
  const [unauthrozedAlert, showUnauth] = useState(false);

  function login(){
    // const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    // axios.post(PROXY_URL+'http://52.74.70.6/api/auth/login',{
    //   email:email,
    //   password:password
    // },{ 
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     }
    //   }).then((res)=>{
    //   console.log(res)
    // }).catch((err)=>{
    //   if (err.response.status == 404) {
    //   console.log(err.response.status);
    //   showError(true)
    //   }
    //   if (err.response.status == 401) {
    //   showUnauth(true)
    //   console.log(err.response.status);
    //   }
    // })
    window.location.href = "/home";
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
          <IonButton expand="block" type="submit" onClick={login}>Login</IonButton>
          <IonButton expand="block" routerLink='/register'>Register</IonButton>
          </IonCol>
          </IonRow> 
      </IonContent>
        <IonAlert
          isOpen={errorAlert}
          onDidDismiss={() => showError(false)}
          header={'Alert'}
          message={'Check your inputs'}
          buttons={['OK']}
        />
         <IonAlert
          isOpen={unauthrozedAlert}
          onDidDismiss={() => showUnauth(false)}
          header={'Alert'}
          message={'Account not found'}
          buttons={['OK']}
        />
    </IonPage>
  );
};

export default Login;