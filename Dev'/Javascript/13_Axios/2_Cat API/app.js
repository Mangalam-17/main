// Lets see cat api which generates some random facts while clicking on a button in the page
let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{     // this is async callback 
    let fact = await getFacts();
    //this above line always returns a promise because the function is asynchronous 
    //so we also make the callback async 
    // this awaits for the promise to be resolved basically promise gets resolved 
    console.log(fact);

    let para = document.querySelector("#result");
    para.innerText = fact;
})  

let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        // console.log(res);
        // console.log(res.data);
        return res.data.fact;
    }
    catch(e){
        console.log("Error - ", e);
        return "No fact found";
    }
}