<template>
  <ComponentIssue title='Issue'/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import ComponentIssue from 'components/ComponentIssue.vue'
export default defineComponent ({
  name: 'PageIssue',
  components: {
    ComponentIssue,
  },
  props: [
    'issueId'
  ],
})
</script>
