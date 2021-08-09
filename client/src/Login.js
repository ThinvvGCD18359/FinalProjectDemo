import React from "react";
import { useHistory } from "react-router-dom";
import { auth, firebase } from "./firebase";
import * as firebaseui from "firebaseui";
import "../node_modules/firebaseui/dist/firebaseui.css"


export default function Login() {
    const history = useHistory();
    
    async function googleLogin() {
      const googleprovider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(googleprovider).then(
        async (result) => {
          const token = await auth?.currentUser?.getIdToken(true);
          if (token) {
            localStorage.setItem("@token", token);
            console.log(token);
            history.push("/home");
          }
        },
        function (error) {
          console.log(error);
        }
      );
    }
  
    function phoneLogin() {
          const uiConfig = {    
            signInOptions: [{
              provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
              defaultCountry: 'VN'
            }],
          callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl){
            return true;
          }
        },
        signInSuccessUrl : "/home"
      };
  
      if(firebaseui.auth.AuthUI.getInstance()) {
        const ui = firebaseui.auth.AuthUI.getInstance()
        ui.start('#firebaseui-auth-container', uiConfig)
      } else {
        const ui = new firebaseui.auth.AuthUI(firebase.auth())
        ui.start('#firebaseui-auth-container', uiConfig)
      }
    }
      
  return (
    
    <div>
      <h1>Welcome to Ticketing Coach 1.0</h1>
      <button onClick={googleLogin} className="login-button">
        Login With Google
      </button>
      <button onClick={phoneLogin} className="login-button">
        Login With Phone
      </button>
      <div id="firebaseui-auth-container"></div> 
    </div>
      
  );
}