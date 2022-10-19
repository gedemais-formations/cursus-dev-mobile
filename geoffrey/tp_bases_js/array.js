let entier = 189;
let chaine = "189";
let booleen = true;
let flottant = 42.42;
let array = [entier, chaine, booleen, flottant];

function tableau(array)
{
    for (let i = 0; i < array.length; i++)
        array[i] = array[i].toString();


/*
    array[0] = array[0].toString();
    array[1] = array[1].toString();
    array[2] = array[2].toString();
    array[3] = array[3].toString();*/

    return array;

/*    return [array[0].toString(),
            array[1].toString(),
            array[2].toString(),
            array[3].toString()];*/
}

tableau(array);