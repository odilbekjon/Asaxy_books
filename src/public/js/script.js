const bookAuthor = document.getElementById('select')
const bookEdition = document.getElementById('select2')
const bookLang = document.getElementById('select3')
const content = document.querySelector('.books__box')

// SORT_LANG
bookLang?.addEventListener('change' , (e) => {
    // console.log(e.target.value);
    content.innerHTML = ""
    fetch(`http://localhost:5000/sort_lang/${e.target.value}`)
    .then(res  => res.json())
    .then(data => {
        data.book && data.book.map(item => {
        const DIV = document.createElement('div')
        DIV.setAttribute('class', 'books')

        const IMG = document.createElement('img')
        IMG.setAttribute('class', 'book_img')
        IMG.setAttribute('src' , 'http://localhost:5000/img/book3.webp')
        DIV.appendChild(IMG)

        const H2 = document.createElement('h2')
        H2.setAttribute('class', 'book__title')
        H2.textContent = item.book_name
        DIV.appendChild(H2)

        const P = document.createElement('p')
        P.setAttribute('class', 'book__price')
        P.textContent = item.book_price
        DIV.appendChild(P)

        const SPAN = document.createElement('span')
        SPAN.setAttribute('class', 'book__year')
        SPAN.textContent = item.book_year
        DIV.appendChild(SPAN)

        const DIVBox = document.createElement('div')
        DIVBox.setAttribute('class', 'box__btns')
        DIV.appendChild(DIVBox)

        const BTN = document.createElement('button')
        BTN.setAttribute('class', 'book_btn')
        BTN.innerHTML = `<i class='bx bx-edit'></i>`
        DIVBox.appendChild(BTN)
        
        const BTN2 = document.createElement('button')
        BTN2.setAttribute('class', 'book_btn2')
        BTN2.innerHTML = `<i class='bx bxs-message-square-x'></i>`
        DIVBox.appendChild(BTN2)


        content.append(DIV)
        })
    })
    .catch(err => console.log(err))
})

// SORT_EDITION
bookEdition?.addEventListener('change' , (e) => {
    // console.log(e.target.value);
    content.innerHTML = ""
    fetch(`http://localhost:5000/sort_edition/${e.target.value}`)
    .then(res  => res.json())
    .then(data => {
        data.book && data.book.map(item => {
        const DIV = document.createElement('div')
        DIV.setAttribute('class', 'books')

        const IMG = document.createElement('img')
        IMG.setAttribute('class', 'book_img')
        IMG.setAttribute('src' , 'http://localhost:5000/img/book3.webp')
        DIV.appendChild(IMG)

        const H2 = document.createElement('h2')
        H2.setAttribute('class', 'book__title')
        H2.textContent = item.book_name
        DIV.appendChild(H2)

        const P = document.createElement('p')
        P.setAttribute('class', 'book__price')
        P.textContent = item.book_price
        DIV.appendChild(P)

        const SPAN = document.createElement('span')
        SPAN.setAttribute('class', 'book__year')
        SPAN.textContent = item.book_year
        DIV.appendChild(SPAN)

        const DIVBox = document.createElement('div')
        DIVBox.setAttribute('class', 'box__btns')
        DIV.appendChild(DIVBox)

        const BTN = document.createElement('button')
        BTN.setAttribute('class', 'book_btn')
        BTN.innerHTML = `<i class='bx bx-edit'></i>`
        DIVBox.appendChild(BTN)
        
        const BTN2 = document.createElement('button')
        BTN2.setAttribute('class', 'book_btn2')
        BTN2.innerHTML = `<i class='bx bxs-message-square-x'></i>`
        DIVBox.appendChild(BTN2)

        content.append(DIV)
        })
    })
    .catch(err => console.log(err))
})

