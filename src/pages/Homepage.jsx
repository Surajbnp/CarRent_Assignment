import React, { useEffect } from "react";
import style from "../styles/homepage.module.css";
import { useSelector, useDispatch } from "react-redux";
import getCar from "../redux/action";

const Homepage = () => {
  const Cars = useSelector((state) => state?.cars);
  const dispatch = useDispatch();
  console.log(Cars);

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
      <div className={style.content}></div>
      <div className={style.pagination}></div>
    </div>
  );
};

export default Homepage;
