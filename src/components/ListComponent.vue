<template>
  <div class='q-pa-md'>
  <q-table :tile='title' :rows='issues' :columns='columns' row-key='id' :filter='filter'>
    <template v-slot:top>
      <q-btn size='sm' color='primary' outline label='NEW ISSUE' @click="$router.replace('/issue')"/>
      <q-btn size='sm' class='q-ml-sm' color='primary' outline label='EXPORT TO CSV' icon-right='archive' @click='exportTable'/>
      <q-space/>
      <q-input borderless dense debounce='300' color='primary' v-model='filter' placeholder='Search'>
        <template v-slot:append>
          <q-icon name='search'/>
        </template>
      </q-input>
    </template>
    <template v-slot:header='props'>
      <q-tr :props='props'>
        <q-th v-for='col in props.cols' :key='col.name' :props='props' class='text-primary'>
          {{ col.label }}
        </q-th>
      </q-tr>
    </template>
    <template v-slot:body='props'>
      <q-tr :props='props'>
        <q-td auto-width key='id' :props='props'>
          <q-btn size='sm' color='primary' flat dense @click="$router.replace('/issue')">
            {{ props.row.id }}
          </q-btn>
        </q-td>
        <q-td auto-width key='type' :props='props'>
          <q-badge :color='getColor(props.row.type)' :label='props.row.type' />
        </q-td>
        <q-td auto-width key='status' :props='props'>
          {{ props.row.status }}
        </q-td>
        <q-td auto-width key='priority' :props='props'>
          {{ props.row.priority }}
        </q-td>
        <q-td auto-width key='version' :props='props'>
          {{ props.row.version }}
        </q-td>
        <q-td auto-width key='owner' :props='props'>
          {{ props.row.owner }}
        </q-td>
        <q-td auto-width key='summary' :props='props'>
          {{ props.row.summary }}
        </q-td>
        <q-td auto-width key='project' :props='props'>
          {{ props.row.project }}
        </q-td>
        <q-td auto-width key='component' :props='props'>
          {{ props.row.component }}
        </q-td>
        <q-td auto-width key='reporter' :props='props'>
          {{ props.row.reporter }}
        </q-td>
        <q-td auto-width>
          <q-btn size='sm' color='primary' flat dense icon='edit' @click="$router.replace('/issue')"/>
          <q-btn size='sm' color='primary' flat dense icon='delete' @click='confirm = true'/>
          <q-dialog v-model='confirm' persistent>
            <q-card>
              <q-card-section class='row items-center'>
                <q-icon size='sm' color='primary' name='warning' falt/>
                <span class='q-ml-sm'>Delete this issue now?</span>
              </q-card-section>
              <q-card-actions align='right'>
                <q-btn label='Cancel' color='primary' flat v-close-popup/>
                <q-btn label='Delete' color='primary' flat v-close-popup/>
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-td>
      </q-tr>
    </template>
  </q-table>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, ref, toRef } from 'vue'
import { Issue } from './models'
const columns = [
  { name: 'id', align: 'left', label: 'ID', field: 'id', sortable: true, required: true },
  { name: 'type', align: 'left', label: 'Type', field: 'type', sortable: true },
  { name: 'status', align: 'left', label: 'Status', field: 'status', sortable: true, required: true },
  { name: 'priority', align: 'left', label: 'Priority', field: 'priority', sortable: true },
  { name: 'version', align: 'left', label: 'Version', field: 'version', sortable: true },
  { name: 'owner', align: 'left', label: 'Owner', field: 'owner', sortable: true },
  { name: 'summary', align: 'left', label: 'Summary', field: 'summary', sortable: true, required: true },
  { name: 'project', align: 'left', label: 'Project', field: 'project', sortable: true, required: true },
  { name: 'component', align: 'left', label: 'Component', field: 'component', sortable: true },
  { name: 'reporter', align: 'left', label: 'Reporter', field: 'reporter', sortable: true, required: true },
]
export default defineComponent({
  name: 'ListComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    issues: {
      type: Array as PropType<Issue[]>,
      default: () => []
    }
  },
  setup (props) {
    const filter = ref('')
    const rows = toRef(props, 'issues')
    const type = 'Feature'
    return {
      columns,
      confirm: ref(false),
      filter,
      rows,
      type,
      exportTable () {
        // TODO
      },
      getColor (type: string) {
        if (type === 'Bug') return 'red'
        else if (type === 'Feature') return 'orange'
        else return 'green'
      },
    }
  }
})
</script>
