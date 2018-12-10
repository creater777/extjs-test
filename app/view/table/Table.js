/**
 * This view is an example list of people.
 */
Ext.define('TestApp.view.table.Table', {
    extend: 'Ext.grid.Grid',
    xtype: 'tableData',

    requires: [
        'TestApp.store.Personnel'
    ],

    title: 'Personnel',

    listeners: {
        select: 'onItemSelected'
    }
});
