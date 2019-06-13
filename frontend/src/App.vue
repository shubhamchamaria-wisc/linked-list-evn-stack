<template>
  <div id="app">
    <IndexHeader/>
    <div class="center-div">
      <InsertForm @update-view="this.getAll" />
    </div>
    <div class="pad"></div>
    <div class="center-div">
      <DeleteForm @update-view="this.getAll" />
    </div>
    <div class="pad"></div>
    <div class="center-div">
      <GetElemForm />
    </div>
    <div class="pad"></div>
    <div class="center-div">
      <UpdateForm @update-view="this.getAll" />
    </div>
    <div class="pad"></div>
    <ul class="list-group" id="listed">
      <li class="list-group-item" v-for="e in elements" v-bind:key="e.key" :style="{'background-color': e[1], 'color': e[2]}">
        {{ e[3] }} : {{ e[0] }}
      </li>
    </ul>
  </div>
</template>

<script>
import IndexHeader from './components/IndexHeader.vue'
import InsertForm from './components/InsertForm.vue'
import UpdateForm from './components/UpdateForm.vue'
import DeleteForm from './components/DeleteForm.vue'
import GetElemForm from './components/GetElemForm.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    IndexHeader,
    InsertForm,
    UpdateForm,
    DeleteForm,
    GetElemForm
  },
  data: function() {
    return {
      elements: []
    }
  },
  methods: {
    getAll() {
      axios.get('http://localhost:8000/getAll').then(response => {
        var color = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"]
        var text = ["white", "white", "white", "white", "black", "black", "white"]
        var j = 0
        for (var i = 0; i < response.data.length; i++) {
            response.data[i] = [response.data[i], color[j], text[j], i]
            if(j == 6)
            {
              j = 0
              continue
            }
            j++
        }
        this.elements = response.data
      })
    }
  },
  mounted(){
    this.getAll()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

h3 {
  margin: 40px 0 0;
}

h4{
  margin-top:10px;
}

ul{
  font-size: 15px;
  font-weight: bolder;
}

.center-div {
  text-align: center;
  margin: 0 auto;
  display:inline-block;
}

.pad {
  margin-top:10px;
}
</style>
