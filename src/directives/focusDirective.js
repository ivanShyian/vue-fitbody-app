export default {
  mounted(el) {
    console.log(el.id)
    if (el.id !== 'calHeight' && el.id !== 'calDesHeight') {
      el.focus()
    }
  }
}
