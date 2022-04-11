<template>
  <ListComponent title='Issues' :issues='issues'/>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { Issue } from 'components/models'
import ListComponent from 'components/ListComponent.vue'
export default defineComponent ({
  name: 'ListPage',
  components: {
    ListComponent,
  },
  setup () {
    const issues = ref<Issue[]>([
      {
        id: 10000,
        type: 'Bug',
        status: 'New',
        priority: '1',
        version: '1.0',
        owner: 'name@example.com',
        summary: 'Create issue',
        project: 'Demo',
        component: 'Web',
        reporter: 'name@example.com'
      },
      {
        id: 10001,
        type: 'Feature',
        status: 'Accepted',
        priority: '2',
        version: '1.1',
        owner: 'name@example.com',
        summary: 'Create issue',
        project: 'Demo',
        component: 'Web',
        reporter: 'name@example.com'
      },
      {
        id: 10002,
        type: '----',
        status: 'AwaitingInformation',
        priority: '3',
        version: '1.2',
        owner: 'name@example.com',
        summary: 'Create issue',
        project: 'Demo',
        component: 'Web',
        reporter: 'name@example.com'
      },
      {
        id: 10003,
        type: '----',
        status: 'ChangeUnderReview',
        priority: '----',
        version: '----',
        owner: '----',
        summary: 'Create issue',
        project: 'Demo',
        component: '----',
        reporter: 'name@example.com'
      }
    ]);
    return {
      issues
    }
  }
})
</script>
