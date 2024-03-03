class User {
  constructor(
    firstName,
    lastName,
    email,
    password,
    balance = 0.0,
    deposit = 0.0,
    withdraw = 0.0
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.balance = balance;
    this.deposit = deposit;
    this.withdraw = withdraw;
  }
}

const mckay = new User("mckay", "knell", "mckay.com", "1234");

function viewBalance() {
  alert(`your balance is ${mckay.balance}`);
}

function depositCash() {
  const deposit = Number(prompt("How much would you like to deposit?"));

  if (deposit != NaN && deposit >= 0) {
    mckay.balance += deposit;
    mckay.deposit += deposit;
    alert(
      `You have deposited ${deposit}. Your balance is now $${mckay.balance} `
    );
  } else {
    alert("can't deposit negative amount");
  }
}

function withDraw() {
  const withdrawAmount = parseFloat(
    prompt("how much would you like to withdraw?")
  );

  if (
    typeof withdrawAmount === "number" &&
    withdrawAmount <= mckay.balance &&
    withdrawAmount > 0
  ) {
    mckay.withdraw += withdrawAmount;
    mckay.balance -= withdrawAmount;

    alert(
      `you have withdrawn ${withdrawAmount}. your balance is $${mckay.balance}`
    );
  } else {
    alert("you can't do that, you have no Money");
  }
}

function receiptAmount() {
  alert(
    `Thanks for banking with us ${mckay.firstName} ${mckay.lastName}. You've deposited $${mckay.deposit}. you've withdraw $${mckay.withdraw}. You're new balance is $${mckay.balance}`
  );
}

function menu() {
  while (true) {
    const menuInput = prompt(`
      [1] View Balance
      [2] Deposit Money
      [3] Withdraw Money
      [4] Quit`);

    if (menuInput === null) {
      return;
    } else if (menuInput === "1") {
      viewBalance();
    } else if (menuInput === "2") {
      depositCash();
    } else if (menuInput === "3") {
      withDraw();
    } else if (menuInput === "4") {
      receiptAmount();
      return false;
    }
  }
}

function login() {
  const email = prompt("Please enter your email");
  const password = prompt("Please enter your password");

  if (email === mckay.email && password === mckay.password) {
    menu();
  } else {
    alert("Invalid Email or Password");
  }
}
