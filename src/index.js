module.exports = function toReadable (number) {
    if (number > 0 && number <= 999) {
        let x = [];
             let div = 100;
             let a = number;
             let rest;
             for (let i = 0; i <= 2; i++) {
               rest = Math.trunc(a / div);
               x[i] = rest;
               a = a - rest * div;
               div = div / 10;
       }
           switch (x[0]) {
           case 1:  s = 'one hundred' ; break;
           case 2:  s = 'two hundred'; break;
           case 3:  s = 'three hundred'; break;
           case 4:  s = 'four hundred'; break;
           case 5:  s = 'five hundred'; break;
           case 6:  s = 'six hundred'; break;
           case 7:  s = 'seven hundred'; break;
           case 8:  s = 'eight hundred'; break;	
           case 9:  s = 'nine hundred'; break;		  
           default: s = '';
         }
             
       switch (x[1])
         {
           case 1:
           switch (x[2])
           {
             case 0: s = s + ' ten'; break;
             case 1: s = s + ' eleven'; break;
             case 2: s = s + ' twelve'; break;
             case 3: s = s + ' thirteen'; break;	
             case 4: s = s + ' fourteen'; break;
             case 5: s = s + ' fifteen'; break;
             case 6: s = s + ' sixteen'; break;
             case 7: s = s + ' seventeen'; break;	
             case 8: s = s + ' eighteen'; break;
             case 9: s = s + ' nineteen'; break;
           }
           x[2] = 0;
           break;
             case 2: s = s + ' twenty'; break;
             case 3: s = s + ' thirty'; break;	
             case 4: s = s + ' forty'; break;
             case 5: s = s + ' fifty'; break;
             case 6: s = s + ' sixty'; break;
             case 7: s = s + ' seventy'; break;	
             case 8: s = s + ' eighty'; break;
             case 9: s = s + ' ninety'; break;
           default: break;
         }
             
         switch (x[2]) {
           case 1:  s = s + ' one'; break;
           case 2:  s = s + ' two'; break;
           case 3:  s = s + ' three'; break;
           case 4:  s = s + ' four'; break;
           case 5:  s = s + ' five'; break;
           case 6:  s = s + ' six'; break;
           case 7:  s = s + ' seven'; break;
           case 8:  s = s + ' eight'; break;	
           case 9:  s = s + ' nine'; break;		  
           //default: s = '';
         }
                  
             s = s.trim();
             return s;
             } else {
             return number == 0 ? 'zero' : 'out range';
             }
}
