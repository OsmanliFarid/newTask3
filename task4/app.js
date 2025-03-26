/*Task-04
Kalkulyator obyekti yaradın.
Əsas riyazi hesablamaları yerinə yetirən və nəticəni yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
  - Obyekt yaradın və toplama, çıxma, vurma, bölmə üçün metodlar əlavə edin.
0
Turned in
0
Assigned
12
Graded
 */

const obj = {
    num1: function (){
        return +prompt("reqem 1")
        
    },
    num2: function (){
        return +prompt("reqem 2")
        
    },
    riyazimethod: function(){
        return prompt("riyazi method elave et (+,-,*,/)")
    },
    
    topla: "+",
    cixma: "-",
    vurma: "*",
    bolme: "/",
    result: 0,
    hesablama: function(){
        const n1 = this.num1()
        const n2= this.num2()
        const g = this.riyazimethod()
        if(g === "+"){
            this.result = n1 + n2
        }else if(g === "-"){
            this.result = n1 - n2
        }else if(g === "*"){
            this.result = n1 * n2
        }else if(g === "/"){
            this.result = n1 / n2
        }
        
    }
    
}


obj.hesablama()
console.log(obj.result);
