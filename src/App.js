import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import House from "./components/House";
import NavBar from "./components/NavBar";
// import { Route, Routes } from 'react-router-dom';
// import About from './components/about';
// import Contact from './components/contact';
import Footer from './components/Footer';
// import Inspo from './components/inspo';
import CarouselFade from "./components/carousel";
import RouterApp from './components/RouterApp';
import Main from './components/Main';


// I had trouble getting the CRUD app to show up on the website. Initially, I had everything below uncommented out and the CRUD app was shown in the browser. But as I added more components to the site, the CRUD app became invisible. I thought by taking the uncommented comments below and making the Main.js component with them, that that would help. I also tried creating the House link in the NavBar to put the CRUD app on, but it still won't work. I suspect it may have something to do with how the return section below is written or the House in Main.js (but I played around with that section as well).


// const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

export default class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   // methods
  //   this.addNewRoom = this.addNewRoom.bind(this);
  //   this.deleteRoom = this.deleteRoom.bind(this);
  // }

  render() {
  //   // if the state isn't null, then go through all houses and list them out as House elements

  //   const houses = this.state
  //     ? this.state.houses.map((house, index) => 
  //     <House
  //       key={index}
  //       data={house}
  //       // addNewHouse = {this.addNewHouse}
  //       // deleteHouse = {this.deleteHouse}
  //       addNewRoom = {this.addNewRoom}
  //       deleteRoom = {this.deleteRoom} />)
  //     : null;
      

      // using Routes to link the components to each other:

      return (
        <>
        <div> 
          <NavBar />
        </div>
        <div>
          <CarouselFade />
        </div>
        <div>
          <Main />
          {/* <House /> */}
        </div>
        <div>
          <RouterApp />
        </div>
        {/* <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/inspo" element={<Inspo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes></div> */}
        <div>
          <Footer/>
        </div>
        </>
      );
  }
}

  // READ: make http requests and get data for houses in state

//   componentDidMount() {
//     fetch(HOUSES_ENDPOINT)
//       .then(res => res.json())
//       .then(data => {
//       this.setState({
//         houses: data
//       });
//     });
//   }

//   // DELETE: to find index of room you want to delete and then deleting just that one (using splice)

//   deleteRoom(e, house, room) {
//     const index = house.rooms.indexOf(room);
//     house.rooms.splice(index, 1);
//     // iterate through each house in the previous state, find the corresponding id of house we're updating, then update the list of houses on page in a new state
//     updateHouse(house)
//       .then(() => {
//         this.setState(state => {
//           for (let h of state.houses) {
//             if (h._id === house._id) {
//               let h = house;
//               break;
//             }
//           }
//           return state;
//         });
//       });
//       e.preventDefault();
//   }

//   // CREATE: add new room and to specific house and update to page

//   addNewRoom(e, house, room) {
//     // const index = house.rooms.indexOf(room);
//     // house.rooms.splice(index, 1);
//     house.rooms.push(room)
//     updateHouse(house)
//       .then(() => {
//         this.setState(state => {
//           for (let h of state.houses) {
//             if (h._id === house._id) {
//               let h = house;
//               break;
//             }
//           }
//           return state;
//         });
//       });
//       e.preventDefault();
//   }
// };


// // UPDATE: send http request to make this update in API

// function updateHouse(house) {
//   return fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(house)
//   })
// }