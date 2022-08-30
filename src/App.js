// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       name: { firstName: "Diogo", lastName: "Carvalho" },
//       company: "Mondrian Investment Partners",
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hi {this.state.name.firstName} {this.state.name.lastName}, I work at{" "}
//             {this.state.company}.
//           </p>
//           <button
//             onClick={() => {
//               // /* changes state to a diff object(shallow merge), react only rerenders when this happens */
//               // /* has to match the state object, ex: so if a string vs object it won't work */
//               // this.setState({ name: { firstName: "Jimmy", lastName: "Jam" } });

//               /* this makes setState act more 'synchronis', runs first functions then runs the second callback only after first finishes */
//               this.setState(
//                 () => {
//                   return {
//                     name: { firstName: "Jimmy", lastName: "Jam" },
//                   };
//                 },
//                 () => {
//                   console.log(this.state);
//                 }
//               );
//             }}
//           >
//             Change Name
//           </button>
//         </header>
//       </div>
//     );
//   }
// }
