let a = "1 + 10 * 20";
a = a.replace(/ /g,"");
a= a.split("");


function CreateNb(a,i){
    let j=i;
    let tmp = "";
    while(!isNaN(a[j])){
        tmp = tmp + a[j];
        a.splice(j,1);  
    }
    a.splice(i,0,tmp);
    return a;
}

function table(a){
    let i=0;
    while (i<a.length-1){ 

        if(!isNaN(a[i]) && !isNaN(a[i+1])){
            a = CreateNb(a, i);
        }
        i++;
    }
    return a;
}
a = table(a);
console.log(a);


/*function prio(a) {
    for (let i = 0; i < a.length; i++) {
        if(a[i] == "*" || a[i]||){

            i=0;
        }
    }
    
}*/

/*let b=[];
let j;

for(let i= 0; i< a.length ; i++){
    console.log("tour "+i+ ", a["+i+"] = " +a[i]);
    console.log(a);
    if(a[i] == "*" || a[i] == "/"){
        console.log("condition");

        b[j]= b.push(a[i-1]);
        j++
        b[j]= b.push(a[i+1]);
        j++;
        b[j]= b.push(a[i]);
        j++
        a.splice(i-1,i+1);
        console.log("b vaut : ");
        console.log(b);
    }

}*/