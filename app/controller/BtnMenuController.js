Ext.define('TestApp.controller.menu.BtnMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.btnmenu',

    init: function () {
        this.leftMenu = Ext.Viewport.setMenu({
            side: 'left',
            width: 200,
            items: [{
                text: 'Settings',
                iconCls: 'x-fa fa-gear',
                handler: function() {
                    // Ext.Viewport.hideMenu('left');
                }
            }]
        }, {
            side: 'left',
            fullscreen: false,
            reveal: true
        });
    },

    destroy: function () {
        Ext.destroyMembers(this, 'leftMenu');
        this.callParent();
    },

    toggleLeft: function () {
        Ext.Viewport.toggleMenu('left');
    }
});