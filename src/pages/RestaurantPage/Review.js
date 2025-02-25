import React, {useRef} from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

function Review() {

    const scrollAmount= 5; // Scroll speed (higher = faster)
  const scrollContainer = useRef();
  let scrollInterval;

  const handleScrole = (direction) => {
    stopScrolling(); // Stop any existing scrolling
    scrollInterval = setInterval(() => {
      scrollContainer.current.scrollLeft += direction * scrollAmount;
    }, 10); // Adjust interval speed if needed
  };

  // Function to stop scrolling
  function stopScrolling() {
    clearInterval(scrollInterval);
  }

  const reviews = [
    {
      name: "Favour",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturiquo blanditiis a fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo blanditiis a fuga!",
      date: "24 september 2024",
      location: "South London",
      img: require("../../public/Ellipse 3.png"),
    },
    {
      name: "Favour",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturiquo blanditiis a fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo blanditiis a fuga!",
      date: "24 september 2024",
      location: "South London",
      img: require("../../public/Ellipse 3.png"),
    },
    {
      name: "Favour",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturiquo blanditiis a fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo blanditiis a fuga!",
      date: "24 september 2024",
      location: "South London",
      img: require("../../public/Ellipse 3.png"),
    },
    {
      name: "Favour",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturiquo blanditiis a fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo blanditiis a fuga!",
      date: "24 september 2024",
      location: "South London",
      img: require("../../public/Ellipse 3.png"),
    },
  ];

  return (
    <div className="review-con">
      <div className="review">
        <section>
          <h2>Customer reviews</h2>
          <div>
            <span onMouseOver={()=>handleScrole(-1)} onMouseOut={()=>stopScrolling()}><AiOutlineArrowLeft size={20}/></span>
            <span onMouseOver={()=>handleScrole(1)} onMouseOut={()=>stopScrolling()}><AiOutlineArrowRight size={20}/></span>
          </div>
        </section>
        <main ref={scrollContainer}>
          {reviews.map((value) => {
            return (
              <div>
                <section>
                  <img src={value.img} alt="user" width={"50px"} />
                  <i></i>
                  <div>
                    <p><b>{value.name}</b></p>
                    <p style={{color:'#fc8a06'}}>{value.location}</p>
                  </div>
                </section>
                <p>{value.review}</p>
              </div>
            );
          })}
        </main>
        <article><img src={require("../../public/Rectangle 62.png")} width={'90px'}/></article>
      </div>
    </div>
  );
}

export default Review;
