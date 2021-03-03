<template>
  <div id="app">
    <div class="topbar">
      <div>
        <h3><router-link to="/">zeta</router-link></h3>
      </div>
      <div>
        <h4>Cipher-Authentication Center</h4>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: sans-serif, oswald;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666666; /*#2c3e50;*/
}

body {
  margin:0px;
  background:white;/*#f3f3f3;*/
}

.viewbar{
  background:#4d4ddc;
  overflow:hidden;
  margin-left:5px;
  margin-right:auto;
  margin-top:10px;
  position:relative;
  padding:10px;
  display:flex;
  flex-direction:row;
  height:auto;
  color: #f2f2f2;
  text-align:left;
  border-radius:10px;

  .viewinfo {
    flex-direction:column;
    margin-right:auto;
  }

  .statusMessage{
    margin:auto;
  }

  .displayButton {
    margin-left:auto;
    margin-top:auto;
    margin-bottom:auto;

    a {
      border:1px solid white;
      padding:8px;
    }

    a:hover {
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
  }

  a {
    text-decoration:none;
    color:white;
  }
}

.topbar {
  background:#31353a;
  overflow:hidden;
  margin-left:auto;
  margin-right:auto;
  position:relative;
  padding:3px;

  h3 {
    margin-block-start:5px;
    margin-block-end:5px;
    margin-left:10px;
    margin-right:10px;
  }

  h4 {
    margin-block-start:5px;
    margin-block-end:5px;
    /*font-weight:normal;*/
  }

  div {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 4px 6px;
  font-size: 17px;
  text-decoration:none;
  }

  a {
    color:#f2f2f2;
    &.router-link-exact-active {
    text-decoration:none;
  }
  }
}

</style>
