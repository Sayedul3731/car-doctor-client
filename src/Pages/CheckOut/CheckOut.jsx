import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react"
import Swal from "sweetalert2";

const CheckOut = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthContext)
    const { title, price,_id,img } = service;

    const handleCheckout = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price
        }
        console.log(booking);
        fetch(' http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Confirm!',
                    'Your Booking has been confirmed.',
                    'success'
                  )
            }
        })

    }
    return (
        <div>
            <h1>Book Services: {title} </h1>

            <form onSubmit={handleCheckout} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name"  className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="number" name="price" defaultValue={price}  className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <textarea name="text" className="shadow-md mt-5 p-5 rounded-xl" id="" placeholder="Your Message" cols="30" rows="5"></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-block bg-[#FF3811] text-white" type="submit" value="Order confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;