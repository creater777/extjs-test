Ext.define('TestApp.view.main.Content', {
    extend: 'Ext.Panel',
    xtype: 'app-content',

    requires: [
        // 'Ext.layout.HBox',

        'TestApp.view.table.Table',
        'TestApp.view.menu.BtnMenu'
    ],

    // bodyPadding: 10,
    defaultType: 'panel',
    // layout: {
    //     type: 'hbox'
    // },
    defaults: {
        bodyPadding: 0,
        border: true
    },

    items: [
        {
            title: 'Продукция',
            // iconCls: 'x-fa fa-home',
            layout: 'fit',
            items: [{
                xtype: 'tableData',
                height: 400,
                columns: [
                    {
                        text: 'Наименование',
                        dataIndex: 'name',
                        width: 300
                    },
                    {
                        text: 'Дата',
                        dataIndex: 'date',
                        width: 200,
                        renderer: Ext.util.Format.dateRenderer('d.m.Y')
                    },
                    {
                        text: 'В производстве',
                        dataIndex: 'in_product',
                        width: 150,
                        renderer: function(value){
                            return value ? 'Да' : 'Нет'
                        }
                    }
                ],
                store: {
                    type: 'products'
                }
            }]
        }
    ]

})