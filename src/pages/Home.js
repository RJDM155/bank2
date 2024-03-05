import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Home extends Component {

  logout = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("last_name", { path: "/" });
    cookies.remove("name", { path: "/" });
    cookies.remove("username", { path: "/" });
    cookies.remove("email", { path: "/" });
    window.location.href = "./";
  };

  componentDidMount(){
    if(!cookies.get('username')){
        window.location.href="./";
    }
}

  render() {
    return (
      <div>
        Aqui va el crud chavales
        <br/><br />
        <button onClick={() => this.logout()}>Log Out</button>
      </div>
    );
  }
}
export default Home;
