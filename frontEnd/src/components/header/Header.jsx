import "./header.css";
import { FaBed, FaTaxi } from "react-icons/fa";
import { MdFlightTakeoff, MdHotel, MdPerson } from "react-icons/md";
import { AiOutlineCalendar, AiOutlineCar } from "react-icons/ai";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

function Header({ type }) {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    // dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className="outHeader">
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <MdHotel />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <MdFlightTakeoff />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <AiOutlineCar />
              <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
              <MdHotel />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FaTaxi />
              <span>Airport taxis</span>
            </div>
          </div>
          {/* condition to change what to show in Home and List page */}
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                A lifetime of discounts? It's Genius
              </h1>
              <p className={user ? "headerDesc up" : "headerDesc"}>
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Booking.com account
              </p>
              {!user && (
                <button className="headerBtn">Sign in / Register</button>
              )}
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FaBed className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="headerSearchItem">
                  <AiOutlineCalendar className="headerIcon" />
                  <span
                    className="headerSearchText"
                    onClick={() => setOpenDate(!openDate)}
                  >
                    {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                      dates[0].endDate,
                      "MM/dd/yyyy"
                    )}`}
                  </span>
                  {openDate && (
                    <div className="forCalender">
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        minDate={new Date()}
                        ranges={dates}
                        className="date"
                      />
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <MdPerson className="headerIcon" />
                  <span
                    className="headerSearchText"
                    onClick={() => setOpenOptions(!openOptions)}
                  >
                    {`${options.adult} adult . ${options.children} children . ${options.room} room`}
                  </span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            disabled={options.adult <= 1}
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">children</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            disabled={options.children <= 0}
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            disabled={options.room <= 1}
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="hBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
