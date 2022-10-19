let n = 9;
let a = Array(n).fill().map(()=>Array(n).fill(""));
//let grille = document.getElementById('sudoku');
//let styleSudoku = grille.getAttribute("style");

function sudokuFacile(a) {
    a = [
        ['9','','4','6','','5','','',''],
        ['2','','','7','','4','5','',''],
        ['8','3','','2','1','9','7','','4'],
        ['','5','2','1','','','6','8',''],
        ['','8','6','','','2','','1','5'],
        ['3','','','5','6','8','','',''],
        ['','','','','7','','2','','6'],
        ['','','','8','','','3','4','9'],
        ['5','4','','','','','','',''],
    ];
    return a;
}

let arr = sudokuFacile(a);
//let init = true;

function afficheGrille(arr, init) {
    let grille = document.getElementById('sudoku');
    for (let i = 0; i < n; i++) {
        let ligne  = document.createElement('tr');
        for (let j = 0; j < n; j++) {
            let val = arr[i][j];
            let cell = document.createElement('td');
            let cellTxt = document.createTextNode(val);
            cell.appendChild(cellTxt);
            ligne.appendChild(cell);

            if(j == 3 || j ==6){
                cell.setAttribute('style','border-left:4px solid black;');
            }
            if(i == 3 || i ==6){
                cell.setAttribute('style','border-top:4px solid black;');
            }
            if((i == 3 && j == 3) || (i == 3 && j ==6 ) || (i == 6 && j == 3) || (i == 6 && j == 6)){
                cell.setAttribute('style','border-top:4px solid black; border-left:4px solid black;');
            }

            if(val != "" && init){
                cell.style.backgroundColor = 'grey';
                cell.style.color = 'white';
            }


        }
        grille.appendChild(ligne);
    }
}

function verifLigne(arr, x, n) {
    let val;
    for (let i=0; i< arr.length; i++){
        val = arr[x][i] //arr[ligne][colone]
        if (n == val){
            return false; // Renvoie false si valeur deja présente dans la ligne
        }
    }
    return true; // Renvoie true si valeur non présente dans la ligne
}

function verifColone(arr, y, n) {
    let val;
    for (let i=0; i< arr.length; i++){
        val = arr[i][y] //arr[ligne][colone]
        if (n == val){
            return false; // Renvoie false si valeur deja présente dans la colone
        }
    }
    return true; // Renvoie true si valeur non présente dans la  colone
}

function verifCarre(arr, x, y, n) {
    // if(0 <= y <= 2){
    //     for(let i= 0; i <= 2; i++){
    //         if (0 <= x <= 2){
    //             for(let j = 0; j <=)
    //         }
    //     }
    // }
}

afficheGrille(arr, true);

console.log(verifColone(arr, 0, 1));


// Test

console.log(arr);

let min = 0
let max = 2;
let tab =[];
let count = 0;
let tmp;

for(let i = min; i<= max; i++){
    for (let j = min; j <= max; j++) {
        tmp = arr[i][j];
         tab.push(tmp);
         count++;
    }
}

console.log(tab);
