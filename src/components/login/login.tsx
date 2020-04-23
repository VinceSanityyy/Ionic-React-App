import React,{ useState } from 'react';
import { IonItemDivider, IonAlert, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import axios from 'axios'
export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [ password, setPassword ] = useState<string>();
  const [errorAlert, showError] = useState(false);
  const [unauthrozedAlert, showUnauth] = useState(false);

  function login(){
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    axios.post(PROXY_URL+'http://52.74.70.6/api/auth/login',{
      email:email,
      password:password
    },{ 
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
      }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      if (err.response.status == 404) {
      console.log(err.response.status);
      showError(true)
      }
      if (err.response.status == 401) {
      showUnauth(true)
      console.log(err.response.status);
      }
    })
  }

  return (
    <IonPage>
      <IonContent>
       <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <IonCard class=" align-center">
        <IonCardHeader color="dark" class="ion-text-center">Login</IonCardHeader>
          <IonCardContent>
          <br></br>
            <IonLabel>Email</IonLabel>
          <IonItem>
            <IonInput value={email} placeholder="Enter Input" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
           <br></br>
            <IonLabel>Password</IonLabel>
          <IonItem>
             <IonInput value={password} type="password" placeholder="Enter Input" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
          <br></br>
          <IonButton expand="block" onClick={login}>Login</IonButton>
      </IonCardContent>
        </IonCard>
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