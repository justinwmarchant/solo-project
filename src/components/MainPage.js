import React, { useState } from "react";
// import ExpensesInput from "./ExpensesInput";
//import AnnualIncome from "./AnnualIncome";

const MainPage = (props) => {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [principal, setPrincipal] = useState(0);
  const [returnOnInvestment, setReturnOnInvestment] = useState(5);
  const [safeWithdrawal, setSafeWithdrawal] = useState(4);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //setBackend(false)
  };

  return (
    
    <div className='main-page-display'>
      <h1>When will I be free?</h1>
      <form onSubmit={formSubmitHandler}>
        <label>Well let's see...</label>
        <div>
            <label htmlFor="monthly-income">Monthly Take-Home Income</label>
          <input
            value={monthlyIncome}
            type='number'
            name='monthly-income'
            onChange={(e) => setMonthlyIncome(e.target.value)}
          />
        </div>
        <div>
          <input
            value={monthlyExpenses}
            type='number'
            name='monthly-expenses'
            onChange={(e) => setMonthlyExpenses(e.target.value)}
          />
        </div>
        <div>
          <input
            value={principal}
            type='number'
            name='principal'
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div>
          <input
            value={returnOnInvestment}
            type='number'
            name='monthly-income'
            onChange={(e) => setReturnOnInvestment(e.target.value)}
          />
        </div>
        <div>
          <input
            value={safeWithdrawal}
            type='number'
            name='monthly-income'
            onChange={(e) => setSafeWithdrawal(e.target.value)}
          />
        </div>
        <button type='submit'>Click Me!</button>
      </form>
    </div>
  );
};

export default MainPage;
