<template>
  <div id="app">
    <div id="topbar">
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin:0px;
  background:#f3f3f3;
}

#viewbar{
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

  .displayButton {
    margin-left:auto;
    margin-top:auto;
    margin-bottom:auto;
  }

  a {
    text-decoration:none;
  }
}

#topbar {
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
    font-family:oswald;
    font-weight:normal;
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
