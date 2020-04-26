import axios from 'axios'
export default function logout() {

    const alert = document.createElement('ion-alert');
    alert.header = 'Confirm';
    alert.message = 'Do you want to sign out?';
    alert.buttons = [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: (blah) => {
        console.log('do nothing');
      }
    }, {
      text: 'Okay',
      handler: () => {
        const loading = document.createElement('ion-loading');
        loading.message = 'Signing out';
        document.body.appendChild(loading);
        loading.present();
        const data = [
    
        ]
        axios.get('http://127.0.0.1:8000/api/auth/logout',{
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('bearer_token'),
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((res)=>{
        console.log(res)
        localStorage.setItem("bearer_token",'');
        loading.dismiss();
        window.location.href = "/";
        })
      }
    }
  ];

  document.body.appendChild(alert);
  return alert.present();


}

