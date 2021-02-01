export default {
  mounted(el) {
    if (el.id !== 'calHeight' && el.id !== 'calDesWeight') {
      el.focus()
    }
  }
}
