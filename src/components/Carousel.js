import React from "react";
// reactstrap components
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
 
} from "reactstrap";

// core components

const items = [
  {
    href: "/christopher-dent/projects",
    src: "https://cjdportfolio.s3.amazonaws.com/ibm.gif",
    altText: "My Coding Projects",
    caption: "coding projects",

  },
  {
    href: "/christopher-dent/about",
    src: "https://cjdportfolio.s3.amazonaws.com/spaceman3.gif",
    altxt: "About Christopher",
    caption: "about christopher",
  },
  {
    href: "/christopher-dent/blog",
    src: "https://cjdportfolio.s3.amazonaws.com/books.gif",
    altText: "My Blog",
    caption: "my blog",
  },
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div id="carousel">
      
    
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {

                  return (
                              
                    
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                     <a href = {item.href}>
                    
                      {/* <img src={item.src} alt={item.altText} width="850" height="500" /> */}
                      <img src={item.src} alt={item.altText} />
                    
                    </a>

                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                       
                    </CarouselItem>
             
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
          
      
      </div>
    </>
  );
}

export default CarouselSection;
