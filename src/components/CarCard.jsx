import React from "react";
import style from "../styles/carcard.module.css";
import {
  BsPeople,
  BsFuelPumpDiesel,
  BsSpeedometer,
  BsFillCarFrontFill,
} from "react-icons/bs";

const CarCard = ({
  name,
  fuel_type,
  model_year,
  seating_capacity,
  type,
  rent_price,
  image,
  mileage,
}) => {
  return (
    <div className={style.cardCont}>
      <div className={style.image}>
        <img src={image} width={"100%"} height={"100%"} alt="" />
      </div>
      <div className={style.info}>
        <div className={style.name}>
          <p>{name}</p>
          <div>{model_year}</div>
        </div>
        <div className={style.specifications}>
          <div>
            <BsPeople size={"22px"} />
            <p>{`${seating_capacity} People`}</p>
          </div>
          <div>
            <BsFuelPumpDiesel size={"22px"} />
            <p>{fuel_type}</p>
          </div>
          <div>
            <BsSpeedometer size={"22px"} />
            <p>{mileage}</p>
          </div>
          <div>
            <BsFillCarFrontFill size={"22px"} />
            <p>{type}</p>
          </div>
        </div>
        <div className={style.rate}>
          <p>{rent_price}</p>
          <button>Rent now</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
