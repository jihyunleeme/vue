import View from './View.js'

const tag = '[ResultView]' // debugging을 위한 태그 

const ResultView = Object.create(View)

ResultView.message = {
    No_Result: '검색결과가 없습니다'
}

ResultView.setup = function (el) {
    this.init(el) // el를 주입받아서 내부 속성을 가지고 있음
}

ResultView.render = function(data = []) {
    console.log(tag, "render()", data)
    this.el.innerHTML = data.length ? this.getSearchResultHtml(data) : this.message.No_Result
    this.show()
}

ResultView.getSearchResultHtml = function (data) {
    return data.reduce((html, item) => {
        html += this.getSearchItemtHtml(item)
        return html
    }, '<ul>') + '</ul>'
}

ResultView.getSearchItemtHtml = function (item) {
    return `<li>
        <img src="${item.image}">
        <p>${item.name}</p>    
        </li>`
}

export default ResultView