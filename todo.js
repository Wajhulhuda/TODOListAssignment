let form = document.getElementById("fom");
let user = document.getElementById("inName");
let email = document.getElementById("inEmail");
let pass = document.getElementById("inPass");
let city = document.getElementById("inCity");
let warning = document.getElementById("city");

let tableRef = document.getElementById("t");
let theadref = document.createElement("thead");
let tbodyref = document.createElement("tbody");

let tr1 = document.createElement("tr");
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
let th4 = document.createElement("th");
let th5 = document.createElement("th");
let th6 = document.createElement("th");

th1.innerText = "NAME";
th2.innerText = "EMAIL";
th3.innerText = "PASSWORD";
th4.innerText = "CITY";
th5.innerText = "EDIT";
th6.innerText = "DELETE";

tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);
tr1.appendChild(th4);
tr1.appendChild(th5);
tr1.appendChild(th6);

let createData = () => {
  validationForm();
};

let validationForm = () => {
  if (
    user.value != "" &&
    email.value != "" &&
    pass.value != "" &&
    city.value != ""
  ) {
    storeData();
  } else {
    warning.innerText = "All Fields Are Mandatory";
    warning.className = "warn";
  }
};

let inputData = {};
let storeData = () => {
  inputData["name"] = user.value;
  inputData["email"] = email.value;
  inputData["pass"] = pass.value;
  inputData["city"] = city.value;
  showData();
};

let showData = () => {
  theadref.appendChild(tr1);
  tableRef.appendChild(theadref);
  tableRef.appendChild(tbodyref);
  theadref.className = " bg-black text-white";
  tbodyref.innerHTML += ` <tr>
  <td>${inputData.name}</td>
  <td>${inputData.email}</td>
  <td>${inputData.pass}</td>
  <td>${inputData.city}</td>
  <td>
    <button type="button" class="btn btn-success" onClick="editData(this)">Edit</button>
  </td>
  <td>
    <button type="button" class="btn btn-danger" onClick="deleteData(this)")>Delete</button>
  </td>
</tr>`;
  user.value = "";
  email.value = "";
  pass.value = "";
  city.value = "";
};

let editData = (e) => {
  let child = e.parentElement.parentElement.children;
  user.value = child[0].innerText;
  email.value = child[1].innerText;
  pass.value = child[2].innerText;
  city.value = child[3].innerText;
  e.parentElement.parentElement.remove();
};

let deleteData = (e) => {
  e.parentElement.parentElement.remove();
};
