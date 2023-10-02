import React, { useEffect, useState } from "react";
import style from "../styles/homepage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import getCar from "../redux/action";
import CarCard from "../components/CarCard";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Homepage = () => {
  const Cars = useSelector((state) => state?.cars);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let carsToDisplay = Cars?.slice(startIndex, endIndex);
  const [searchText, setSearchText] = useState("");
  const totalPages = Math.ceil(Cars?.length / itemsPerPage);

  // previous page func

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      navigate(`/page/${currentPage}`);
    }
  };

  // next page func

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
      navigate(`/page/${currentPage}`);
    }
  };

  // function for genreating button dynamically

  const generatePaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 10; i++) {
      buttons.push(
        <button
          disabled={i > totalPages}
          key={i}
          className={`${
            i === currentPage ? style.activePage : style.notactive
          }`}
          onClick={() => {
            setCurrentPage(i);
            navigate(`/page/${i}`);
          }}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  // fetching data from JSON server using redux

  useEffect(() => {
    dispatch(getCar());
    navigate(`/page/${currentPage}`)
  }, []);

  let filteredCars = Cars?.filter((car) =>
    car?.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  carsToDisplay = filteredCars?.slice(startIndex, endIndex);

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div>
          <input
            type="search"
            placeholder="Search..."
            onChange={(e) => {
              setSearchText(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>
      <div className={style.content}>
        {carsToDisplay?.length ? (
          carsToDisplay?.map((e, index) => {
            return <CarCard key={index} {...e} />;
          })
        ) : (
          <div className={style.noData}>{"No Data Found! 🙂"}</div>
        )}
      </div>
      <div className={style.pagination}>
        <div className={style.pages}>Total Page</div>
        <div className={style.paginationDiv}>
          <button onClick={prevPage}>{<AiFillCaretLeft />}</button>
          {generatePaginationButtons()}
          <button onClick={nextPage}>{<AiFillCaretRight />}</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
