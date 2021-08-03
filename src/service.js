import axios from "axios";
export function seatSelection(succesCB){
    axios.get(process.env.REACT_APP_SERVER_URL).then(succesCB);
}

export function saveDataInDB(data,succesCB,errorCB){
    axios.post(process.env.REACT_APP_DB, data).then(succesCB).catch(errorCB);
}


export function bookUserFromUI(id,successCB){
    axios.delete(process.env.REACT_APP_SERVER_URL + id).then(successCB);

} 