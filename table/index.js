async function getData() {
  let res = await fetch(`https://jsonplaceholder.typicode.com/users`); // fetch can delay

  let data = await res.json(); // to convert stream of data into object of JS
  console.log(data);
  dispalyData(data);
}
getData();

const tableBody = document.getElementById("table-body");

function dispalyData(data) {
  data.map((item) => {
    const tr = document.createElement("tr");
    const name = document.createElement("td");
    name.innerHTML = item.name;

    const username = document.createElement("td");
    username.innerHTML = item.username;

    const email = document.createElement("td");
    email.innerHTML = item.email;

    const phone = document.createElement("td");
    phone.innerHTML = item.phone;

    tr.append(name, username, email, phone);
    tableBody.append(tr);
  });
}

// appendChild => to append only one item in the container

// usingh append can append all things
