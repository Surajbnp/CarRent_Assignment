import React, { useEffect, useState } from "react";
import style from "../styles/homepage.module.css";
import { useSelector, useDispatch } from "react-redux";
import getCar from "../redux/action";
import CarCard from "../components/CarCard";

const Homepage = () => {
  const Cars = useSelector((state) => state?.cars);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const carsToDisplay = Cars?.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(getCar());
  }, []);

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className={style.content}>
        {Cars?.length &&
          carsToDisplay?.map((e, index) => {
            return <CarCard key={index} {...e} />;
          })}
      </div>
      <div className={style.pagination}></div>
    </div>
  );
};

export default Homepage;
