export default [
  {
    title: '业务封装组件',
    list: [
      {
        name: 'test',
        type: 'form-select',
        remoteData: {
          dataType: 'remote',
          url: '/system/dept/list-all-simple',
          ajaxMethod: 'get',
          callback: '',
        },
        formItem: {
          span: 11,
          offset: 0,
          label: '部门选择',
          required: true,
        },
        grade: 'lego',
      },
    ],
  },
];
