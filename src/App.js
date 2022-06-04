import React from 'react';
import './App.css';
import {Header} from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/incomeExpenses';
import { TransactionList } from './components/transactionList';
import { AddTransaction} from './components/AddTransaction';
import { GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
     <Header />
     <div className='container'>
       <Balance />
     </div>
     <div className='container'>
       <IncomeExpenses />      
     </div>
     <div className='container'>
       <TransactionList />
     </div>
     <div>
       <AddTransaction />
     </div>
    </GlobalProvider>
  );
}

export default App;
