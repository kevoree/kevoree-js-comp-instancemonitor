var AbstractComponent = require('kevoree-entities').AbstractComponent,
    async = require('async'),
    consumer = require("./InstanceMonitorConsumer");

/**
 * Kevoree component
 * @type {InstanceMonitor}
 */
var InstanceMonitor = AbstractComponent.extend({
    toString: 'InstanceMonitor',

    queue: async.queue(consumer, concurrency=1),

    dic_key: { datatype: 'string', optional: false },
    dic_value: { datatype: 'string', optional: false },
    dic_limit: { datatype: 'integer', optional: false },

    out_signal: function () {},

    in_trigger: function() {
        this.queue.push({"component": this});
    }
});

module.exports = InstanceMonitor;
