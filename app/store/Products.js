Ext.define('TestApp.store.Products', {
    extend: 'Ext.data.Store',

    alias: 'store.products',

    fields: [
        'id', 'name', 'date', 'in_product'
    ],

    data: { items: [
            { id: 1, name: 'Product A', date: '10.12.2018', in_product: true },
            { id: 2, name: 'Product B', date: '10.12.2018', in_product: true  },
            { id: 3, name: 'Product C', date: '10.12.2018', in_product: true  }
        ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
