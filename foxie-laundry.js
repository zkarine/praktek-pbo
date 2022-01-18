/* Pseudocode
 INPUT "jumblah baju" with any number
 INPUT "kapasitas cuci" with any number
 
 Cek 'Jumblah baju masuk'
 jika jumlah bju < 'kapasitas'
 jumblah baju + repeat
*/
 
let bajuMasuk = 0;
let bajuTersedia = 20;
for (let i=1; i <=bajuTersedia; i++) {
    if (bajuMasuk < bajuTersedia) {
        bajuMasuk += 1;
    }
    if (bajuMasuk === bajuTersedia) {
        console.log('lampu nyala');
        break;
    }
}