// SORT_AUTHOR
bookAuthor?.addEventListener('change' , (e) => {
    // console.log(e.target.value);
    content.innerHTML = ""
    fetch(`http://localhost:5000/sort_author/${e.target.value}`)
    .then(res  => res.json())
    .then(data => {
        data.book && data.book.map(item => {
        const DIV = document.createElement('div')
        DIV.setAttribute('class', 'books')

        const IMG = document.createElement('img')
        IMG.setAttribute('class', 'book_img')
        IMG.setAttribute('src' , 'http://localhost:5000/img/book3.webp')
        DIV.appendChild(IMG)

        const H2 = document.createElement('h2')
        H2.setAttribute('class', 'book__title')
        H2.textContent = item.book_name
        DIV.appendChild(H2)

        const P = document.createElement('p')
        P.setAttribute('class', 'book__price')
        P.textContent = item.book_price
        DIV.appendChild(P)

        const SPAN = document.createElement('span')
        SPAN.setAttribute('class', 'book__year')
        SPAN.textContent = item.book_year
        DIV.appendChild(SPAN)

        const DIVBox = document.createElement('div')
        DIVBox.setAttribute('class', 'box__btns')
        DIV.appendChild(DIVBox)

        const BTN = document.createElement('button')
        BTN.setAttribute('class', 'book_btn')
        BTN.innerHTML = `<i class='bx bx-edit'></i>`
        DIVBox.appendChild(BTN)
        
        const BTN2 = document.createElement('button')
        BTN2.setAttribute('class', 'book_btn2')
        BTN2.innerHTML = `<i class='bx bxs-message-square-x'></i>`
        DIVBox.appendChild(BTN2)

        content.append(DIV)
        })
    })
    .catch(err => console.log(err))
})

// SORT_LIMIT
const selected = document.getElementById('selected')
selected.addEventListener('change', (e) => {
    // console.log(e.target.value);
    content.innerHTML = ""
    fetch(`http://localhost:5000/sort_limit?page=1&limit=${e.target.value}`)
    .then(res => res.json())
    .then(data => {
        data && data.map(item => {
        const DIV = document.createElement('div')
        DIV.setAttribute('class', 'books')

        const IMG = document.createElement('img')
        IMG.setAttribute('class', 'book_img')
        IMG.setAttribute('src' , 'http://localhost:5000/img/book3.webp')
        DIV.appendChild(IMG)

        const H2 = document.createElement('h2')
        H2.setAttribute('class', 'book__title')
        H2.textContent = item.book_name
        DIV.appendChild(H2)

        const P = document.createElement('p')
        P.setAttribute('class', 'book__price')
        P.textContent = item.book_price
        DIV.appendChild(P)

        const SPAN = document.createElement('span')
        SPAN.setAttribute('class', 'book__year')
        SPAN.textContent = item.book_year
        DIV.appendChild(SPAN)

        const DIVBox = document.createElement('div')
        DIVBox.setAttribute('class', 'box__btns')
        DIV.appendChild(DIVBox)

        const BTN = document.createElement('button')
        BTN.setAttribute('class', 'book_btn')
        BTN.innerHTML = `<i class='bx bx-edit'></i>`
        DIVBox.appendChild(BTN)
        
        const BTN2 = document.createElement('button')
        BTN2.setAttribute('class', 'book_btn2')
        BTN2.innerHTML = `<i class='bx bxs-message-square-x'></i>`
        DIVBox.appendChild(BTN2)

        content.append(DIV)
        })
    })
    .catch(err => console.log(err))
})

