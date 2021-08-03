import React from 'react'
import './Tab.css'
export default function Ticket({ history }) {
    const enterSite = e => {
        e.preventDefault()
        history.push('/');
    }

    return (
        <>
            <div className="ss">
                <h4>BUS BOOKINGZ</h4>
                <article className="ticket">
                    <header className="ticket__head">
                        <h5>Booking Details</h5>
                    </header>
                    <div className="ticket__body">
                        <section className="ticket_section">
                            {/* {getLocationData()} */}

                            {/* getDate()*/}
                        </section>
                        <section className="ticket_section">
                            <h5>Passenger Names   </h5>
                            {/* {getPassengerName()} */}

                        </section>
                        <section className="ticket_section">
                            <h5>Payment Details</h5>
                            {/* {getPayment()} */}
                        </section>
                    </div>
                
                <a href="/#" onClick={e => enterSite(e)}>
                    <button>GO To Home Page</button>
                </a>
                </article>
            </div> 
        </>

    )
}