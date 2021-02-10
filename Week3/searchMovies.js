const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const removeElements = (elms) => elms.forEach(el => el.remove());

function searchMovies() {
    console.log("Function called");
    //getting data entered in searchbar
    let input = document.getElementById('searchbar').value 

    //converting to lower case
    input=input.toLowerCase(); 

    //getting all videoboxes to iterate over
    let videoBoxes = document.getElementsByClassName('videoBoxes'); 

    let countMovies = 0;
    
    //for loop to iterate over 
    for (i = 0; i < videoBoxes.length; i++) {  
        if (!videoBoxes[i].innerHTML.toLowerCase().includes(input)) { 
            videoBoxes[i].style.display="none"; //try out hidden,element
        } 
        else { 
            videoBoxes[i].style.display="inline-block";
	    countMovies += 1;
        } 
    } 
    if (countMovies === 0)
    {
	const errorBox = displayErrorBox("Sorry! I couldn't find any movies :(","Oh no!","black","white");
        document.body.appendChild(errorBox);
    }
    else{
	removeElements(document.querySelectorAll(".errorSection"));
    }
}

const movieInput = document.getElementById("searchbar");
movieInput.addEventListener(
	"keyup",
	debounce(searchMovies,500) //Function will be called after 500ms only
);
