
var box = document.getElementById('display');

function addtoscreen(x)
{
    box.value += x;
    if(x=='c')
    {
        box.value='';
    }

}

function answer()
{
    x=box.value;
    x=eval(x);
    box.value=x;
}

function power(y)
{
    x=box.value;
    x=Math.pow(x,y);
    box.value=x;    
}

function modulus()
{
    x=box.value;
    var a = a; var b = b; var c = a % b;
    x=c;
    box.value=x;
}
