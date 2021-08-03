import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusList from './components/BusList';
import SeatSelection from './components/SeatSelection'
import Form from "./components/Form";
import Coupons from "./components/Coupon/Coupons";
import Payment from "./components/Payment";
import Ticket from "./components/Ticket";
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact render={props => <>
                 <Form {...props} />
                 <Coupons {...props}/>
              </>} />
          <Route path="/buslist" exact render={props => <>
              <Form {...props} />
              <BusList {...props} />
          </>} />
          <Route path="/seatselection" render={props => <SeatSelection {...props} />} />
          <Route path="/payment" exact render={props => <Payment {...props} />} />
          <Route path="/ticket" exact render={props => <Ticket {...props} />} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
