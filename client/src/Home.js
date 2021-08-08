import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div style={{width: "100%"}}>
    <div className="container">
      <h1>Welcome</h1>
      <button className="button">
        <Link to="/logout">Logout</Link>
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
