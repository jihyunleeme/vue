import SearchModel from './models/SearchModel.js'

new Vue({ //파라미터로 오브젝트를 넣어줌 
    el: '#app',
    data: {
        query: '', // 입력데이터를 받아 저장, 양방향 바인딩
        submitted: false,
        searchResult: []
    },
    methods: {
        onSubmit(e) {
            // e.prevetDefuault() 화면 갱신을 막아주기 (javascript에서) vue에서는 .prevent를 써준다
            this.search()
        },
        onKeyup() {
            if (!this.query.length) {
                this.resetForm()
            }
        },
        onReset() {
            this.resetForm();
            // todo 검색결과를 숨기는 로직
        },
        search() {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        },
        resetForm() {
            this.query = ''
            // todo remove result
            debugger
        }
    }
})// vue 인스턴스 만들기