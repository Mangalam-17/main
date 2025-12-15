function handleClick(event) {
  console.log("Hello there, you are performing click event right now !");
  console.log(event);
}

function onMouseOver() {
  console.log("You are performing on mouse over event right now !");
}

function handleDblClick() {
  console.log("You are performing double cick event right now !");
}

// we dont needa execute the method, because then it will executed only once that too while running

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p onMouseOver={onMouseOver}>
        This paragraph is for handling events and testing to it!
      </p>
      <button onDoubleClick={handleDblClick}>Double Click Me!</button>
    </div>
  );
}
