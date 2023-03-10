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



//
// for render post
// 



const renderData = (array, element = elList) => {
    element.innerHTML = "";

    array.forEach((post) => {
            const newItem = document.createElement('li');
            newItem.className = "mb-3 ms-3 card w-25 shadow"
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
                    <button data-id="${post.id}" class="btn mt-5 btn-danger shadow  d-grid btn-info delete-btn"> Delete </button>

                    
                </div>
            
            `;
            element.appendChild(newItem);

        }


    )
}

renderData(data)



//
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


//
// button
//


elList.addEventListener("click", (evt) => {
    const target = evt.target;
    console.log(target);

    if (target.className.includes("delete-btn")) {
        let newPost = [];
        const id = Number(target.dataset.id);

        data.forEach((post) => {
            if (post.id !== id) {
                newPost.push(post);
            }
        });
        data = newPost;
        renderData(data);
    }
});



//
//   filter
//



elSelect.addEventListener("change", () => {
    const opt = elSelect.value;

    let filteredPost = [];

    if (opt == "All") {
        renderData(data);
    } else {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (element.postId == opt) {
                filteredPost.push(element);
            }
        }
        renderData(filteredPost);
    }
});