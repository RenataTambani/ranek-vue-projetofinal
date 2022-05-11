<template>
  <div id="app">
   <TheHeader></TheHeader>
   <main id="main">
    <router-view/>
   </main>
   <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader"
import TheFooter from "@/components/TheFooter"

export default({
  components: {
    TheHeader,
    TheFooter
  }
  
  
})
</script>



<style>
* {
  box-sizing: border-box;
}
body, ul, li, h1, h2, p {
  margin: 0px;
  padding: 0px;
}
ul {
  list-style: none;
}

body {
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: #345;
  background: url('./assets/pattern.svg') repeat top;
}
a {
  color: #345;
  text-decoration: none;
  list-style: none;
}
img {
  max-width: 100%;
  display: block;
}
.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all .3s;
  border: none;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  cursor: pointer;
}

.btn:hover {
  background: #65d;
  transform: scale(1.1);
}
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

}
#main {
  flex: 1;
}
</style>
