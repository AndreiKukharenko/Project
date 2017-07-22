
document.writeln("<p></p>");

var car = {
  color: "red",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 2.2
  },

  state: "running"
};

DFS.depthFirst(car, "wh");

