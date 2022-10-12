// tables.js pour exercice 5

function table(nombre)
{
    console.info("Table de multiplication par " + nombre);
    for(let i=1; i<11; i++)
    {
        console.log(nombre, " x ", i,"=", nombre * i);
    }
}

function display_table()
{
    table(1);
    table(2);
    table(3);
    table(4);
    table(5);
    table(6);
    table(7);
    table(8);
    table(9);
    table(10);
}