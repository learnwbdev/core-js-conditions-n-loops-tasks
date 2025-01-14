/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  let isNumberPositive;
  if (number >= 0) {
    isNumberPositive = true;
  } else {
    isNumberPositive = false;
  }
  return isNumberPositive;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let maxNumber;
  if (a > b && a > c) {
    maxNumber = a;
  } else if (b > a && b > c) {
    maxNumber = b;
  } else {
    maxNumber = c;
  }
  return maxNumber;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let isOnStraightLine;
  if (queen.x === king.x || queen.y === king.y) {
    isOnStraightLine = true;
  } else if (king.x - queen.x === king.y - queen.y) {
    isOnStraightLine = true;
  } else if (king.x - queen.x === -(king.y - queen.y)) {
    isOnStraightLine = true;
  } else {
    isOnStraightLine = false;
  }
  return isOnStraightLine;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let isTriangle;
  let isIsosceles;
  if (a + b > c && a + c > b && b + c > a) {
    isTriangle = true;
  } else {
    isTriangle = false;
  }
  if (isTriangle && (a === b || a === c || b === c)) {
    isIsosceles = true;
  } else {
    isIsosceles = false;
  }
  return isIsosceles;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let romanNumeralStr = '';
  const onesInNum = num % 10;
  const tensInNum = (num - onesInNum) / 10;
  for (let eachTen = 1; eachTen <= tensInNum; eachTen += 1) {
    romanNumeralStr += 'X';
  }

  if (onesInNum === 4) {
    romanNumeralStr += 'IV';
  } else if (onesInNum === 9) {
    romanNumeralStr += 'IX';
  } else {
    let onesToAdd;
    if (onesInNum >= 5) {
      romanNumeralStr += 'V';
      onesToAdd = onesInNum - 5;
    } else {
      onesToAdd = onesInNum;
    }
    for (let eachOne = 1; eachOne <= onesToAdd; eachOne += 1) {
      romanNumeralStr += 'I';
    }
  }
  return romanNumeralStr;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let numberInWords = '';
  let curStrPos = 0;
  while (curStrPos < numberStr.length) {
    if (curStrPos > 0) {
      numberInWords += ' ';
    }
    const curNumber = numberStr[curStrPos];
    switch (curNumber) {
      case '-':
        numberInWords += 'minus';
        break;
      case '0':
        numberInWords += 'zero';
        break;
      case '1':
        numberInWords += 'one';
        break;
      case '2':
        numberInWords += 'two';
        break;
      case '3':
        numberInWords += 'three';
        break;
      case '4':
        numberInWords += 'four';
        break;
      case '5':
        numberInWords += 'five';
        break;
      case '6':
        numberInWords += 'six';
        break;
      case '7':
        numberInWords += 'seven';
        break;
      case '8':
        numberInWords += 'eight';
        break;
      case '9':
        numberInWords += 'nine';
        break;
      case '.':
      case ',':
        numberInWords += 'point';
        break;
      default:
        break;
    }
    curStrPos += 1;
  }
  return numberInWords;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let isStrPalidrome = true;
  let curPosFromStart = 0;
  let curPosFromEnd = str.length - 1;
  while (isStrPalidrome && curPosFromStart < curPosFromEnd) {
    const isDifferentLetters = str[curPosFromStart] !== str[curPosFromEnd];
    if (isDifferentLetters) {
      isStrPalidrome = false;
    }
    curPosFromStart += 1;
    curPosFromEnd -= 1;
  }
  return isStrPalidrome;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let idxLetterInStr = -1;
  let curPos = 0;
  while (curPos < str.length && idxLetterInStr === -1) {
    if (str[curPos] === letter) {
      idxLetterInStr = curPos;
    }
    curPos += 1;
  }
  return idxLetterInStr;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let isDigitInNum = false;
  let croppedNum = num;
  do {
    const lastDigit = croppedNum % 10;
    if (lastDigit === digit) {
      isDigitInNum = true;
    }
    croppedNum = (croppedNum - lastDigit) / 10;
  } while (!isDigitInNum && croppedNum !== 0);
  return isDigitInNum;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let idxBalancePoint = -1;
  let isBalancePoint = false;

  let sumAllArray = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sumAllArray += arr[i];
  }

  const isBalanceIdxNotZero = (balanceIdx) => {
    return balanceIdx !== 0;
  };

  let curPos = 0;
  let sumLeft = 0;
  let sumRight = sumAllArray;
  while (!isBalancePoint && curPos < arr.length) {
    sumRight -= arr[curPos];
    if (sumLeft === sumRight) {
      idxBalancePoint = curPos;
      if (isBalanceIdxNotZero(idxBalancePoint)) {
        isBalancePoint = true;
      }
    }
    sumLeft += arr[curPos];
    curPos += 1;
  }

  return idxBalancePoint;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const createZeroSquareMatrix = (matrixSize) => {
    const zeroSquareMatrix = [];
    for (let i = 0; i < matrixSize; i += 1) {
      const matrixRow = [];
      for (let j = 0; j < matrixSize; j += 1) {
        matrixRow[j] = 0;
      }
      zeroSquareMatrix[i] = matrixRow;
    }
    return zeroSquareMatrix;
  };

  const dirMoveRght = [1, 0];
  const dirMoveLeft = [-1, 0];
  const dirMoveDown = [0, 1];
  const dirMoveUp = [0, -1];
  const isMoveRight = (deltaForCol) => {
    return deltaForCol === dirMoveRght[0];
  };
  const isMoveLeft = (deltaForCol) => {
    return deltaForCol === dirMoveLeft[0];
  };
  const isMoveDown = (deltaForRow) => {
    return deltaForRow === dirMoveDown[1];
  };
  const isMoveUp = (deltaForRow) => {
    return deltaForRow === dirMoveUp[1];
  };

  const isReachWall = (idxWall, idxCur) => {
    return idxCur === idxWall;
  };

  const spiralMatrix = createZeroSquareMatrix(size);
  let curNumber = 1;
  let leftWall = 0;
  let rghtWall = size - 1;
  let topWall = 0;
  let btmWall = size - 1;
  let idxRow = topWall;
  let idxCol = leftWall;
  let [deltaCol, deltaRow] = dirMoveRght;
  while (rghtWall >= leftWall && btmWall >= topWall) {
    spiralMatrix[idxRow][idxCol] = curNumber;
    curNumber += 1;
    if (isMoveRight(deltaCol) && isReachWall(rghtWall, idxCol)) {
      [deltaCol, deltaRow] = dirMoveDown;
      topWall += 1;
    } else if (isMoveDown(deltaRow) && isReachWall(btmWall, idxRow)) {
      [deltaCol, deltaRow] = dirMoveLeft;
      rghtWall -= 1;
    } else if (isMoveLeft(deltaCol) && isReachWall(leftWall, idxCol)) {
      [deltaCol, deltaRow] = dirMoveUp;
      btmWall -= 1;
    } else if (isMoveUp(deltaRow) && isReachWall(topWall, idxRow)) {
      [deltaCol, deltaRow] = dirMoveRght;
      leftWall += 1;
    }
    idxRow += deltaRow;
    idxCol += deltaCol;
  }
  return spiralMatrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const transposeMatrix = (matrixOriginalRef) => {
    const matrixTrans = matrixOriginalRef;
    const matrixSize = matrixTrans.length;
    for (let iRow = 1; iRow < matrixSize; iRow += 1) {
      for (let jCol = 0; jCol < iRow; jCol += 1) {
        const valBuffer = matrixTrans[iRow][jCol];
        matrixTrans[iRow][jCol] = matrixTrans[jCol][iRow];
        matrixTrans[jCol][iRow] = valBuffer;
      }
    }
  };

  const swapMatrixColumns = (matrixTransposedRef) => {
    const matrixSwapCol = matrixTransposedRef;
    const matrixSize = matrixSwapCol.length;
    const numColToCenter = (matrixSize - (matrixSize % 2)) / 2;
    for (let jCol = 0; jCol < numColToCenter; jCol += 1) {
      for (let iRow = 0; iRow < matrixSize; iRow += 1) {
        const valBuffer = matrixSwapCol[iRow][jCol];
        matrixSwapCol[iRow][jCol] = matrixSwapCol[iRow][matrixSize - 1 - jCol];
        matrixSwapCol[iRow][matrixSize - 1 - jCol] = valBuffer;
      }
    }
  };

  const matrixRotated = matrix;
  transposeMatrix(matrixRotated);
  swapMatrixColumns(matrixRotated);
  return matrixRotated;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const swapElemVals = (arrayToSort, idx1, idx2) => {
    const arrRef = arrayToSort;
    if (idx1 === idx2 || arrRef[idx1] === arrRef[idx2]) {
      return;
    }
    const buffer = arrRef[idx1];
    arrRef[idx1] = arrRef[idx2];
    arrRef[idx2] = buffer;
  };
  const getIndicesPivotLeftRght = (
    arrayToSort,
    pivotVal,
    leftEndIdx,
    rghtEndIdx
  ) => {
    const arrRef = arrayToSort;
    let leftPivotPnt = leftEndIdx;
    let rghtPivotPnt = leftEndIdx;
    let upperPointer = rghtEndIdx;
    while (rghtPivotPnt <= upperPointer) {
      const curRghtElem = arrRef[rghtPivotPnt];
      if (curRghtElem < pivotVal) {
        swapElemVals(arrRef, rghtPivotPnt, leftPivotPnt);
        leftPivotPnt += 1;
        rghtPivotPnt += 1;
      } else if (curRghtElem > pivotVal) {
        swapElemVals(arrRef, rghtPivotPnt, upperPointer);
        upperPointer -= 1;
      } else {
        rghtPivotPnt += 1;
      }
    }
    return [leftPivotPnt, rghtPivotPnt];
  };
  const quickSort = (arrayToSort, leftEndIdx, rghtEndIdx) => {
    if (leftEndIdx >= rghtEndIdx) {
      return;
    }
    const arrRef = arrayToSort;
    const pivotVal = arrRef[rghtEndIdx];
    const [leftPivotPnt, rghtPivotPnt] = getIndicesPivotLeftRght(
      arrRef,
      pivotVal,
      leftEndIdx,
      rghtEndIdx
    );
    quickSort(arrRef, leftEndIdx, leftPivotPnt - 1);
    quickSort(arrRef, rghtPivotPnt, rghtEndIdx);
  };

  quickSort(arr, 0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const getCycleReplacements = (stringArr) => {
    const strLength = stringArr.length;
    const oddShift = strLength - Math.floor(strLength / 2);
    const getReplacementIdx = (curIdx) => {
      return curIdx < oddShift ? curIdx * 2 : (curIdx - oddShift) * 2 + 1;
    };

    const arrCycles = [];
    let maxCycleSize = 0;
    const replacedInds = new Set();
    let arrIdx = 0;
    let startIdx = strLength - 1;
    let maxIdxReplaced = startIdx;
    while (replacedInds.size < strLength - 1) {
      let curIdx = startIdx;
      let newValueIdx = getReplacementIdx(curIdx);
      const replCycle = [];
      let cycleIdx = 0;
      while (newValueIdx !== startIdx) {
        replacedInds.add(curIdx);
        replCycle[cycleIdx] = curIdx;
        curIdx = newValueIdx;
        newValueIdx = getReplacementIdx(curIdx);
        cycleIdx += 1;
      }
      replacedInds.add(curIdx);
      replCycle[cycleIdx] = curIdx;
      arrCycles[arrIdx] = replCycle;
      const curCycleSize = replCycle.length;
      maxCycleSize = curCycleSize > maxCycleSize ? curCycleSize : maxCycleSize;

      if (replacedInds.size === strLength - 1) {
        break;
      }
      startIdx = maxIdxReplaced - 1;
      while (replacedInds.has(startIdx) && startIdx >= 0) {
        startIdx -= 1;
      }
      maxIdxReplaced = startIdx;
      arrIdx += 1;
    }

    return [arrCycles, maxCycleSize];
  };

  const shuffleOnce = (stringSplitInArray, arrCycles) => {
    const stringArr = stringSplitInArray;
    for (let i = 0; i < arrCycles.length; i += 1) {
      const replCycle = arrCycles[i];
      let j = 0;
      let curIdx = replCycle[j];
      const bufferVal = stringArr[curIdx];
      for (j = 1; j < replCycle.length; j += 1) {
        const replIdx = replCycle[j];
        stringArr[curIdx] = stringArr[replIdx];
        curIdx = replIdx;
      }
      stringArr[curIdx] = bufferVal;
    }

    return stringArr;
  };

  let stringArr = str.split('');
  const [arrCycles, maxCycleSize] = getCycleReplacements(stringArr);
  const iterationsToDo = iterations % maxCycleSize;
  for (let i = 0; i < iterationsToDo; i += 1) {
    stringArr = shuffleOnce(stringArr, arrCycles);
  }

  let shuffledStr = '';
  let i = 0;
  while (i < stringArr.length) {
    shuffledStr += stringArr[i];
    i += 1;
  }

  return shuffledStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  if (number < 10) {
    return number;
  }
  const numberToDigitsArr = (numberToParse) => {
    const digits = [];
    let remainder = numberToParse;
    let arrIdx = 0;
    const base = 10;
    while (remainder >= base) {
      const digit = remainder % base;
      digits[arrIdx] = digit;
      remainder = (remainder - digit) / base;
      arrIdx += 1;
    }
    digits[arrIdx] = remainder;
    return digits;
  };
  const getIdxDigitToChange = (digitsArr) => {
    let i = 1;
    let maxPrevDigits = digitsArr[0];
    let idxMaxPrevDigit = 0;
    while (i < digitsArr.length && digitsArr[i] >= maxPrevDigits) {
      if (digitsArr[i] > maxPrevDigits) {
        maxPrevDigits = digitsArr[i];
        idxMaxPrevDigit = i;
      }
      i += 1;
    }
    const idxDigitToChange = i === digitsArr.length ? -1 : i;
    return [idxDigitToChange, idxMaxPrevDigit];
  };
  const replaceDigitToChange = (digitsArr, idxToChange, idxMaxPrev) => {
    const digits = digitsArr;
    const digitToChange = digits[idxToChange];
    let idxToNewDigit = idxMaxPrev;
    for (let j = 0; j < idxToChange; j += 1) {
      if (digits[j] < digits[idxToNewDigit] && digits[j] > digitToChange) {
        idxToNewDigit = j;
      }
    }
    digits[idxToChange] = digits[idxToNewDigit];
    digits[idxToNewDigit] = digitToChange;
    return digits;
  };
  const digits = numberToDigitsArr(number);
  const [idxToChange, idxMaxPrev] = getIdxDigitToChange(digits);
  const isNoLargest = idxToChange === -1;
  if (isNoLargest) {
    return number;
  }
  replaceDigitToChange(digits, idxToChange, idxMaxPrev);
  const digitsUnchanged = digits.filter((_, idx) => idx >= idxToChange);
  const digitsToSort = digits.filter((_, idx) => idx < idxToChange);
  digitsToSort.sort((a, b) => b - a);
  const newNumberDigits = [...digitsToSort, ...digitsUnchanged];
  let newNumber = 0;
  const base = 10;
  for (let i = 0; i < newNumberDigits.length; i += 1) {
    newNumber += newNumberDigits[i] * base ** i;
  }

  return newNumber;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
