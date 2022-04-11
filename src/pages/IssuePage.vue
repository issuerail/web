<template>
  <IssueComponent title='Issue'/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import IssueComponent from 'components/IssueComponent.vue'
export default defineComponent ({
  name: 'IssuePage',
  components: {
    IssueComponent,
  }
})
</script>
