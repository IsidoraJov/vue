<template>
  <div>


  <div class="jumbotron text-center">
    <h1>Company</h1>
    <p>We specialize in blablabla</p>
    <form class="form-inline">
      <div class="input-group">
        <input type="email" class="form-control" size="50" placeholder="Email Address" required>
        <div class="input-group-btn">
          <button type="button" class="btn btn-danger">Subscribe</button>
        </div>
      </div>
    </form>
  </div>

  <!-- Container (About Section) -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-8">
        <h2>About Company Page</h2>
        <h4>Lorem ipsum..</h4>
        <p>Lorem ipsum..</p>
        <button class="btn btn-default btn-lg">Get in Touch</button>
      </div>
      <div class="col-sm-4">
        <span class="glyphicon glyphicon-signal logo"></span>
      </div>
    </div>
  </div>

  <div class="container-fluid bg-grey">
    <div class="row">
      <div class="col-sm-4">
        <span class="glyphicon glyphicon-globe logo"></span>
      </div>
      <div class="col-sm-8">
        <h2>Our Values</h2>
        <h4><strong>MISSION:</strong> Our mission lorem ipsum..</h4>
        <p><strong>VISION:</strong> Our vision Lorem ipsum..</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Welcome Page"
}
</script>

<style scoped>

.jumbotron {
  background-color: #f4511e;
  color: #fff;
  padding: 100px 25px;
}
.container-fluid {
  padding: 60px 50px;
}
.bg-grey {
  background-color: #f6f6f6;
}
.logo {
  font-size: 200px;
}
@media screen and (max-width: 768px) {
  .col-sm-4 {
    text-align: center;
    margin: 25px 0;
  }
}
</style>