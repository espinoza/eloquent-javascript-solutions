// A program with classic FizzBuzz problem

let f = "", b = "";

for (number = 1; number <= 100; number++) {

	if (number % 3 == 0) f = "Fizz";
  if (number % 5 == 0) b = "Buzz";

	if (f + b == "") {
		console.log(number);
	} else {
	console.log(f + b);
	}

	f = ""; b = "";

}
