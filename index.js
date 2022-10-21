function imgSrcMod(imgNum, pngNum) { //ez funkció megváltoztatja a cél kép elem forrását
  document.querySelector(".img" + imgNum).setAttribute("src", "images/" + pngNum + ".png");
}

function result(text) { //ez a funkció kiírja az eredményt
  document.querySelector("h2").innerHTML = text;
}

function spin(imgN, delay) { //ez a funkció pörgeti a képeket mintha sorsolás lenne
  setTimeout(function() {
    imgSrcMod(2, imgN);
  }, delay);
}

function action (num) { //ez a funkció figyeli a játékos választását, beilleszti a megfelelő képet és meghívja az ellenfél véletlen generátor funkciüját és az eredményhirdetést
  document.getElementById("b" + num).addEventListener("click", function () {
    imgSrcMod(1, num)
    changeImg(num);
  });
}

function slowGrow (img, scl) {
  document.querySelector(".img" + img).style.transform = "scale(" + scl + ")";
  document.querySelector(".img" + img).style.transition ="transform 0.25s ease"
}

action(1);
action(2);
action(3);

function changeImg(number1) { //ez a funkció ad egy véletlen értéket a számítógépnek és kihírdeti az eredményt

    slowGrow (2, 0.1)

    spin(1, 50);
    spin(2, 100);
    spin(3, 150);
    spin(1, 200);
    spin(2, 250);
    spin(3, 300);


    setTimeout(function() {

      var number2 = Math.floor(Math.random() * 3 + 1);

      imgSrcMod(2, number2);

      slowGrow (2, 1)

        if (number1 == number2) {
          result("Draw!");
        }
        else if (number1 == 1 && number2 == 3 ||
                 number1 == 2 && number2 == 1 ||
                 number1 == 3 && number2 == 2) {
          result("PLayer Wins!");
        }
        else if (number1 == 1 && number2 == 2 ||
                 number1 == 2 && number2 == 3 ||
                 number1 == 3 && number2 == 1) {
          result("🤖 Computer Wins!");
        }

    }, 350);
}
