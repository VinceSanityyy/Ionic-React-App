import axios from 'axios'

export default function getSchedules(){
    const loading = document.createElement('ion-loading');
    loading.message = 'Fetching data';
  
    
    document.body.appendChild(loading);
    loading.present();
    const config = {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('bearer_token') ,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        }
    };
     return axios.get('http://127.0.0.1:8000/api/auth/getSchedules',config).
      then((res)=>{
        
        // console.log(res.data)
       loading.dismiss();
       return res.data
       
      
      }).catch((err)=>{
        console.log(err)
        loading.dismiss();
      })
}