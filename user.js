// let numCartItems = 1;

// function getCartStatus(){
//   if (numCartItems) {
//     return "Full"
//   } else return "Empty"
// }

// class Smiley extends React.Component {
//   render(){
//     return (
//     <div>
//         <h1> Your cart </h1>
//         <h2> Status : {getCartStatus()} </h2>
//         </div>
//        )
//   }
// }

// ReactDOM.render(
//   <Smiley />,
//   document.getElementById('root')
// );

let value = false;
let name = "Saurabh"

class Userstatus extends React.Component {
  render(){
    return (
    <div>
        {
          value && <h1> Hey {name} </h1>
        }
        {
          !value && <button> login </button>
        }
      </div>  
    )
  }
}

ReactDOM.render(
<Userstatus/>,
  document.getElementById('root')
   );