exports.handler = function( event, context ) {

    var response = {
        outputSpeech: {
            type: "PlainText",
            text: "Hello World!"
        },
        shouldEndSession: true
    };

    context.succeed( { response: response } );

};