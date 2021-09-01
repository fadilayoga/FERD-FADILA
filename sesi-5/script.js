// button
let edit = document.getElementById("edit")
let submit = document.getElementById("submit")

let nama = document.getElementById("nama");
let role = document.getElementById("role");
let availability = document.getElementById("availability");
let usia = document.getElementById("usia");
let lokasi = document.getElementById("lokasi");
let pengalaman = document.getElementById("pengalaman");
let email = document.getElementById("email");

// input
let input_nama = document.getElementById("input-nama");
let input_role = document.getElementById("input-role");
let input_availability = document.getElementById("input-availability");
let input_usia = document.getElementById("input-usia");
let input_lokasi = document.getElementById("input-lokasi");
let input_pengalaman = document.getElementById("input-pengalaman");
let input_email = document.getElementById("input-email");

editData = () => {
    input_nama.value = nama.innerText
    input_role.value = role.innerText
    input_availability.value = availability.innerText
    input_usia.value = usia.innerText
    input_lokasi.value = lokasi.innerText
    input_pengalaman.value = pengalaman.innerText
    input_email.value = email.innerText
}

setData = () => {
    nama.innerText = input_nama.value
    role.innerText = input_role.value
    availability.innerText = input_availability.value
    usia.innerText = input_usia.value
    lokasi.innerText = input_lokasi.value
    pengalaman.innerText = input_pengalaman.value
    email.innerText = input_email.value
}

submit.onclick = function () {
    setData()
}

edit.onclick = function () {
    editData()
}