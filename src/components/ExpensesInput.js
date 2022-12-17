import React from "react";

const ExpensesInput = (props) => {
  
  //just testing getting data from the backend. loads the message from back end after clicking the submit button
//   useEffect(() => {
//     if (!backend) {
//     fetch("http://localhost:5000/")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//     }});

  

  return (
    <div>
      {/*<h1>{data.message}</h1>*/}
      <form>
        <label>Expenses</label>
        <br></br>
        <input type='number' id='annexp'></input>
        <input type='submit' />
      </form>
    </div>
  );
};

export default ExpensesInput;
