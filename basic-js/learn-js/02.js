// logs
// comments
// variables
// data types
// function[1. normal IIFS arraw function variable functions... map filter reduces, ]

// operators

// normal

function nameFunction() {
  //function delarations
  console.log("welcome to function normal");
}

// function --- predefined keyword
// nameFunction() --- function name

// function call
// nameFunction();
// WelcomeComeTo class TestName
// name_function

function waterTank() {
  //tank
  var name = "sonabar";
  // conditions operators
  //   1. equal operator
  //   2. NOT operator
  //   3. AND operator
  //   4. OR operator
  if (name !== "sufiyan") {
    console.log("successfully sufiyan feched");
  } else if (name !== "sonabar") {
    console.log("successfully sonabar feched");
  } else {
    console.log("invalid name");
  }

  const isAdmin = false;
  if (isAdmin == true && typeof isAdmin == "boolean") {
    console.log("is your a admin");
  } else {
    console.log("Access Denied");
  }

  const isOfficer = true;
  if (isOfficer == isAdmin || typeof isOfficer == "boolean") {
    console.log("is your a officer");
  } else {
    console.log("Access Denied");
  }
}

// waterTank(); // Null

// code reuseablities
// easy to understand
// code is break into small pices

// services
// Priciple
// hod
// stuff
// directors
// students

// function access -> 1,. priciple 2, hod 3,diectors access denied

const person = ["priciple", "hod", "stuff", "director", "student"];

function dataBaseSoftware() {
  console.log("software");

  for (const p of person) {
    if (p == "priciple" || p == "hod" || p == "director") {
      console.log("Welcome College dataBase");
    } else {
      console.log("access denied");
    }
  }
}

dataBaseSoftware();
