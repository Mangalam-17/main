export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecorationLine: "line-through",
  };
  let newStyles = {
    fontSize: "18px",
    fontWeight: "900",
  };
  let styles = {
    backgroundColor: "#9d7f1cff",
    height: "27px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
    color: "#0A174E",
  };
  return (
    <div style={styles}>
      <span style={oldStyles}>{oldPrice} INR</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span style={newStyles}>{newPrice} INR</span>
    </div>
  );
}
