fetch("http://localhost:5000/data")
    .then((res) => res.json())
    .then((data) => console.log(data));
