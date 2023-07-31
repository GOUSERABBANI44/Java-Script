function calculator()
{
    var val1=parseInt(document.getElementById("val1").value);
    var val2=parseInt(document.getElementById("val2").value);
    var symbol=document.getElementById("op").value;

    if(symbol=="+")
    {
        document.getElementById("result").value=val1+val2;
    }
    if(symbol=="-")
    {
        document.getElementById("result").value=val1-val2;
    }
    if(symbol=="*")
    {
        document.getElementById("result").value=val1*val2;

    }
    if(symbol=="/")
    {
        document.getElementById("result").value=val1/val2;
    }
    if(symbol=="%")
    {
        document.getElementById("result").value=val1%val2;
    }
    if(symbol=="//")
    {
        document.getElementById("result").value=parseInt(val1/val2);
    }

}