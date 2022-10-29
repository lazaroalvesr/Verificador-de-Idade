function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')

    } else {
        const fsex = document.getElementsByName('radisex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/foto-jovem-m.png')

            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/foto-adulto-m.png')

            } else {
                // Idoso
                img.setAttribute('src', 'img/foto-idoso-m.png')

            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                 //criança
                 img.setAttribute('src', 'img/foto-bebe-f.png')

            }else if (idade < 21){
                 //jovem
                 img.setAttribute('src', 'img/foto-jovem-f.png')

            }else if (idade < 50){
                 //Adulto
                 img.setAttribute('src', 'img/foto-adulto-f.png')

            }else {
                //Idoso
                img.setAttribute('src', 'img/foto-idoso-f.png')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}