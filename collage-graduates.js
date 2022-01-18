let nama = "Zefanya Karine";
let nilai = "100";

if (nilai => 80 && nilai <= 100) {
    console.log('$ {nama} nilai A')
}else if (nilai => 65 && nilai <= 79) {
    console.log('$ {nama} nilai B') 
}else if (nilai => 50 && nilai <= 64){
    console.log('$ {nama} nilai C')
}else if (nilai => 35 && nilai <=49){
    console.log('$ {nama} nilai D')
}else if (nilai < 0 && nilai > 100){
    console.log('${nama} nilai invalid')
}