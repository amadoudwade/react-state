import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Développeur Full Stack passionné par React et Node.js.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Développeur Web",
      },
      show: false,
      mountedTime: 0,
    };
    this.interval = null;
  }

  // Toggle de l'état show
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  // Lifecycle: démarrage de l'intervalle
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  // Lifecycle: nettoyage de l'intervalle
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, show, mountedTime } = this.state;
    return (
      <div className="App">
        <h1>Profil de la Personne</h1>
        <button onClick={this.toggleShow}>
          {show ? "Cacher le profil" : "Afficher le profil"}
        </button>
        {show && (
          <div className="profile">
            <img
              src={person.imgSrc}
              alt="Profil"
              style={{ width: "150px", borderRadius: "50%" }}
            />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}
        <p>Temps écoulé depuis le montage : {mountedTime} secondes</p>
      </div>
    );
  }
}

export default App;
