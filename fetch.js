var form = document.getElementById("data");
form.addEventListener("submit",function(e){

    e.preventDefault();
    var name = document.getElementById("name").value;
    var btn = document.getElementById("btn");

    fetch(`https://api.genderize.io?name=${name}`)
    .then(function(response){

        return response.json();

    }).then(function(data){

        console.log(data.gender);

        document.getElementById("gender").innerHTML +=`<h2>${data.gender}</h2>`;

    })

    fetch(`https://api.agify.io?name=${name}`)
    .then(function(response){

        return response.json();

    }).then(function(data){

        console.log(data.age);

      document.getElementById("age").innerHTML +=`<h2>${data.age}</h2>`;

    })   

    fetch(`https://restcountries.com/v3.1/alpha?codes=jo`)
    .then(function(response){

        return response.json();

    }).then(function(data){

        console.log(data[0].name.official);
        console.log(data[0].name.common);

      document.getElementById("age").innerHTML +=`<h2>${data[0].name.official}</h2>` + `<h2>${data[0].name.common} </h2>`;

    })   

    fetch(`https://api.nationalize.io?name=${name}`)
    .then(function(response){

        return response.json();

    }).then(function(data){

        console.log(data.country[0].country_id)
        
        document.getElementById("c1").innerHTML +=`<h2>${data.country[0].country_id}</h2>`;

    })   

})







