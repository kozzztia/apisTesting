
export const fetchImages = (start,end) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json.splice(start,end)))

}
