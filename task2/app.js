/*Task-02
Obyektə yaş (age) əlavə edin və doğum tarixini silin.
İstifadəçi məlumatları olan bir obyekt verilib.
Bu obyektə yaş (age) əlavə edin və doğum tarixini silin.
Alınmış obyekti konsola çıxarın. */

let OBJ = {
    name: "Eli",
    gender: "k",
    birthday: 24 + " aprel " + 2005,
}
let age = 15

OBJ.age = age
delete OBJ.birthday

console.log(OBJ);


