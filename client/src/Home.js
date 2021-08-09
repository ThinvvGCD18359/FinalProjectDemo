import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { firebase } from "./firebase";


export default function Home() {
  const history = useHistory();
  const user = firebase.auth().currentUser;
  function signOut() {
    if (user) {
        firebase.auth().signOut().then(() => {
            console.log("User successfully logged out");
            history.push("/");
        }).catch(error => console.log('Something went wrong! ', error))
    } else {
      alert('user already logged out.');
      return true;      
    }
  }
  return (
    <div style={{width: "100%"}}>
    <div className="container">
      <h1>Welcome </h1>
      
      <button onClick={signOut} className="button">
        Change Account
      </button>
    </div>

    <div className="card">
      <img src="1.jpg" alt="pic" style={{width:"100%"}}/>
      <h1>Dn-Sg</h1>
      <p className="price">$19.99</p>
      <p>Some text...</p>
      <p><button>
        <Link to="/views">View</Link>
      </button></p>
    </div>

    <div className="card">
      <img src="1.jpg" alt="pic" style={{width:"100%"}}/>
      <h1>Dn-Sg</h1>
      <p className="price">$19.99</p>
      <p>Some text...</p>
      <p><button>
        <Link to="/views">View</Link>
      </button></p>
    </div>

    <div className="card">
      <img src="1.jpg" alt="pic" style={{width:"100%"}}/>
      <h1>Dn-Sg</h1>
      <p className="price">$19.99</p>
      <p>Some text...</p>
      <p><button>
        <Link to="/views">View</Link>
      </button></p>
    </div>
  </div>
  );
}