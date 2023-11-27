import { useState, useEffect, useRef } from "react";
export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{ padding: "40px" }}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}
function usePrevious(val) {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  for (let i = 0; i < daysOfWeek.length; i++) {
    if (daysOfWeek[i] === val && i === 0) {
      return daysOfWeek[daysOfWeek.length - 1]
    } else if (daysOfWeek[i] === val && i !== 0) {
      return daysOfWeek[i - 1]
    }
  }
}

// or
// function usePrevious(val) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = val;
//   }, [val]);
//   return ref.current;
// }
