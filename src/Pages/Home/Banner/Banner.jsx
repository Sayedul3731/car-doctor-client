import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute w-1/2 rounded-xl text-white h-full  gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-24 pt-28">
                    <h2 className="text-6xl font-bold mb-8">Affordable <br /> Price For Car <br /> Servicing</h2>
                    <p className="mb-8">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="gap-5">
                        <button className="btn border-[#FF3811] bg-[#FF3811] text-white mr-5">Discover More</button>
                        <button className="btn btn-outline text-white border-white"> Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute w-1/2 rounded-xl text-white h-full  gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-24 pt-28">
                    <h2 className="text-6xl font-bold mb-8">Affordable <br /> Price For Car <br /> Servicing</h2>
                    <p className="mb-8">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="gap-5">
                        <button className="btn border-[#FF3811] bg-[#FF3811] text-white mr-5">Discover More</button>
                        <button className="btn btn-outline text-white border-white"> Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
               <img src={img3} className="w-full rounded-xl" />
                <div className="absolute w-1/2 rounded-xl text-white h-full  gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-24 pt-28">
                    <h2 className="text-6xl font-bold mb-8">Affordable <br /> Price For Car <br /> Servicing</h2>
                    <p className="mb-8">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="gap-5">
                        <button className="btn border-[#FF3811] bg-[#FF3811] text-white mr-5">Discover More</button>
                        <button className="btn btn-outline text-white border-white"> Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
               <img src={img4} className="w-full rounded-xl" />
                <div className="absolute w-1/2 rounded-xl text-white h-full  gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-24 pt-28">
                    <h2 className="text-6xl font-bold mb-8">Affordable <br /> Price For Car <br /> Servicing</h2>
                    <p className="mb-8">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="gap-5">
                        <button className="btn border-[#FF3811] bg-[#FF3811] text-white mr-5">Discover More</button>
                        <button className="btn btn-outline text-white border-white"> Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;