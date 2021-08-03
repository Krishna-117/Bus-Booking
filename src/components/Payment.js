import React from 'react'

export default function Payment({ history }) {
    const enterSite = e => {
        e.preventDefault()
        history.push('/Ticket');
    }
    const enterCancel = e => {
        e.preventDefault()
        history.push('/');
    }
    return (
        <>
            <div >
                <h4>Payment</h4>
            </div>
            <div className="ss">
                <div className="row">
                    <div className="column2">
                        <form className="form-group sst">
                            <label>Total</label>
                            <input className="form-control seatInp" type="rupees" />
                            <label>ApplyPromocode</label>
                            <input className="form-check-input" type="radio" name="code" id="yes" value="Yes" />
                            <label  htmlFor="male">Yes</label>
                            <input className="form-check-input" type="radio" name="code" id="no" value="No" />
                            <label htmlFor="no">NO</label>
                            <input className="form-control seatInp" type="text" />
                        </form>
                        <div >
                            <a href="/#" onClick={e => enterSite(e)}>
                                <button className="btn btn-info  sst">
                                    Confirm Details
                                </button>
                            </a>
                            <a href="/#" onClick={e => enterCancel(e)}>
                                <button className="btn btn-info  sst">
                                    Cancel
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
