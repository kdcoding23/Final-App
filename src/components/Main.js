import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import House from "./House";


const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

export default class Main extends React.Component {
  constructor(props){
    super(props);
    // methods
    this.addNewRoom = this.addNewRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
  }

  render() {
    // if the state isn't null, then go through all houses and list them out as House elements

    const houses = this.state
      ? this.state.houses.map((house, index) => 
      <House
        key={index}
        data={house}
        // addNewHouse = {this.addNewHouse}
        // deleteHouse = {this.deleteHouse}
        addNewRoom = {this.addNewRoom}
        deleteRoom = {this.deleteRoom} />)
      : null;
      

      // using Routes to link the components to each other:

      return (
        <>
        {/* <div>
          <NavBar />
        </div>
        <div>
          <CarouselFade />
        </div>
        
        <RouterApp />
        {/* <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/inspo" element={<Inspo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes></div> */}
        <div className="houses">
          {houses}
        </div>
        {/* <div>
        <Footer/>
        </div> */}
        </>
      );
  }

  // READ: make http requests and get data for houses in state

  componentDidMount() {
    fetch(HOUSES_ENDPOINT)
      .then(res => res.json())
      .then(data => {
      this.setState({
        houses: data
      });
    });
  }

  // DELETE: to find index of room you want to delete and then deleting just that one (using splice)

  deleteRoom(e, house, room) {
    const index = house.rooms.indexOf(room);
    house.rooms.splice(index, 1);
    // iterate through each house in the previous state, find the corresponding id of house we're updating, then update the list of houses on page in a new state
    updateHouse(house)
      .then(() => {
        this.setState(state => {
          for (let h of state.houses) {
            if (h._id === house._id) {
              let h = house;
              break;
            }
          }
          return state;
        });
      });
      e.preventDefault();
  }

  // CREATE: add new room and to specific house and update to page

  addNewRoom(e, house, room) {
    // const index = house.rooms.indexOf(room);
    // house.rooms.splice(index, 1);
    house.rooms.push(room)
    updateHouse(house)
      .then(() => {
        this.setState(state => {
          for (let h of state.houses) {
            if (h._id === house._id) {
              let h = house;
              break;
            }
          }
          return state;
        });
      });
      e.preventDefault();
  }
};


// UPDATE: send http request to make this update in API

function updateHouse(house) {
  return fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(house)
  })
}