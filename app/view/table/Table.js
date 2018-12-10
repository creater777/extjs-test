/**
 * This view is an example list of people.
 */
Ext.define('TestApp.view.table.Table', {
    extend: 'Ext.grid.Grid',
    xtype: 'tableData',

    requires: [
        'TestApp.store.Products'
    ],
    height: 400,
    defaults: {
        height: 400,
    },

    listeners: {
        // select: 'onItemSelected'
    }
});
