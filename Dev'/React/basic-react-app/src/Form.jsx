function handleFormSubmit(event) {
  event.preventDefault();
  console.log("form was submitted");
}

export default function formEvent() {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input placeholder="Enter something" />
        <button>Submit</button>
      </form>
    </div>
  );
}
