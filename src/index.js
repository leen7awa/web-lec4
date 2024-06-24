// import { model } from "./model.js"
// import { Site } from "./site.js"

// (new Site('.content')).render(model)

// new data
const temp = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas nesciunt consequuntur cumque placeat eveniet laudantium fuga laborum beatae, mollitia aspernatur cupiditate? Minima beatae, perspiciatis velit sequi accusantium ea architecto a?'
const data = [
    {
        type: 'title',
        value: 'Hello World'
    },
    {
        type: 'text',
        value: temp
    },
    {
        type: 'columns',
        value: [temp, temp, temp]
    },
    {
        type: 'image',
        value: './assets/ort.jpg'
    }
]

const col = v => {
    return `<div class="col-sm">${v}</div>`
}

const row = v => {
    return `<div class="row">${v}</div>`;
}


const renderContent = (d) => {
    const content = document.querySelector('.content')
    d.forEach(item => {
        let el
        switch (item.type) {
            case 'title':
                el = row(col(`<h1>${item.value}</h1>`))
                break;

            case 'text':
                el = row(col(`<p>${item.value}</p>`))
                break;
            case 'columns':
                const cols = item.value.map(v => col(v)).join('')
                el = row(cols)
            break;
            case 'image':
                el = row(col(`<img class="img-responsive" src="${item.value}"/>`))
                break;
            default:
                break;
        }
        content.insertAdjacentHTML('beforeend', el)
    });
}

renderContent(data)