export default {
  props: ['tabs', 'selectedTab'],
  methods: {
    onClickTab(tab) {
      this.$emit('@change', tab)
    }
  }
}