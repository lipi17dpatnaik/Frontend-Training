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

function searchMovies() {
    console.log("Function called");
    //getting data entered in searchbar
    let input = document.getElementById('searchbar').value 

    //converting to lower case
    input=input.toLowerCase(); 

    //getting all videoboxes to iterate over
    let videoBoxes = document.getElementsByClassName('videoBoxes'); 
    
    //for loop to iterate over 
    for (i = 0; i < videoBoxes.length; i++) {  
        if (!videoBoxes[i].innerHTML.toLowerCase().includes(input)) { 
            videoBoxes[i].style.display="none"; //try out hidden,element
        } 
        else { 
            videoBoxes[i].style.display="inline-block";                  
        } 
    } 
}

const movieInput = document.getElementById("searchbar");
movieInput.addEventListener(
	"keyup",
	debounce(searchMovies,500) //Function will be called after 500ms only
);
