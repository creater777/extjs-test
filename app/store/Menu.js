Ext.define('TestApp.store.Menu', {
    extend: 'Ext.data.Store',

    alias: 'store.menu',

    fullscreen: true,

    items: {
        xtype: 'menu',
        floated: false,
        docked: 'left',
        items: [{
            text: 'regular item 1'
        }, {
            text: 'regular item 2'
        }, {
            text: 'regular item 3'
        }]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});