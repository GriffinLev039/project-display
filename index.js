const target = document.getElementById('target');

fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => {
        urlArr=data;
        console.log(urlArr);
        // console.log(JSON.parse(data));
        console.log(urlArr[0].name);
for (let i = 0; i < urlArr.length -1; i++) {
    //Creates all parts of the link
    const container = document.createElement('div');
    const subcontainer = document.createElement('div');
    const title = document.createElement('h1');
    const img = document.createElement('img');
    const link = document.createElement('a');
    const desc = document.createElement('p');

    //Assigns content for each element
    title.textContent = urlArr[i].name;
    link.textContent = urlArr[i].url;
    link.href = urlArr[i].url;
    desc.textContent = urlArr[i].desc;
    img.src = urlArr[i].img;

    //hides desc
    desc.style.height = "0px";
    desc.style.overflow = "hidden";
    desc.style.width = "inherit";
    //assigns classes, ids
    container.classList.add("item");

    //Attaches content to divs; adds to target
    subcontainer.appendChild(title);
    subcontainer.appendChild(link);
    subcontainer.appendChild(desc);
    container.appendChild(img);
    container.appendChild(subcontainer);
    target.appendChild(container);

    //Test stuff for dropdown
    // title.addEventListener('click', () => {
    //     if (desc.parentElement === subcontainer) {
    //         title.textContent = "closed";
    //         subcontainer.removeChild(desc);
    //     } else {
    //         title.textContent = "open";
    //         subcontainer.appendChild(desc);
    //     }
    // })
    title.addEventListener('click',()=>{
        if (desc.style.height == "0px") {
            title.textContent = "open";
            desc.style.height = "auto";
        } else {
            title.textContent = "closed";
            desc.style.height = "0px";
        }
    })
}

});