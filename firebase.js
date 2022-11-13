
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getDatabase, set, ref ,push, child, onValue} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAFJmlaUL5fNmNKnX37xkB-2erJ_avQvRg",
  authDomain: "appytizer-d57f2.firebaseapp.com",
  databaseURL: "https://appytizer-d57f2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "appytizer-d57f2",
  storageBucket: "appytizer-d57f2.appspot.com",
  messagingSenderId: "758981637290",
  appId: "1:758981637290:web:d4b61652c85549f0854cd3",
  };

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  const database = getDatabase(app);

  // Set up recipe function
  // function addRecipe (){
    var foodName = document.getElementById('foodname').value
    console.log(foodName);
    var calories = '';
    var ele = document.getElementsByName('calories');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            calories = ele[i].value;
    }
    var ingredients = document.getElementById('ingredients').value.split(",");
    var steps = document.getElementById('methods').value.split("\n");
    var msg = "";

    if (foodName.length == 0){
      msg += "Please enter a name for your food\n";
      
    }
  
    if (ingredients.length == 1){
      msg += "Please enter at least 1 ingredient\n";
    }

    if (steps.length == ''){
      msg += "Please enter at least 1 step";
    }
    
    if (msg != "") {
      alert(msg);
      return false;
    } 
    else {

      const recipeId = push(child(ref(database), 'recipes')).key;

      set(ref(database, 'recipes/' + recipeId), {
        foodName: foodName,
        calories: calories,
        ingredients: ingredients,
        steps: steps
      });
      alert("Recipe added successfully");

      


    }