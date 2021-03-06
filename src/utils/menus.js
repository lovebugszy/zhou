export const menus = [
    {
        key:'/m/business',title:'业务操作',icon:'icon_work',
        sub:[
            {key:'/m/business/entry',title:'入库单',icon:'',},
            {key:'/m/business/output',title:'出库单',icon:'',},
            {key:'/m/business/rejecting',title:'拒收单',icon:'',},
            {key:'/m/business/returnGoods',title:'销售退货单',icon:'',},
            {key:'/m/business/otherList',title:'报损出库单',icon:'',},
            {key:'/m/business/dangerList',title:'货损赔偿单',icon:'',},
            {key:'/m/business/purchaseList',title:'采购退货单',icon:'',},
            {key:'/m/business/collectList',title:'代收货款',icon:'',}
        ],
    },
    {
        key:'/m/demo',title:'demo',icon:'icon_work',
        sub:[
            {key:'/m/demo/step1',title:'步骤条横向',icon:''},
            {key:'/m/demo/step2',title:'步骤条竖向',icon:''},
            {key:'/m/demo/upload',title:'上传图片',icon:''},
            {key:'/m/demo/modal',title:'模态框',icon:''},
            {key:'/m/demo/input',title:'输入框',icon:''},
        ]
    },
    {
        key:'/m/inventoryManagement',title:'库存管理',icon:'icon_stock',
        sub:[
            {key:'/m/inventoryManagement/inventInfo',title:'库存信息',icon:'',},
            {key:'/m/inventoryManagement/collectList3',title:'库存异动',icon:'',},
        ],
    },
    {
        key:'/m/info',title:'信息管理',icon:'icon_info',
        sub:[
            {key:'/m/info/enterprise',title:'企业管理',icon:'',},
            {key:'/m/info/staff',title:'员工管理',icon:'',},
            {key:'/m/info/role',title:'角色管理',icon:'',},
            {key:'/m/info/warehouse',title:'仓库管理',icon:'',},
        ],
    },
    {
        key: '/m/report', title: '对帐表', icon: 'icon_info',
        sub: [
            {key: '/m/report/storyList', title: '出库自提表', icon: '',},
            {key: '/m/report/deliveryList', title: '配送对帐表', icon: '',},
        ],
    },
    {
        key:'/m/detailed',title:'订单明细报表',icon:'icon_order',
        sub:[
            {key:'/m/detailed/entry',title:'入库单明细报表',icon:'',},
            {key:'/m/detailed/output',title:'出库单明细报表',icon:'',},
            {key:'/m/detailed/rejecting',title:'拒收单明细报表',icon:'',},
            {key:'/m/detailed/returnGoods',title:'销售退货单明细报表',icon:'',},
            {key:'/m/detailed/otherList',title:'报损出库单明细报表',icon:'',},
            {key:'/m/detailed/dangerList',title:'货损赔偿单明细报表',icon:'',},
            {key:'/m/detailed/waredetail',title:'库存明细报表',icon:'',},
        ],
    },
    {
        key:'/m/statistics',title:'统计报表',icon:'icon_statistics',
        sub:[
            {key:'/m/statistics/entry',title:'入库单统计',icon:'',},
            {key:'/m/statistics/output',title:'出库单统计',icon:'',},
            {key:'/m/statistics/returnGoods',title:'销售退货单统计',icon:'',},
            {key:'/m/statistics/otherList',title:'报损出库单统计',icon:'',},
            {key:'/m/statistics/dangerList',title:'货损赔偿单统计',icon:'',},
        ],
    },
    {
        key:'/m/analysis',title:'订单分析',icon:'icon_analysis',
        sub:[
            {key:'/m/analysis/output',title:'出库单分析',icon:'',},
            {key:'/m/analysis/outputCompletionRate',title:'出库完成率',icon:'',},
            {key:'/m/analysis/returnGoods',title:'销售退货单分析',icon:'',},
        ],
    }
];