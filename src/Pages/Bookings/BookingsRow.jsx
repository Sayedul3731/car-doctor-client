

const BookingsRow = ({ booking, bookings, setBookings }) => {

    const { img, date, service, price, _id, status } = booking;

    const handleDelete = id => {
        const proceed = confirm('You are want to delete?')
        if(proceed){
            fetch(` http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const remaining = bookings.filter(book => book._id !== id)
                    setBookings(remaining)
                }
            })
        }
    }

    const handleBookingConfirm = id => {
        fetch(` http://localhost:5000/bookings/${id}`,{
            method: "PATCH",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: "confirm"})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id )
                const updated = bookings.find(booking => booking._id === id)
                updated.status = 'confirm'
                const newBooking = [updated, ...remaining]
                setBookings(newBooking)
            }
        })
    }

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded-full w-24 h-24">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{service}</div>
                </div>
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                {
                  status === 'confirm' ?  <span className="font-bold text-primary">Confirmed</span>:  <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingsRow;