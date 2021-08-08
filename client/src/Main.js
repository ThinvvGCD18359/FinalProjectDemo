import React from "react";


export default function Main() {
  function openW(){
    window.open('login', 'Login', 'top=200,left=500,width=500,height=500');
  }
  return (
    <div style={{width: "100%"}}>
    <div className="container">
      <h1>Welcome to Ticketing Coach 1.0</h1>
      <button onClick={openW} className="button">
        Login
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
