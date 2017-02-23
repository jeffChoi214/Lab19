    var shoppingList = [];

    var showcart= document.getElementById("showcart");
    var apple = document.getElementById("apple");
    var pear = document.getElementById("pear");
    var banana = document.getElementById("banana");
    var water = document.getElementById("water");

    var list = document.getElementById("shoppinglist");


/*
    apple.onclick = shoppingList.push("apple");
    pear.onclick = shoppingList.push("pear");
    banana.onclick = shoppingList.push("banana");
    water.onclick = shoppingList.push("watermelon");
*/
    function addItem(item) {
        shoppingList.push(item);
    }



    function showItems() {
        var i;

        for (i = 0; i < shoppingList.length; i++) {
            console.log(shoppingList[i]);
        }

        if (shoppingList.length === 0) {
            console.log("YOUR LIST IS EMPTY!");
        }


    }


    function clearItems() {

        shoppingList = [];

    }
