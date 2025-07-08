const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
/* querySelector('name') was being searched as a tag, added . before the class name to specify that it is a class */
const $n = document.querySelector('.name');
/* querySelector('#blog') was being searched as an id, replaced the # with a . to specify that it is a class */
const $b = document.querySelector('.blog');
/* Added a <p> tag with a class "location" inside the html */
const $l = document.querySelector('.location');

/* added the async keyword at the beggining to the function to specify that it is asynchronous */
async function displayUser(username) {
	$n.textContent = 'cargando...';
	const data = await fetch(`${usersEndpoint}/${username}`);
	//validate if data gets an error while fetching, if so send an error
	if (!data.ok) {
		throw new Error();
	}
	// created response variable, made it async using await and told it to make a json file out of the response
	let response = await data.json();
	console.log(response);
	// changed single quotes to backticks
	$n.textContent = `${response.name}`;
	$b.textContent = `${response.blog}`;
	$l.textContent = `${response.location}`;
}

function handleError(err) {
	console.log('OH NO!');
	console.log(err);
	// Fixed $n variable name
	$n.textContent = `Algo salió mal: ${err}`;
}

//Now we are catching the error properly
displayUser('stolinsk').catch(err => {
	handleError(err);
});
