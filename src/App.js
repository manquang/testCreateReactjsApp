import React, { Component } from "react";
import Login from "./Login";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRouteDashboard: "",
    };
  }


  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     user: state.app.user,
//   };
// };
export default App;
// export default connect(mapStateToProps, null)(App);
