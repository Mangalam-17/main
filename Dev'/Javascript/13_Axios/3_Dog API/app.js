// Lets create a dog api which generates any random image

let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let link = await getImages();

    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link);
})

async function getImages(){
    try{
        let res = await axios.get(url);
        //console.log(res);
        //console.log(res.data.message);    // this prints the message part of data containing img link
        return res.data.message;
    }
    catch(e){
        console.log("error - ", e);
        return "No image found";
    }
}

// Remember -> currently we are using free apis, so generally they have a limit set
// like in 1 min we can make certain number of calls
// so every api has a limit which has a rate limit 
// so whenever we are using free apis,try not to use very much 

// we should never use loops because when we are sending so much calls to the api
// then maybe they will block our account or maybe cause error or else api stop to work and so...

// Generally, when we are making a project or learning process,
// the limit of these API are more than enough, so we should be using it under these limits only