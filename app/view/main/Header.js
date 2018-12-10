Ext.define('TestApp.view.main.Header', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-header',

    requires: [
        'TestApp.view.menu.BtnMenu'
    ],
    height: 50,

    items: [        {
        // title: 'Home',
        iconCls: 'x-fa fa-home',
        layout: 'fit',
        items: [{
            xtype: 'btnmenu'
        }]
    }]

})