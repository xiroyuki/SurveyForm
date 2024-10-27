function processForm()
{
    let gender=document.getElementById('gender').value;
    let age=parseInt(document.getElementById('age').value);

    let greeting="";
    if(gender=="male")
        greeting=(age>=20)?"小伙子，谢谢你的提交！":"小兄弟，谢谢你的提交！";
    else if(gender=="female")
        greeting=(age>=20)?"女士，谢谢你的提交！":"小姑娘，谢谢你的提交！";
    else
        greeting="谢谢你的提交！";

        document.getElementById("greetingMessage").innerText=greeting;

        console.log(greeting);
}