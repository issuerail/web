<template>
  <q-layout view='lHh Lpr lFf'>
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon='menu' aria-label='Menu' @click='toggleLeftDrawer'/>
        <q-toolbar-title>
          issuerail
        </q-toolbar-title>
        <q-btn
          flat
          dense
          icon="exit_to_app"
          label="Logout"
          @click="logoutUser"
        />
      </q-toolbar>
    </q-header>
    <q-drawer v-model='leftDrawerOpen' bordered>
      <q-list>
        <q-item-label header>
          Menu
        </q-item-label>
        <ComponentMenu v-for='item in menuComponentList' :key='item.title' v-bind='item' title=""/>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { mapActions } from 'vuex';
import ComponentMenu from 'components/ComponentMenu.vue'
const componentMenuList = [
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
    ComponentMenu,
  },
  setup () {
    const leftDrawerOpen = ref(false)
    return {
      componentMenuList: componentMenuList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    ...mapActions('app', ['logout']),
    logoutUser() {
      this.logout();
    }
  }
});
</script>
