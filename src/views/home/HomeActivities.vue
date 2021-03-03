<template>
  <div class="main__activities">
    <div class="activities__table">
      <h3>Activities</h3>
      <span>Reduced: 253 kcal</span>
      <table>
        <tr>
          <th>№</th>
          <th>Type</th>
          <th>Time</th>
          <th>Calories</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Jogging</td>
          <td>30min</td>
          <td>253</td>
        </tr>
      </table>
    </div>
    <form>
      <label for="act">Choose an activity</label>
      <div>
        <select id="act">
          <option selected>Choose..</option>
          <option value="walk">Walking</option>
          <option value="jog">Jogging</option>
          <option value="swim">Swimming</option>
        </select>
        <select>
          <option selected>Time spent..</option>
          <option value="15">15 min</option>
          <option value="30">30 min</option>
          <option value="45">45 min</option>
          <option value="60">60 min</option>
          <option value="90">90 min</option>
          <option value="120">120 min</option>
        </select>
      </div>
      <button>Commit</button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import "../../template";
@include buttonStyling;
@include inputStyling;
.activities__table {
  width: 100%;
  table {
    width: 80%;
    margin: 0 auto;
    tr th {
      @include blackFont(Quicksand, .4);
    }
    tr td {
      border: 1px solid $grey-font;
      @include blackFont(Jost, 1);
    }
  }
}
.main__activities {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  h3 {
    font-family: "Jost", sans-serif;
    color: #2d203a;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  span {
    font-family: "Quicksand", sans-serif;
    color: #b67800;
    font-size: 1.5rem;
  }
  form {
    padding-bottom: 1rem;
    width: 60%;
    label {
      font-size: 1.3rem;
      color: #2d203a;
      font-family: "Quicksand", sans-serif;
      margin-bottom: 1rem;
    }
    div {
      margin-bottom: 1rem;
      select {
        width: 25%;
        font-size: 1.1rem;
      }
    }
  }
}
</style>
