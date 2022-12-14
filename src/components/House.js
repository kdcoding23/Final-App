import React from "react";
import NewRoomForm from "./new-room-form";

export default class House extends React.Component {
    render() {
        // adds new room name, area, button for each iterated room
        // data = the house

        const rooms = this.props.data.rooms
        ? this.props.data.rooms.map((room, index) =>
            <li key={index}>
                Room: {room.name} | Area: {room.area} sq. ft.
                {/* deleteRoom button */}
                <button className="button" onClick={e =>
                    this.props.deleteRoom(e, this.props.data, room)
                }>Delete</button>
            </li>)
        : null;

        // show on page: list of rooms and form to addNewRoom
        return (
            <div>
                <h1>{this.props.data.name}</h1>
                <ul>
                    {rooms}
                </ul>
                <NewRoomForm
                    addNewRoom={this.props.addNewRoom} data={this.props.data} />
            </div>
        );
    }
}