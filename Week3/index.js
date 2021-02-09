function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function displayErrorBox(response,category){
    const errorBox = document.createElement('div');
    errorBox.className = 'errorSection';
    errorBox.innerHTML = `<h1>${category}</h1><h3>${response}</h3>`;
    return errorBox;
}

const jsonURL = "https://demo0376970.mockable.io/movieslist";
let obj;
fetch(jsonURL)
	.then(handleErrors)
	.then(data => data.json())
	.then(obj => {
		const numMovies = obj.shows.length; //gets number of movies
		// numMovies = 0;
		if (numMovies === 0){
			const errorBox = displayErrorBox("Sorry! I couldn't find any movies :(","Oh no!");
			document.body.appendChild(errorBox);
		}
		else{
			let movieIndex = 0;
			const videosec = document.createElement('div');
			videosec.className = 'videoSection';
			document.body.appendChild(videosec);
	
			//dynamicallly create movie boxes
			for (movieIndex=0; movieIndex<numMovies; movieIndex++){
			const colDiv=document.createElement('div');
			colDiv.className='videoBoxes';
			videosec.appendChild(colDiv);
			let year = obj.shows[movieIndex].year;
			let imdbid = obj.shows[movieIndex].imdbID;
			let trailer = obj.shows[movieIndex].trailer;
			colDiv.innerHTML = `<div class="content" data-imdbid="${imdbid}" data-trailer="${trailer}"> <h3>${obj.shows[movieIndex].title}</h3>
			<p>(${year})</p>
			<p>${obj.shows[movieIndex].description}</p></div></a>`;

			colDiv.style.backgroundImage=`url('img/posters/${obj.shows[movieIndex].poster}')`;
			colDiv.onclick = displayModal;
			}
		}
	}
)
	.catch(error => {
		console.log(error);
		const errorBox = displayErrorBox("Looks like I encountered an issue :( Please try again later!","Oops! ERROR");
		document.body.appendChild(errorBox);
	});

// Get the modal
const modal = document.getElementsByClassName("modal")[0];

let clickedCell;

const displayModal = function() {
  clickedCell = this.childNodes[0];
  const imdbURL = `http://www.omdbapi.com/?i=${clickedCell.getAttribute('data-imdbid')}&apikey=cb3a6e4b`;
  fetch(imdbURL)
	.then(handleErrors)
	.then(data => data.json())
	.then(data => {modal.innerHTML = `<div class="modal-content">
    <div class="moviePopUp">
    <div class="movieTitle"><h3>${data.Title}</h3></div>
    <div class="year">(${data.Year})</div>
    <div class="poster" style="background-image: url('${data.Poster}');"></div>
    <div class="description">${data.Plot}</div>
    <div class="imdbRating">${data.Ratings[0].Value}</div>
    </div>
    <div class="videowrapper">
    <iframe class="trailer" width="560" height="349" src="https://www.youtube-nocookie.com/embed/${clickedCell.getAttribute('data-trailer')}?rel=0&amp;amp;controls=0&amp;amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>`;
	})
	.catch(error => {
                console.log(error);
		modal.innerHTML = "";
		modal.appendChild(displayErrorBox("Looks like I encountered an issue :( Please try again later!","Oops! ERROR"));
        });
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.innerHTML = "<p>Loading...</p>";
    modal.style.display = "none";
  }
}
