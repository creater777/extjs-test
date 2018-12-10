Ext.define('TestApp.view.menu.BtnMenu', {
    extend: 'Ext.Panel',
    xtype: 'btnmenu',
    controller: 'btnmenu',

    requires: [
        'Ext.Menu'
    ],

    autoSize: true,
    bodyPadding: 10,
    width: 230,

    viewModel: {
        data: {
            menuGroups: {
                platform: 'desktop'
            }
        }
    },

    defaults: {
        xtype: 'button',
        margin: '10 0',
        width: '100%'
    },

    items: [{
        xtype: 'button',
        margin: '10 0',
        width: '100%',
        iconCls: 'x-fa fa-list',
        layout: 'fit',

        text: 'Toggle left menu',
        handler: 'toggleLeft'
    }]
});