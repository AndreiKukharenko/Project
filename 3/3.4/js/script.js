
document.writeln("<p></p>");

var car = {
  color: "red",
  wheels: 4,
  engine: {
    cylinders: {
      count : 4,
      radius : 76,
      height : 86
    },
    size: 2.2
  },

  state: "running"
};

document.writeln(DFS.depthFirst(car, "co"));


