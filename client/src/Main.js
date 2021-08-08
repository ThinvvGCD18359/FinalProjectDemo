import React from "react";
import { useHistory } from "react-router-dom";
import { auth, firebase } from "./firebase";


export default function Main() {
    const history = useHistory();
    
    async function googleLogin() {
      //1 - init Google Auth Provider
      const googleprovider = new firebase.auth.GoogleAuthProvider();
      //2 - create the popup signIn
      await auth.signInWithPopup(googleprovider).then(
        async (result) => {
          //3 - pick the result and store the token
          const token = await auth?.currentUser?.getIdToken(true);
          //4 - check if have token in the current user
          if (token) {
            //5 - put the token at localStorage (We'll use this to make requests)
            localStorage.setItem("@token", token);
            //6 - navigate user to the book list
            history.push("/home");
          }
        },
        function (error) {
          console.log(error);
        }
      );
    }
  
    async function phoneLogin() {
      //1 - init Google Auth Provider
      const phoneprovider = new firebase.auth.PhoneAuthProvider();
      //2 - create the popup signIn
      await auth.signInWithPopup(phoneprovider).then(
        async (result) => {
          //3 - pick the result and store the token
          const token = await auth?.currentUser?.getIdToken(true);
          //4 - check if have token in the current user
          if (token) {
            //5 - put the token at localStorage (We'll use this to make requests)
            localStorage.setItem("@token", token);
            //6 - navigate user to the book list
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
