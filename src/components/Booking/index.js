import { TfiSearch } from "react-icons/tfi";

// var date = new Date();
// var day = date.getDate();
// var month = date.getMonth() + 1;
// var year = date.getFullYear();
// var thatDay = day + 3;

// if (month < 10) month = "0" + month;
// if (day < 10) day = "0" + day;

// var today = year + "-" + month + "-" + day;
// var tomorrow = year + "-" + month + "-" + thatDay;
// let fromDate = document.getElementById("fromDate");
// let untilDate = document.getElementById("untilDate");
// fromDate.value = today;
// untilDate.value = tomorrow;
function Booking() {
  return (
    <div className="booking">
      <div className="">
        <form className="setRide">
          <div className="locale">
            <label for="locale">Where</label>
            <input
              type="text"
              id="locale"
              placeholder="City, airport, address or hotel"
              list="location"
            />
            <datalist id="location">
              <option>Current Location</option>
              <option>Los Angeles, CA</option>
              <option>Union Station, Los Angeles</option>
              <option>Sa Jones Norman Mineta Airport</option>
              <option>Sheraton Grand, Los Angeles</option>
              <option>San Francisco, CA</option>
            </datalist>
          </div>
          <div className="from">
            <label for="from">From</label>
            <div>
              <input id="fromDate" type="date" />
              <input type="time" />
            </div>
          </div>
          <div className="until">
            <label for="until">Until</label>
            <div>
              <input id="untilDate" type="date" />
              <input type="time" />
            </div>
          </div>
          <button>
            <TfiSearch />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
