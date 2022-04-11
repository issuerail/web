<template>
  <q-layout view='lHh Lpr lFf'>
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon='menu' aria-label='Menu' @click='toggleLeftDrawer'/>
        <q-toolbar-title>
          issuerail
        </q-toolbar-title>
        <q-btn round flat size='md'>
          Jia
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer v-model='leftDrawerOpen' bordered>
      <q-list>
        <q-item-label header>
          Menu
        </q-item-label>
        <MenuComponent v-for='item in menuComponentList' :key='item.title' v-bind='item'/>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import MenuComponent from 'components/MenuComponent.vue'
const menuComponentList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'GitHub',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Projects',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default defineComponent({
  name: 'MainLayout',
  components: {
    MenuComponent,
  },
  setup () {
    const leftDrawerOpen = ref(false)
    return {
      menuComponentList: menuComponentList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
