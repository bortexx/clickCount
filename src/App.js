import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { ping, pong } from "./redux/1secclicker/action-creators";
function App({ isPinging, ping }) {
  return (
    <div className="App">
      <h1>is pinging: {isPinging.toString()}</h1>
      <button onClick={ping}>Start PING</button>
    </div>
  );
}

const mapStateToProps = storeRedux => ({
  isPinging: storeRedux.clicker.isPinging
});
const mapDispatchToProps = dispatch => ({
  ping: () => dispatch(ping()),
  pong: () => dispatch(pong())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
