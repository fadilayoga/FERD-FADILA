let rgx_nonum = /^[A-Za-z\s]+$/
let rgx_num = /^[0-9]+$/
let rgx_nosym = /^[\w\s\.]+$/
let rgx_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let edit = document.getElementById("edit")
let submit = document.getElementById("submit")

let nama = document.getElementById("nama");
let role = document.getElementById("role");
let availability = document.getElementById("availability");
let usia = document.getElementById("usia");
let lokasi = document.getElementById("lokasi");
let pengalaman = document.getElementById("pengalaman");
let email = document.getElementById("email");

let input_nama = document.getElementById("input-nama");
let input_role = document.getElementById("input-role");
let input_availability = document.getElementById("input-availability");
let input_usia = document.getElementById("input-usia");
let input_lokasi = document.getElementById("input-lokasi");
let input_pengalaman = document.getElementById("input-pengalaman");
let input_email = document.getElementById("input-email");
let input = document.querySelectorAll("input")

const editData = () => {
    input.forEach(item => {
        item.style.borderColor = "#4F4F4F"
    })

    input_nama.value = nama.innerText
    input_role.value = role.innerText
    input_availability.value = availability.innerText
    input_usia.value = usia.innerText
    input_lokasi.value = lokasi.innerText
    input_pengalaman.value = pengalaman.innerText
    input_email.value = email.innerText
}

const setData = () => {
    nama.innerText = input_nama.value
    role.innerText = input_role.value
    availability.innerText = input_availability.value
    usia.innerText = input_usia.value
    lokasi.innerText = input_lokasi.value
    pengalaman.innerText = input_pengalaman.value
    email.innerText = input_email.value
}

input.forEach(item => {
    item.onchange = function () {
        item.style.borderColor = "#4F4F4F"
    }
})

const info = (nama, status) => {
    if (!status) {
        let element = document.getElementsByName(nama)
        element[0].style.borderColor = "red"
        alert(`Form ${nama} Bermasalah`)
    }
}

const checkForm = () => {
    if (!rgx_nonum.test(input_nama.value)) {
        return info("nama", false)
    } else if (!rgx_nonum.test(input_role.value)) {
        return info("role", false)
    } else if (!rgx_nonum.test(input_availability.value)) {
        return info("availability", false)
    } else if (!rgx_num.test(input_usia.value)) {
        return info("usia", false)
    } else if (!rgx_nosym.test(input_lokasi.value)) {
        return info("lokasi", false)
    } else if (!rgx_num.test(input_pengalaman.value)) {
        return info("experience", false)
    } else if (!rgx_email.test(input_email.value)) {
        return info("email", false)
    } else {
        setData()
    }
}

submit.addEventListener("click", () => checkForm())

edit.onclick = () => editData()