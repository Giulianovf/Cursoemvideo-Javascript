var agora = new Date()
var data = new Date()
var hora = agora.getHours()
var dia = data.getUTCDate()
console.log('Hoje é dia ' + dia)
console.log('Agora são exatamente ' + hora + ' horas.')
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}