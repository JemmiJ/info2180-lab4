const element = document.getElementById("button");
/*element.addEventListener("click", phpFetch);

async function phpFetch (file){
    try{
        const response = await fetch(file);
        if (!response.ok){
            throw new Error("Response was not okay");
        }
        const nobj = await response.text();
    }
    catch (log){
        console.log(log);
    }
}
phpFetch("superheroes.php");*/
element.addEventListener("click", 
fetch('superheroes.php')
.then(response=> response.txt())
.then(textString => {
    console.log(textString);
}));