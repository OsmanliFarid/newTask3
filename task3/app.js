/*Task-03
Obyektə metodlar əlavə edin.let
Obyekt verilib. Ona növbəti metodları əlavə edin:
  setAge — istifadəçi yaşını dəyişdirən metoddur.
  getYearsBeforeRetirement — pensiyaya qədər istifadəçinin
qalan illərinin sayını qaytaran metoddur.
Bu metodları çağırın.
 */

let obj = {
    age: 0,
    gender: function () {
        return prompt("Kişisən yoxsa qadin (k/q)").toLowerCase(); 
    },
    setPensiyaAge: function () { 
        const g = this.gender(); 
        if (g === "k") {
            this.pensiyaAge = 65;
        } else if (g === "q") {
            this.pensiyaAge = 60;
        }
    },
    pensiyaAge: 65,
    setAGE: function () {
        this.age = +prompt("Neçə yasin var?");
        return this.age;
    },
    getYearsBeforeRetirement: function () {
        return this.pensiyaAge - this.age;
    }
}

obj.setPensiyaAge();
console.log("Pensiya yaşi:" + " " + obj.pensiyaAge)

const a = "senin yasin " + obj.setAGE() + " dir"
const b = "Pensiyaya çixmaq üçün " + obj.getYearsBeforeRetirement() + " il qalib."
console.log(a)
console.log(b)