// SORT  asc , desc, new , year
const selected2 = document.getElementById('selected2')
selected2.addEventListener('change', (e) => {
    // console.log(e.target.value);
    content.innerHTML = ""
    fetch(`http://localhost:5000/sort_name?sortName=${e.target.value}`)
    .then(res => res.json())
    .then(data => {
        data && data.map(item => {
        const DIV = document.createElement('div')
        DIV.setAttribute('class', 'books')

        const IMG = document.createElement('img')
        IMG.setAttribute('class', 'book_img')
        IMG.setAttribute('src' , 'http://localhost:5000/img/book3.webp')
        DIV.appendChild(IMG)

        const H2 = document.createElement('h2')
        H2.setAttribute('class', 'book__title')
        H2.textContent = item.book_name
        DIV.appendChild(H2)

        const P = document.createElement('p')
        P.setAttribute('class', 'book__price')
        P.textContent = item.book_price
        DIV.appendChild(P)

        const SPAN = document.createElement('span')
        SPAN.setAttribute('class', 'book__year')
        SPAN.textContent = item.book_year
        DIV.appendChild(SPAN)

        const DIVBox = document.createElement('div')
        DIVBox.setAttribute('class', 'box__btns')
        DIV.appendChild(DIVBox)

        const BTN = document.createElement('button')
        BTN.setAttribute('class', 'book_btn')
        BTN.innerHTML = `<i class='bx bx-edit'></i>`
        DIVBox.appendChild(BTN)
        
        const BTN2 = document.createElement('button')
        BTN2.setAttribute('class', 'book_btn2')
        BTN2.innerHTML = `<i class='bx bxs-message-square-x'></i>`
        DIVBox.appendChild(BTN2)

        content.append(DIV)
        })
    })
    .catch(err => console.log(err))
})



// SORT_NAME INPUT search
const form2 = document.querySelector('.header__form')
const input = document.querySelector('.header__input') 

form2.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(e.target[0].value);
    content.innerHTML = ""
    fetch(`http://localhost:5000/search?s=${e.target[0].value}`)
    .then(res  => res.json())
    .then(data => {
        data && data.map(item => {
        const DIV = document.createElement('div')
        DIV.setAttribute('class', 'books')

        const IMG = document.createElement('img')
        IMG.setAttribute('class', 'book_img')
        IMG.setAttribute('src' , 'http://localhost:5000/img/book3.webp')
        DIV.appendChild(IMG)

        const H2 = document.createElement('h2')
        H2.setAttribute('class', 'book__title')
        H2.textContent = item.book_name
        DIV.appendChild(H2)

        const P = document.createElement('p')
        P.setAttribute('class', 'book__price')
        P.textContent = item.book_price
        DIV.appendChild(P)

        const SPAN = document.createElement('span')
        SPAN.setAttribute('class', 'book__year')
        SPAN.textContent = item.book_year
        DIV.appendChild(SPAN)

        const DIVBox = document.createElement('div')
        DIVBox.setAttribute('class', 'box__btns')
        DIV.appendChild(DIVBox)

        const BTN = document.createElement('button')
        BTN.setAttribute('class', 'book_btn')
        BTN.innerHTML = `<i class='bx bx-edit'></i>`
        DIVBox.appendChild(BTN)
        
        const BTN2 = document.createElement('button')
        BTN2.setAttribute('class', 'book_btn2')
        BTN2.innerHTML = `<i class='bx bxs-message-square-x'></i>`
        DIVBox.appendChild(BTN2)

        content.append(DIV)
    })
    .catch(err => console.log(err))
  })
})



// POST_FORM_DATA
const form = document.querySelector('.form__inputs')
const button = document.querySelector('.buttons')

btn.addEventListener('click', () =>{
    form.classList.add('active')
    body.classList.add('dark')
})

button.addEventListener('click', () => {
    form.classList.remove('active')
})

btnX.addEventListener('click', () => {
    form.classList.remove('active')
})


// edit form data
const formEdit = document.querySelector('.form__edit')
const editBtn  = document.querySelector('.book_btn')

editBtn.addEventListener('click', () => {
    formE.classList.add('none')
})

// async function edit(id, name) {
//     console.log(id, name);
//     const data = await fetch(`http://localhost:5000`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//       }),
//     });
//     const data2 = await data.json();
//     if (data2) {
//       window.location.href = "/";
//     }
// }


// delete
async function delet(id) {
    const data = await fetch(`http://localhost:5000`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    const data2 = await data.json();
    if (data2) {
      window.location.href = "/";
    }
}
