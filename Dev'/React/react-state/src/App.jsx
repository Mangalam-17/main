import "./App.css";
import Ticket from "./Ticket";
import Lottery from "./Lottery";
import { sum } from "./helper";

function App() {
  let winCondition = (ticket) => {
    return ticket[0] === 0 && ticket[1] === 0;
  };
  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
