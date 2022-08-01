<template>
  <el-table :data="tableData">
    <el-table-column
      v-for="column in tableColumns"
      :key="column.propertyName"
      :min-width="column.minWidth || 150"
      :sortable="column.sortable || false"
      :label="column.label"
      :property="column.propertyName"
    ></el-table-column>
  </el-table>
</template>
<script>
import { Table, TableColumn } from 'element-ui';

export default {
  name: 'TableComponent',
  props: {
    tableData: {
      type: Array,
      default: [],
    },
    tableColumns: {
      type: Array,
      default: [],
    }
  },
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  }
}
</script>
