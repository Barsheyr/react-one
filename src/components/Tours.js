import React from "react";
import { tours } from "../data";
import Title from "./Title";

function Tours() {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="Featured" subtitle="tours" />

        <div className="section-center featured-center">
          {tours.map((tour) => {
            const { id, image, title, date, text, location, duration, cost } =
              tour;
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt={title} />
                  <p className="tour-date"> {date} </p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4> {title} </h4>
                  </div>
                  <p>{text}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {location}
                    </p>
                    <p> {duration} </p>
                    <p> `$from {cost}`</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      ;
    </div>
  );
}

export default Tours;
