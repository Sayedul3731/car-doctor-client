import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {
    
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className="text-2xl font-bold text-[#FF3811] text-center">Service</h1>
            <h1 className="text-5xl font-bold text-center">Our Service Area</h1>
            <p className="text-center mt-5 mb-7">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do  not look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pb-10">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;