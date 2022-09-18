
export const fetchImages = (start,end) => {

    fetch('https://jsonplaceholder.typicode.com/todos' ,{
        method: "POST",
        body:{userId: 10, id:10, title: 'quis ut nam facilis et officia qui', completed: false}
    })
        .then(resp => console.log(resp.ok))
        // .then(item => console.log(item))



}

