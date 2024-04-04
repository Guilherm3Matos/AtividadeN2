function but(){
    var idade = document.querySelector('#idade').value

    if (idade <= 10){
        alert('Criança, não está em maior idade penal');
    }

    else if (idade == 11){
        alert('Pré adolescente, não está em maior idade penal');
    }

    else if (idade >= 12 && idade <= 17){
        alert('Adolescente, não está em maior idade penal');
    }

    else if (idade >= 18 && idade <= 60){
        alert('Adulto, está em maior idade penal');
    }

    else {
        alert('Idoso, está em maior idade penal');
    }
    
}