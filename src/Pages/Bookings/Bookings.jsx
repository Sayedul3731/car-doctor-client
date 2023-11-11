import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect, useState} from "react";
import {useContext} from "react"
import BookingsRow from "./BookingsRow";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const axiosSecure = useAxiosSecure()

    // const url = ` http://localhost:5000/bookings?email=${user?.email}`;

    const url = `/bookings?email=${user?.email}`;

    useEffect(() => {
      axiosSecure.get(url)
      .then(res => {
        setBookings(res.data)
      })
    },[url, axiosSecure])
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