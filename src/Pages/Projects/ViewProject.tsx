import { useState } from "react";

const slides = ['https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880700/ola/c68wyxdjtpiulaqaccma.jpg', 'https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880697/ola/pwx04uxflrcxmzwruxnr.jpg', 'https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880700/ola/c68wyxdjtpiulaqaccma.jpg', 'https://64.media.tumblr.com/139152f8a52760bbc53b9be439194eb4/tumblr_pw4pecjMWA1sfa5q9o1_500.jpg', 'https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880691/ola/uxzigcrb3dafjuhrsh98.jpg']

export default function ViewProject () {

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
      if (current === 0) setCurrent(slides.length - 1);
      else setCurrent(current - 1);
    };
  
    let nextSlide = () => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    };


    return(
        <div className="flex my-[25%] sm:my-[10%] lg:my-[5%]" >
            <div className='carousel-wrapper px-2 mx-auto flex'>      
                <button onClick={previousSlide}> &lt; </button>
                <div className="overflow-hidden relative max-w-full md:max-w-screen-md mx-8">
                    <div className={`flex transition ease-out duration-40`} style={{ transform: `translateX(-${current * 100}%)`}}>                       
                        <img className="carousel-image" src="https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880700/ola/c68wyxdjtpiulaqaccma.jpg" />
                        <img className="carousel-image" src="https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880697/ola/pwx04uxflrcxmzwruxnr.jpg" />
                        <img className="carousel-image" src="https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880700/ola/c68wyxdjtpiulaqaccma.jpg" />
                        <img className="vertical carousel-image" src="https://64.media.tumblr.com/139152f8a52760bbc53b9be439194eb4/tumblr_pw4pecjMWA1sfa5q9o1_500.jpg" />
                        <img className="carousel-image" src="https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880691/ola/uxzigcrb3dafjuhrsh98.jpg" />
                    </div>
                </div>
                <button onClick={nextSlide}>&gt;</button>
            </div>
        </div>
    )
}




