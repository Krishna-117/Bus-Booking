import React, { useState, useEffect } from 'react';
import { seatSelection } from "../service";
import BusData from '../busData.json';
import './Tab.css'

export default function BusList({history}) {
    const enterSite = e => {
        e.preventDefault()
        history.push('/SeatSelection')
    }
    const [users, setUsers] = useState(BusData);
    const handleSubmit = bId => {
        localStorage.setItem("selectedBusId",bId)
    }
    useEffect(() => {
        seatSelection(response => setUsers(response.data));
    }, [])
    const sortByFare = () => {
        users.sort((user1, user2) => user1.fare - user2.fare);
        setUsers([...users]);
    }
    const sortByAvailableSeat = () => {
        users.sort((user1, user2) => user1.availableseat - user2.availableseat);
        setUsers([...users]);
    }
    const sortByServiceProvider = () => {
        users.sort((user1, user2) => user1.serviceprovider - user2.serviceprovider);
        setUsers([...users]);
    }
    const sortByDepartureTime = () => {
        users.sort((user1, user2) => user1.departure - user2.departure);
        setUsers([...users]);
    }
    const sortByArrivalTime = () => {
        users.sort((user1, user2) => user1.arrival - user2.arrival);
        setUsers([...users]);
    }
    const sortByBusType = () => {
        users.sort((user1, user2) => user1.bustype - user2.bustype);
        setUsers([...users]);
    }
    return (
        <div className="grandparent">
            <div >
                <h4>Available Buses </h4>
            </div>
            <div className="ss">
                <table className=' table table-compact table-bordered table-hover table-responsive table-striped '>
                    <thead className="sst">
                        <tr>
                            <td onClick={sortByServiceProvider}>Service Provider</td>
                            <td onClick={sortByDepartureTime}>Departure Time</td>
                            <td onClick={sortByArrivalTime}>Arrival Time</td>
                            <td onClick={sortByFare}>Fare</td>
                            <td onClick={sortByBusType}>Bus Type</td>
                            <td onClick={sortByAvailableSeat}>Available Seat</td>
                            <td> </td>
                        </tr>
                    </thead>
                    <tbody>
                        {BusData.map(user =>
                            <tr>
                                <td>{user.serviceprovider}</td>
                                <td>{user.departure}</td>
                                <td>{user.arrival}</td>
                                <td>{user.fare}</td>
                                <td>{user.bustype}</td>
                                <td>{user.availableseat}</td>
                                <td><a href="/#" onClick={e => enterSite(e)}>
                                    <button className='btn btn-danger' onClick={(bId) => { handleSubmit(bId) }}>
                                Book Now </button></a></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}