import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect, useState} from "react";
import {useContext} from "react"
import BookingsRow from "./BookingsRow";
import axios from "axios";


const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
      axios.get(url, {withCredentials: true})
      .then(res => {
        setBookings(res.data)
      })
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setBookings(data))
    },[url])
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Services</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {
            bookings.map(booking => <BookingsRow
                 key={booking._id} 
                 booking={booking}
                 bookings={bookings}
                 setBookings={setBookings}
                 ></BookingsRow>)
          }
          </tbody>
          
        </table>
      </div>
    );
};

export default Bookings;