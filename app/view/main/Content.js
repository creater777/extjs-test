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
            // title: 'Home',
            // iconCls: 'x-fa fa-home',
            layout: 'fit',
            items: [{
                xtype: 'tableData',
                height: 400,
                columns: [
                    { text: 'Name',  dataIndex: 'name', width: 100 },
                    { text: 'Email', dataIndex: 'email', width: 230 },
                    { text: 'Phone', dataIndex: 'phone', width: 150 }
                ],
                store: {
                    type: 'personnel'
                }
            }]
        }
    ]

})