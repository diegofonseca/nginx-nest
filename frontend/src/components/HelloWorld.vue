<script>
import axios from 'axios'
import { ref } from 'vue';  

export default {

  props: {
    msg: String,
  },

  data() {
    return {
      count: 3,
      items: [],
      pessoa: {
        name: ''
      }
    }
  },

  created() {
    this.buscar()
  },

  methods: {
    async buscar() {
      let response = await axios.get('/api/pessoa');

      this.items = response.data;
    },

    async criar() {
      let response = await axios.post('/api/pessoa', this.pessoa);
      await this.clear();
      await this.buscar();
    },

    async atualizar() {
      let response = await axios.patch('/api/pessoa/' + this.pessoa.id, this.pessoa);
      await this.clear();
      await this.buscar();
    },

    async excluir(pessoa) {
      let response = await axios.delete('/api/pessoa/' + pessoa.id);
      await this.clear();
      await this.buscar();
    },

    async clear() {
      this.pessoa = {
        name: ''
      }
    }
  }
}

</script>

<template>
  <h1>Pessoas</h1>

  <div class="card">
    <input type="text" v-model="pessoa.name"/>
    <button @click="pessoa.id ? atualizar() : criar()">{{pessoa.id? 'ATUALIZAR' : 'SALVAR'}}</button>
    <button @click="clear()">NOVO</button>
  </div>

  <div class="card">
    <ul>
      <li v-for="item in items">{{item.name}}  <span @click="this.pessoa = item">Editar</span> | <span @click="excluir(item)">Excluir</span></li>
    </ul>
  </div>

  <p>
    NGINX + NEST + VUEJS
    <a href="https://github.com/diegofonseca/nginx-nest" target="_blank">https://github.com/diegofonseca/nginx-nest</a>
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
