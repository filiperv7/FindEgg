import Vue from 'vue'
import VueRouter from 'vue-router'
import ListaProdutos from '../views/ListaProdutos'
import SobreNos from '../views/SobreNos'
import TelaCadastro from '../views/TelaCadastro'
import TelaInicial from '../views/TelaInicial.vue'
import TelaLogin from '../views/TelaLogin'
import TelaProduto from '../views/TelaProduto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: TelaInicial
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: ListaProdutos
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
    path: '/produto/:id',
    name: 'produto',
    component: TelaProduto
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
