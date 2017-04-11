
var pubnubDemo = new PubNub({
    publishKey: 'pub-c-66ffc96d-78a7-4f2e-b911-8233728279e6',
    subscribeKey: 'sub-c-df6e4e44-1e59-11e7-962a-02ee2ddab7fe'
});



// Subscribe to the demo_tutorial channel
pubnubDemo.addListener({
    message: function(message){
        $('#questions').html(message.message.question)
        $('#answers').html(message.message.answers)
        console.log(message.message)
    }
})

pubnubDemo.subscribe({
    channels: ['questions-capitals']
});

// Publish a simple message to the demo_tutorial channel
pubnubDemo.publish({
    message: {
        "color" : "RED"
    },
    channel: 'questions-capitals'
});
