document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector('.hamburguer');
    const navList = document.querySelector('.nav-list');

    hamburguer.addEventListener('click', () => {
        hamburguer.classList.toggle('active');
        navList.classList.toggle('active');
    });
});


const cpfInput = document.getElementById('cpf')

function cpf(value) {
    if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
        value = value.replace(/\D/g, "")
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        value = value.replace(/(\d{3})(\d{2})$/, "$1-$2")
    }
    return value
}

function cnpj(value) {
    if (!value.match(/^(\d{2}).(\d{3}).(\d{3})\\(\d{4})-(\d{2})$/)) {
        value = value.replace(/\D/g, "")
        value = value.replace(/(\d{2})(\d)/, "$1.$2")
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        value = value.replace(/(\d{3})(\d)/, "$1/$2")
        value = value.replace(/(\d{4})(\d)/, "$1-$2")
    }
    return value
}

cpfInput.addEventListener('input', function (event) {
    const clearnedInput = event.target.value.replace(/\D/g, '');
    if (clearnedInput.length > 11) {
        event.target.value = cnpj(clearnedInput)
    } else {
        event.target.value = cpf(clearnedInput)
    }

})

