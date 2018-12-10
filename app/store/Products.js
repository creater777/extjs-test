Ext.define('TestApp.store.Products', {
    extend: 'Ext.data.Store',

    alias: 'store.products',

    fields: [
        'id', 'name', 'date', 'in_product'
    ],

    data: { items: [
            { id: 1, name: 'Product A', date: 1544409922000, in_product: true },
            { id: 2, name: 'Product B', date: 1544409922000, in_product: true  },
            { id: 3, name: 'Product C', date: 1544409922000, in_product: true  }
        ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
