import parts from "../../../assets/images/about_us/parts.jpg"
import person from "../../../assets/images/about_us/person.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row relative px-5">
                <div className="lg:w-1/2">
                    <img className="w-5/6" src={person} alt="" />
                    <img className="absolute w-1/3 -mt-40 ml-36" src={parts} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <span className="text-[#FF3811] text-2xl font-bold">About Us</span>
                    <h1 className="text-5xl font-bold mt-5">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="mb-7">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;