const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const apiJson=[
  {
    id:1,
    name:'招投标管理'
  },
  {
    id: 2,
    name: '商标注册'
  },
  {
    id: 3,
    name: '战略蓝图绘制'
  }, {
    id: 4,
    name: '融资报告'
  }, {
    id: 5,
    name: '管理体系绘制'
  }, {
    id: 6,
    name: '推广规划'
  }, {
    id: 7,
    name: '合同拟定'
  }, {
    id: 8,
    name: '商业模式绘制'
  }, {
    id: 9,
    name: '运营计划'
  }, {
    id: 10,
    name: '品牌规划'
  }, {
    id: 11,
    name: '简历优化'
  }, {
    id: 12,
    name: '汇报材料'
  }, {
    id: 13,
    name: '可研报告'
  }, {
    id: 14,
    name: '工作计划'
  }, {
    id: 15,
    name: '路演PPT'
  }, {
    id: 16,
    name: '岗位职责'
  }, {
    id: 17,
    name: '组织架构'
  }, {
    id: 18,
    name: '流程梳理'
  }, {
    id: 19,
    name: '制度拟定'
  },
  {
    id: 20,
    name: '其他'
  }
];
module.exports = {
  formatTime: formatTime,
  apiJson: apiJson
}
