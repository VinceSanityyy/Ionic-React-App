import axios from 'axios'


export default function login(email:string,password:string){

    const loading = document.createElement('ion-loading');
    loading.message = 'Logging In';
    
    document.body.appendChild(loading);
    loading.present();

    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

      axios.post('http://127.0.0.1:8000/api/auth/login',{
      email:email,
      password:password
    },{ 
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
      }).then((res)=>{
       console.log(res)
       localStorage.setItem("bearer_token", res.data.bearer_token);
       loading.dismiss();
       window.location.href = "/home";
    //    console.log(localStorage.getItem('bearer_token'))
    }).catch((err)=>{
        loading.dismiss();
        accountNotFoundAlert()
    })
   
}

function accountNotFoundAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert';
    alert.message = 'Account Not Found';
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    return alert.present();
}
