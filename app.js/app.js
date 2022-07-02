const currentDay = new Date().getDay();
switch (currentDay) {
  case 0:
    console.log("კვირა");

    break;
  case 1:
    console.log("ორშაბათი");

    break;
  case 2:
    console.log("სამშაბათი");

    break;
  case 3:
    console.log("ოთხშაბათი");

    break;
  case 4:
    console.log("ხუთშაბათი");

    break;
  case 5:
    console.log("პარასკევი");

    break;
  case 6:
    console.log("შაბათი");

    break;
}

// 2.
for (let i = 0; i < 99; i++) {
  console.log("you are beautiful", i);
}

//3.

let j = 0;
while (j < 50) {
  console.log(j, `hey`);
  j++;

  //   if (i == "4") {
  //     console.log(i, "break");
  //     break;
  //   }
}

//4.
let t = 0;
do {
  console.log("Great job", t);
  t++;
} while (t < 150);

//5.
let myArr = [];
let i = 0;
let myArrLength = myArr.length;
myArr.push(i * i);
console.log(myArr);

for (let i = 0; i < 1000; i++) {
  console.log(myArr, i, "stop");
}
