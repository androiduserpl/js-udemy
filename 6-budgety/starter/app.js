// BUDGET CONTROLLER
var budgetController = (function () {

    // Some code

})();



// UI CONTROLLER 
var UIControler = (function () {

    return {
        getinput: function() {
          var type = document.querySelector('.add__type').value; // Will be inc or exp  
          var description = document.querySelector('.add__description').value; 
          var value = document.querySelector('.add__value').value; 
        }
    };
    
})();




// GLOBAL APP CONTLOLLER
var controller = (function (budgetCtrl, UICtrl) {

    var crtlAddItem = function() {

        // 1. Get filed input data

        // 2. Add item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI 
        
        console.log('kakaka');

    }

    document.querySelector('.add__btn').addEventListener('click', crtlAddItem);

    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            crtlAddItem();
        }
    })

})(budgetController, UIControler);
