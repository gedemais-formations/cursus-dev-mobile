
function isPremier_updown(n)
{
    for (let i = n - 1; i > 1; i--)
    {
        if (n % i == 0)
            return false;
    }
    return true;
}

function isPremier_downup(n)
{
    for (let i = 2; i < n; i++)
    {
        if (n % i == 0)
            return false;
    }
    return true;
}


function premier ()
{
    for (let i = 1; i <= 100; i++)
    {
        if (isPremier_downup(i));
            console.log(i);
    }
}

