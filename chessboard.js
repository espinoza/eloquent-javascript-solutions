// A program that prints a square with chess board style
// for any square size

let size = 8; chessboard = "";

for (i = 1; i <= size; i++) {
  for (j = 1; j <= size; j++) {

		if ((i + j) % 2 == 0) {
			chessboard += " ";
		} else {
			chessboard += "#";
		}

	}
	if (i < size) chessboard += "\n";
}

console.log(chessboard);
