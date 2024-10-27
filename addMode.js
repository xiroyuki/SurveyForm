document.addEventListener("DOMContentLoaded",function()
{
    const submitButton=document.getElementById("submitButton");
    submitButton.addEventListener("click",function(event)
    {
        event.preventDefault();

        let num1=document.getElementById('num1').value;
        let a=parseFloat(num1);
        let num2=document.getElementById('num2').value;
        let b=parseFloat(num2);

        if(isNaN(a)||isNaN(b))
            console.error("请输入有效的数字");

        let c=a+b;

        document.getElementById("result").innerText=c;

        alert(c);
    });
});