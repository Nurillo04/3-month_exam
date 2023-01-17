let elList = document.querySelector('#list');
let elForm = document.querySelector('form');
let elInput = document.querySelector('input');
const elSelect = document.querySelector('#select')
let elSearch = document.querySelector('#search');


let postIdArr = [];

function renderPostId(postArr, p) {
    let postIdArr = [];

    postArr.forEach((i) => {
        if (!postIdArr.includes(i.postId)) {
            postIdArr.push(i.postId);
        }
    });

    postIdArr.forEach((element) => {
        let elOption = document.createElement("option");
        elOption.value = element;
        elOption.textContent = element;
        p.appendChild(elOption);
    });
    console.log(postIdArr);
}
renderPostId(data, elSelect);


// for render post
// 
// 
// 
// 
// 
// 
// 
// 

const renderData = (array, element = elList) => {
    element.innerHTML = "";

    array.forEach((post) => {
            const newItem = document.createElement('li');
            newItem.className = "mb-3 ms-3 card w-25"
            const newCard = document.createElement('div');
            newCard.className = "card-body ";

            newItem.appendChild(newCard);
            newCard.innerHTML = `
            <div class="card-body">
                    <h2 class="card-title">${post.name}</h2>
                    <p class="card-text">
                        ${post.body}
                    </p>
                    <a href="#" class="card-link">${post.email}</a>
                </div>
            
            `;
            element.appendChild(newItem);

        }


    )
}

renderData(data)


// search





//

elSearch.addEventListener('input', (i) => {
    let element = i.target;

    let array = [];

    data.forEach(function(data) {
        if (data.name.toLowerCase().includes(element.value.toLowerCase())) {
            array.push(data);
        }
    });
    renderData(array);
});