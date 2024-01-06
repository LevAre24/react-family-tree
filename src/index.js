import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tree from './Tree/Tree';
import registerServiceWorker from './registerServiceWorker';

/*
empty person
person: {
    id: "",
    name: "",
    partners: [""],
    children: {spouse: [""]}
  }
*/

var leviTree = {
  papa: {
    id: "papa",
    name: "Oscar Najera",
    partners: ["mama"],
    children: {mama: ["chino", "chacho", "patty", "pt", "rosie"]}
  },
  mama: {
    id: "mama",
    name: "Particia Najera",
  },
  chino: {
    id: "chino",
    name: "Oscar Najera",
    partners: ["shirley"],
    children: {shirley: ["nicole"]}
  },
  shirley: {
    id: "shirley",
    name: "Shirley Najera"
  },
  nicole: {
    id: "nicole",
    name: "Nicole Najera"
  },
  chacho: {
    id: "chacho",
    name: "Cesar Najera",
    partners: ["luz"],
    children: {luz: ["monica", "sebas"]}
  },
  luz: {
    id: "luz",
    name: "Luz",
  },
  monica: {
    id: "monica",
    name: "Monica Najera"
  },
  sebas: {
    id: "sebas",
    name: "Sebasatian Najera"
  },
  patty: {
    id: "patty",
    name: "Patricia Najera",
    partners: ["jose"],
    children: {jose: ["levi", "aerostar"]}
  },
  jose: {
    id: "jose",
    name: "Jose Arencibia"
  },
  levi: {
    id: "levi",
    name: "Levi Arencibia"
  },
  aerostar: {
    id: "aerostar",
    name: "Jose Arencibia"
  },
  pt: {
    id: "pt",
    name: "Israel Najera",
    partners: ["yen"],
    children: {yen: ["mateo"]}
  },
  yen: {
    id: "yen",
    name: "Yen Najera"
  },
  mateo: {
    id: "mateo",
    name: "Mateo Najera"
  },
  rosie: {
    id: "rosie",
    name: "Rosie Fernandez",
    partners: ["adrian"],
    children: {adrian: ["tati", "ian"]}
  },
  adrian: {
    id: "adrian",
    name: "Adrian Fernandez"
  },
  tati: {
    id: "tati",
    name: "Tatiana Pina"
  },
  ian: {
    id: "ian",
    name: "Ian Fernandez"
  }
}

// var simpsonsTree = {
//   abe: {
//     id: "abe",
//     name: "Abraham J. (Grandpa) Simpson",
//     partners: ["unknown", "mona"],
//     children: {unknown: ["herb"], mona: ["homer"]}
//   },
//   unknown: {id:"unknown", name: "???"},
//   mona: {id:"mona", name: "Mona Penelope Simpson (née Olsen)"},
//   herb: {id:"herb", name: "Herbert (Herb) Powell"},
//   homer: {
//     id:"homer",
//     name: "Homer Jay Simpson",
//     partners: ["marge"],
//     children: {marge: ["bart", "lisa", "maggie"]}
//   },
//   marge: {id:"marge", name: "Marjorie (Marge) Simpson (née Bouvier)"},
//   bart: {id:"bart", name: "Bartholomew (Bart) JoJo Simpson"},
//   lisa: {
//     id:"lisa",
//     name: "Lisa Marie Simpson",
//     partners: ["millhouse"],
//     children: {millhouse: ["millhouse_jr"]}
//   },
//   maggie: {id:"maggie", name: "Margaret (Maggie) Eve Simpson"},
//   millhouse: {id:"millhouse", name: "Millhouse Van Houten"},
//   millhouse_jr: {id:"millhouse_jr", name: "Millhouse Van Houten Jr."}
// };

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);


root.render(
  <Tree
    root = 'papa'
    datalist = {JSON.parse(JSON.stringify(leviTree))} />,
);

registerServiceWorker();
