import React, { Component, createContext } from "react";
import { addAFave, removeAFave, getFaves } from "./../../config/models";

const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favesIds: []
    };
  }

  getFavedSessionIds = () => {
    try {
      this.setState({ favesIds: getFaves() });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getFavedSessionIds();
  }

  addFaveSession = sessionId => {
    try {
      addAFave(sessionId);
      console.log("gonna refresh state")
      this.getFavedSessionIds();
      console.log("refresh state")
    } catch (error) {
      console.log(error);
    }
  };

  removeFaveSession = sessionId => {
    try {
      removeAFave(sessionId);
      console.log("gonna refresh state")
      this.getFavedSessionIds();
      console.log("refresh state")
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          getFaves: this.getFavedSessionIds,
          addAFave: this.addFaveSession,
          removeAFave: this.removeFaveSession
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
