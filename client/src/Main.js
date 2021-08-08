import React from "react";
import { useHistory } from "react-router-dom";
import { auth, firebase } from "./firebase";


export default function Main() {
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
  
    async function phoneLogin() {
      const phoneprovider = new firebase.auth.PhoneAuthProvider();
      await auth.signInWithPopup(phoneprovider).then(
        async (result) => {
          const token = await auth?.currentUser?.getIdToken(true);
          if (token) {
            localStorage.setItem("@token", token);
            history.push("/home");
          }
        },
        function (error) {
          console.log(error);
        }
      );
    }
  return (
    <div style={{width: "100%"}}>
    <div className="container">
      <h1>Welcome to Ticketing Coach 1.0</h1>
      <button onClick={googleLogin} className="login-button">
        Login With Google
      </button>
      <button onClick={phoneLogin} className="login-button">
        Login With Phone
      </button>
    </div>

    <div className="card">
      <img src="1.jpg" alt="pic" style={{width:"100%"}}/>
      <h1>Dn-Sg</h1>
      <p class="price">$19.99</p>
      <p>Some text...</p>
      <p><button>View</button></p>
    </div>

    <div className="card">
      <img src="1.jpg" alt="pic" style={{width:"100%"}}/>
      <h1>Dn-Sg</h1>
      <p class="price">$19.99</p>
      <p>Some text...</p>
      <p><button>View</button></p>
    </div>

    <div className="card">
      <img src="1.jpg" alt="pic" style={{width:"100%"}}/>
      <h1>Dn-Sg</h1>
      <p class="price">$19.99</p>
      <p>Some text...</p>
      <p><button>View</button></p>
    </div>
  </div>

    
  );
}
