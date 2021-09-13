function makeButton() {
    const button = document.createElement('button')
    button.classList.add('edit')
    button.setAttribute('id', 'edit')
    button.innerText = 'Edit'
    button.addEventListener("click", function () {
        tampilkanDataKeFormmembuatDataDariStorage()
    })
    document.body.appendChild(button)
}

function buttonEdit() {
    makeButton()
    let rgx_email = /@/g
    console.log(rgx_email.test("fadila@gmail.com"))
}