import Mock from 'mockjs2'
import { builder, getQueryParameters, getBody } from '@/mock/util'

const totalCount = 5701

const list = (options) => {
  const parameters = getQueryParameters(options)

  const result = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)

  return builder({
    pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: result,
  })
}

const create = (options) => {
  const body = getBody(options)
  console.log('mock 服务接收到的 Bar 表单提交值:', body)

  // 模拟数据库创建失败
  const randomNumber = Math.random() // (inclusive of 0, but not 1)
  const success = randomNumber > 0.4

  if (success) {
    return builder(
      {
        id: Mock.mock('@guid'),
        ...body,
      },
      '',
      200,
      { 'Custom-Header': Mock.mock('@guid') }
    )
  }
  return builder(
    {
      ...body,
    },
    '',
    500,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}

Mock.mock(/\/demo\/list/, 'get', list)
Mock.mock(/\/demo\/create/, 'post', create)
