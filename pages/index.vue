<template>
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <g-card card-body-classes="table-full-width">
        <h4 slot="header" class="card-title">Проекты</h4>
        <el-table :data="tableData">
          <el-table-column
            min-width="150"
            sortable
            label="Название"
            property="title"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Заказчик"
            property="customer"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Статус"
            property="status"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            align="right"
            header-align="right"
            label="Бюджет"
            property="budget"
          ></el-table-column>
        </el-table>
      </g-card>
    </div>
  </div>
</template>

<script>
import { Table, TableColumn } from 'element-ui';

export default {
  name: 'IndexPage',
  data () {
    return {
      tableData: [
        {
          id: 1,
          title: 'Пресс-портал',
          customer: 'Сергей Левченко',
          status: 'Завершен',
          budget: '2933200'
        },
        {
          id: 2,
          title: 'Чат-бот мессенджеры',
          customer: 'Сергей Левченко',
          status: 'Тестирование и отладка',
          budget: '3513600'
        },
        {
          id: 3,
          title: 'Онлайн покупка Помощь на дороге',
          customer: 'Сергей Левченко',
          status: 'Проектирование',
          budget: '1142100'
        },
        {
          id: 4,
          title: 'Audatex',
          customer: 'Сергей Левченко',
          status: 'Реализация',
          budget: '890800'
        },
        {
          id: 5,
          title: 'MyService',
          customer: 'Какая-то Марина',
          status: 'Проектирование',
          budget: '4422400'
        }
      ],
    };
  },
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
}
</script>
