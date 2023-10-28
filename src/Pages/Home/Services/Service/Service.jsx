/* eslint-disable react/prop-types */
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {img, price, title, _id} = service;
    return (
        <div className="card card-compact bg-base-100 border p-6">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="">
                <h2 className=" text-2xl font-bold mt-5">{title}</h2>
                <div className=" flex justify-between mt-5">
                <p className="text-xl font-bold text-[#FF3811]">Price : ${price}</p>
                    <button className="text-[#FF3811] text-2xl"><AiOutlineArrowRight></AiOutlineArrowRight></button>
                </div>
                <div>
                    <Link to={`/checkout/${_id}`}><button className='btn bg-[#FF3811] text-white w-full mt-4'>Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;