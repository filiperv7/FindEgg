import Vue from 'vue'
import VueRouter from 'vue-router'
import TelaInicial from '../views/TelaInicial.vue'
import ListaFornecedores from '../views/ListaFornecedores'
import TelaCadastro from '../views/TelaCadastro'
import SobreNos from '../views/SobreNos'
import TelaFornecedor from '../views/TelaFornecedor'
import TelaLogin from '../views/TelaLogin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: TelaInicial
  },
  {
    path: '/fornecedores',
    name: 'fornecedores',
    component: ListaFornecedores
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: TelaCadastro
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: SobreNos
  },
  {
    path: '/fornecedor',
    name: 'fornecedor',
    component: TelaFornecedor
  },
  {
    path: '/login',
    name: 'login',
    component: TelaLogin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
