/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('TestApp.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.layout.VBox',

        'TestApp.view.main.Header',
        'TestApp.view.main.Content',
    ],

    bodyPadding: 10,
    defaultType: 'panel',

    layout: {
        type: 'vbox'
    },

    defaults: {
        bodyPadding: 10,
        border: false
    },

    items: [
        {
            xtype: 'app-header',
        },
        {
            xtype: 'app-content'
        }
    ]
});
