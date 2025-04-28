class BankAccount {
    #balance = 0; // приватное поле
    
    deposit(amount) {
      this.#balance += amount;
    }
    
    getBalance() {
      return this.#balance;
    }
  }
  
  const myAccount = new BankAccount();
  myAccount.deposit(1000);
  console.log(myAccount.getBalance());