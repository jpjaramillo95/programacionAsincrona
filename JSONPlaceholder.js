let div = document.querySelector(".mostrarImagen");
let boton = document.querySelector(".btn");

async function mostrarFotos() {
    try {
        let URL = "https://jsonplaceholder.typicode.com/photos";
        let imagenes = await fetch (URL, {
            method: "GET",
        });
        let datos = await imagenes.json();
        console.log(datos);
        div.innerHTML = "";
        let datosLimitados= datos.slice(0,10)
        datosLimitados.forEach((d)=>{
            div.innerHTML += `
                <div>
                    <h2>${d.title}</h2>
                    <img src="${d.url}">
                    <img src="${d.thumbnailUrl}">
                    <p>Imagen #${d.id}</p>
                </div>            
            `;
        })
    } catch(error){
        console.log("Ocurrio un error",error);
    }
}

boton.addEventListener("click", ()=>{
    mostrarFotos();
})