module.exports = {
    uiPort: process.env.PORT || 1880,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    flowFile: 'flows.json',
    
    // ALLOW FUNCTION NODES TO USE THE MONGODB DRIVER NATIVELY
    functionGlobalContext: {
        mongodb: require('mongodb')
    },
    
    exportGlobalContextKeys: false,
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },
    adminAuth: null
};
