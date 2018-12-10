Ext.define('TestApp.store.Delivery', {
    extend: 'Ext.data.Store',

    alias: 'store.delivery',

    fields: [
        'id', 'name', 'date', 'in_product'
    ],

    associations: [
        {
            type: 'belongsTo',
            model: 'TestApp.store.Products',
            foreignKey: 'product_id',
            getterName: 'getProduct',
            associationKey: 'id'
        }

    ],

    data: { items: [
            { product_id: 1, period: 1544409922000, delta: 100 },
            { product_id: 2, period: 1544409922000, delta: 50  },
            { product_id: 3, period: 1544409922000, delta: 30  }
        ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
