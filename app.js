let body = document.querySelector("body");
body.style.backgroundColor = "gray";

// ---------------- fetching data using - Axios library -----------------
let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    console.log("btn clicked");
    let fact = await getFact();
    console.log(fact);

    let p = document.querySelector("#result");
    // p.append(fact) ;
    p.innerHTML = `<hr> `;
    p.append(fact) ;
    // p.innerHTML = `<hr> ${fact}`;
})


async function getFact() {
    try {
        let res = await axios(url);
        return (res.data.fact);
    } catch (e) {
        console.log("errorHERE - ", e);
        return "No Fact Found"
    }
}
// getFact();





// ------------ parsing with js --------------------
// let url = "https://catfact.ninja/fact";
// async function getFact() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);

//     } catch (e) {
//         console.log("errorHERE - ", e);
//     }
// }

// getFact();