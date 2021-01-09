<template>
  <div class="main__login-form login-form">
    <form action="">
      <span>Sign in to your account</span>
      <div>
        <input type="text" placeholder="Login">
        <input type="password" placeholder="Password">
      </div>
      <button @click.prevent>Log in</button>
    </form>
    <div>
      <span>Or if you don't have an account</span>
      <a href="#">Sign up.</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style>
/*login-form*/
.login-form {
  padding: 1rem 1rem;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 1rem;
  width: 25rem;
  box-shadow: -1px 7px 39px -16px rgba(0, 0, 0, 0.75);
}

.login-form form div {
  display: flex;
  flex-direction: column;
}

.login-form form div input {
  padding: .2rem .5rem;
  background-color: rgba(255, 255, 227, .7);
}

.login-form form div input {
  border-radius: .5rem;
  margin: 0 0 .5rem 0;
}

.login-form form button {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  letter-spacing: .1rem;
  border-radius: .5rem;
  background: #d1273f;
  padding: .3rem 1rem;
  color: #ffffe3;
  text-transform: uppercase;
  margin-bottom: .8rem;
  width: 100%;
  cursor: pointer;
  transition: all ease-in .3s;
}

.login-form form button:hover {
  background: darkred;
  transition: all ease-in .3s;
}

.login-form form span {
  display: block;
  font-size: 1.5rem;
  margin: 0 0 .5rem 0;
}

.login-form div span {
  font-size: .9rem;
  margin: 0 .3rem 0 0;
}
.login-form div a:hover {
  color: #000063;
}
</style>
