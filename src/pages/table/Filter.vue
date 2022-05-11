<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="规则编号">
                <a-input v-model="queryParam.id" placeholder="" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="使用状态">
                <a-select v-model="queryParam.status" placeholder="请选择" default-value="0">
                  <a-select-option value="0">全部</a-select-option>
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <template v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item label="调用次数">
                  <a-input-number v-model="queryParam.callNo" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="更新日期">
                  <a-date-picker v-model="queryParam.date" style="width: 100%" placeholder="请输入更新日期" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="使用状态">
                  <a-select v-model="queryParam.useStatus" placeholder="请选择" default-value="0">
                    <a-select-option value="0">全部</a-select-option>
                    <a-select-option value="1">关闭</a-select-option>
                    <a-select-option value="2">运行中</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="使用状态">
                  <a-select placeholder="请选择" default-value="0">
                    <a-select-option value="0">全部</a-select-option>
                    <a-select-option value="1">关闭</a-select-option>
                    <a-select-option value="2">运行中</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </template>
            <a-col :md="(!advanced && 8) || 24" :sm="24">
              <span
                class="table-page-search-submitButtons"
                :style="(advanced && { float: 'right', overflow: 'hidden' }) || {}"
              >
                <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => (this.queryParam = {})">重置</a-button>
                <a @click="toggleAdvanced" style="margin-left: 8px">
                  {{ advanced ? '收起' : '展开' }}
                  <a-icon :type="advanced ? 'up' : 'down'" />
                </a>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <dc-table :dataSource="data" :columns="columns"> </dc-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import DcTable from '@/components/_DC/Table'

export default {
  components: {
    DcTable,
  },
  methods: {
    actionHandler(record) {
      alert(JSON.stringify(record))
    },
    toggleAdvanced() {
      this.advanced = !this.advanced
    },
  },
  data() {
    return {
      queryParam: {},
      advanced: false,
      columns: [
        {
          dataIndex: 'textField',
          key: 'textField',
          title: 'Text',
        },
        {
          dataIndex: 'customField',
          key: 'customField',
          title: () => (
            <div>
              <a-icon type="smile-o" /> Custom (Title | Column)
            </div>
          ),
          customRender: (text) => `爱好: ${text}`,
        },
        {
          dataIndex: 'tags',
          key: 'tags',
          title: 'Tags',
          customRender: (tags) =>
            tags.map((tag) => (
              <a-tag key={tag} color={tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'}>
                {tag.toUpperCase()}
              </a-tag>
            )),
        },
        {
          title: 'Action',
          // _ aka text 字段 为空
          customRender: (_, record) => (
            <div>
              <a vOn:click={() => this.actionHandler(record)}>{record.textField}</a>
              <a-divider type="vertical" />
              <a vOn:click={() => this.actionHandler(record)}>{record.customField}</a>
              <a-divider type="vertical" />
              <a class="ant-dropdown-link">
                {' '}
                更多操作 <a-icon type="down" />{' '}
              </a>
            </div>
          ),
        },
      ],
      data: [
        {
          key: '0',
          textField: '唐僧',
          customField: '唠叨',
          tags: ['cool'],
        },
        {
          key: '1',
          textField: '八戒',
          customField: '贪婪',
          tags: ['loser'],
        },
        {
          key: '2',
          textField: '悟空',
          customField: '较真',
          tags: ['key person'],
        },
        {
          key: '3',
          textField: '沙僧',
          customField: '勤勉',
          tags: ['winner'],
        },
      ],
    }
  },
}
</script>

<style></style>
