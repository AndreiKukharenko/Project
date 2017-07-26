
document.writeln("<p></p>");

var car = {
  color: "red",
  wheels: 4,
  engine: {
    cylinders: {
      count : 4, 
      radius : {
        76 : 90
      },
      height : [86, 8, 8]
    },
    size: 2.2,
    new : [12,'23ii423', {aiibc:10}, ['test', 'piing']],
  },

  state: "stopped"
};

document.writeln(DFS.depthFirst(car, "ii"));
document.writeln(DFS.depthFirst(car, "o"));
