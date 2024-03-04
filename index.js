const target = document.getElementById('target');

// const urlArr = [
//     {
//         projName: 'test',
//         projURL: 'test',
//         projImg: 'test',
//         projDesc: 'test',
//     },
//     {
//         projName: 'test',
//         projURL: 'test',
//         projImg: 'test',
//         projDesc: 'test',
//     },
//     {
//         projName: 'test',
//         projURL: 'test',
//         projImg: 'test',
//         projDesc: 'description Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea hic, nobis aspernatur tenetur rem dolores quidem culpa at asperiores velit quo neque voluptate mollitia sint corrupti enim beatae ratione.',
//     },
//     {
//         projName: 'test',
//         projURL: 'test',
//         projImg: 'test',
//         projDesc: 'test',
//     },
//     {
//         projName: 'test',
//         projURL: 'test',
//         projImg: 'test',
//         projDesc: 'test',
//     },
//     {
//         projName: 'test',
//         projURL: 'test',
//         projImg: 'test',
//         projDesc: 'test',
//     }


// ]
fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => {
        urlArr = data;
})

for (let i = 0; i < urlArr.length; i++) {
    //Creates all parts of the link
    const container = document.createElement('div');
    const subcontainer = document.createElement('div');
    const title = document.createElement('h1');
    const img = document.createElement('img');
    const link = document.createElement('a');
    const desc = document.createElement('p');

    //Assigns content for each element
    title.textContent = urlArr[i].projName + i;
    link.textContent = urlArr[i].projURL;
    link.href = urlArr[i].projURL;
    desc.textContent = urlArr[i].projDesc;
    img.src = urlArr[i].projImg;

    //assigns classes, ids
    container.classList.add("item");

    //Attaches content to divs; adds to target
    subcontainer.appendChild(title);
    subcontainer.appendChild(link);
    //subcontainer.appendChild(desc);
    container.appendChild(img);
    container.appendChild(subcontainer);
    target.appendChild(container);

    //Test stuff for dropdown
    title.addEventListener('click', () => {
        if (desc.parentElement === subcontainer) {
            title.textContent = "closed";
            subcontainer.removeChild(desc);
        } else {
            title.textContent = "open";
            subcontainer.appendChild(desc);
        }
    })
}

