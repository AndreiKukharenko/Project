
document.writeln("<p></p>");

var car = {
  color: "red",
  wheels: 4,
  engine: {
    cylinders: {
      count : 4, //engine.cylinders.count
      radius : {
        76 : 90
      },
      height : [86, 8, 8]
    },
    size: 2.2
  },

  state: "stopped"
};

document.writeln(DFS.depthFirst(car, "6"));
document.writeln(DFS.depthFirst(car, "o"));


            /*[{
              key:'abc'.
              value:'78',
              type:'key'  
           },{
              key:'ac',
              value:'78b',
              type:'value'  
           }]*/