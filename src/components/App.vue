<template>
  <header class="header">
    <div class="header__wrapper">
      <h2 class="header__logo">F<span>i</span><span>t</span>Body</h2>
      <div class="header__text">"A healthy mind is in a healthy body"</div>
      <span class="header__step step">Step {{ step[1].number }}: {{ step[1].text }}</span>
    </div>
  </header>
  <main class="main">
    <div class="main__wrapper">
<!--      <login-form/>-->
          <remaining-calculator/>
      <div>
      </div>
    </div>
  </main>
  <footer>
    <div class="footer__wrapper">
      <span>ivanShyian prod. Bless you 2021</span>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      step: [
        {
          number: 1,
          text: 'Login or create account!'
        },
        {
          number: 2,
          text: 'Calculate calories that you need'
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>
<style>
/*App*/
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

* {
  box-sizing: border-box;
}

html {
  height: 100vh;
  font-size: 15px;
  font-family: "Jost", sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.header {
  margin: 0 0 1rem 0;
}

.header__wrapper {
  text-align: center;
  padding: 1rem 0 0 0;
}

.header__logo {
  font-family: "Jost", sans-serif;
  font-size: 2rem;
  letter-spacing: .2rem;
  font-weight: 700;
}

.header__logo span:nth-child(1) {
  color: #fecb30;
}

.header__logo span:nth-child(2) {
  color: #d1273f;
}

.header__text {
  color: rgba(0, 0, 0, .5);
  margin: 0 0 2rem 0;
}
.header__step.step{
  font-family: "Jost", sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
  color: #2d203a;
}
.main {
  margin: 0 0 2rem 0;
}

.main__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 100rem;
  text-align: center;
}

.main__wrapper span {
  font-family: "Jost", sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
  color: #2d203a;
  margin: 0 0 2rem 0;
}

.footer__wrapper {
  padding: 1rem 0;
  font-size: .9rem;
  color: rgba(0, 0, 0, .6);
}
</style>
