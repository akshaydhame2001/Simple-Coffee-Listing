import React, { useEffect, useState } from "react";
import StarFill from "../assets/Star_fill.svg";
import Star from "../assets/Star.svg";

const Card = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCardData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="card-container1 mt-8">
      {cardData.map((card) => (
        <article key={card.id} className="relative w-full max-w-[16.25rem]">
          <div>
            {card.popular === true && (
              <div className="inline-block py-1 px-2 rounded-full bg-tagBgClr text-black text-[0.625rem] font-bold absolute top-2 left-2">
                Popular
              </div>
            )}

            <img
              src={card.image}
              alt="coffees"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          <div className="mt-3">
            <div className="flex items-center justify-between">
              <h3 className="text-headingClr text-[1rem] font-bold">
                {card.name}
              </h3>
              <div className="py-[0.1875rem] px-2 rounded bg-priceBgClr text-[0.75rem] font-[600] text-black">
                {card.price}
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between">
              {card.votes > 1 ? (
                <>
                  <div className="flex gap-2 items-center">
                    <img src={StarFill} />
                    <span className="text-[1rem] text-headingClr font-bold">
                      {card.rating}
                    </span>
                    <p className="text-[0.875rem] font-bold text-body">
                      ({card.votes} votes)
                    </p>
                  </div>
                  {card.available === false && (
                    <span className="text-[0.875rem] font-bold text-sold">
                      Sold out
                    </span>
                  )}
                </>
              ) : (
                <div className="flex gap-2 items-center">
                  <img src={Star} />
                  <span className="text-[0.875rem] font-bold text-body">
                    No ratings
                  </span>
                  <p className="opacity-0">Hola</p>
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Card;
