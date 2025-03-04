import React, { useEffect, useState } from 'react';
import Axios from '../../Axios/Axios';
import './banner.css';


function Banner() {
  const [shops, setShops] = useState([]);
  const [selectedDate, setSelectedDate] = useState({});
  const [selectedTime, setSelectedTime] = useState({});

  useEffect(() => {
    Axios.get('/Shop/Getallshop')
      .then((response) => {
        console.log(response.data);
        setShops(response.data.Shops);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const checkSeats = (id) => {
    try {
      console.log("Clicked..", id);
      const date = selectedDate[id];
      const time = selectedTime[id];

      if (!date || !time) {
        alert("Please select a date and time before booking.");
        return;
      }

      let data = { id, datee: date, seatyouwant: 4 };

      Axios.post('/Users/seatbooking', data).then((response) => {
        console.log(response.data, "data");
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);   
    }
  };

  return (
    <div className='Banner'>
      <div className="CardBox">
        {shops.map((obj) => (
          <div className="SetBox" key={obj.id}>
            <div className="Card">
              <div className="Bicard">
                <h1>{obj.name}</h1>
                <p>Email: {obj.Email}</p>
                <p>Id: {obj.id}</p>
              </div>
            </div>

            <div className="AboutButton">
              <h4>Select a 📅 Date & ⏰ Time to Check and Book Your Seats 🚀</h4>
            </div>

            <div className='Button'>
              <form className='FormBox'>
                <label>DATE:</label>
                <input 
                  type="date" 
                  onChange={(e) => setSelectedDate(prev => ({ ...prev, [obj.id]: e.target.value }))} 
                />

                <label>TIME:</label>
                <select onChange={(e) => setSelectedTime(prev => ({ ...prev, [obj.id]: e.target.value }))}>
                  {[
                    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
                    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
                    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
                    "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
                    "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM"
                  ].map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </form>

              <button onClick={() => checkSeats(obj.id)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
