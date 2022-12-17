import React from "react";

const AnnualIncome = (props) => {
  return (
    <div>
      <form>
        <label>Annual Income</label>
        <br></br>
        <input type='number' id='anninc'></input>
        <input type='submit' />
      </form>
    </div>
  );
};

export default AnnualIncome;
