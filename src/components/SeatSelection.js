import React from 'react'
import './Tab.css'
export default function SeatSelection({history}) {
    const enterSite = e => {
        e.preventDefault()
        history.push('/Payment');
    }
    const enterReset = e => {
        e.preventDefault()
        history.push('/BusList');
    }
    
    return (
        <>
            <div >
                <h4>Passenger Details</h4>
            </div>
            <div className="ss">
                <div className="row">
                    <div className="column2">
                        <form className="form-group sst">
                            {/* getDetails(bId) */}
                            {/* <label>Passenger Name</label>
                            <input className="form-control seatInp" type="text" required name="passenger-name" placeholder="Enter Name" />
                            <label>Passenger Address</label>
                            <input className="form-control seatInp" type="text" required name="passenger-address" placeholder="Enter Address" /> */}
                        </form>
                        <div>
                            <a href="/#" onClick={e => enterSite(e)}>
                                <button className="btn btn-info  sst">
                                       Confirm Details
                                </button>
                            </a>
                            <a href="/#" onClick={e => enterReset(e)}>
                                <button className="btn btn-info  sst">
                                       Back
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}