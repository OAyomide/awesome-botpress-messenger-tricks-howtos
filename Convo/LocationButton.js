
bp.convo.start(event, convo => {

  const options = {
    quick_replies: [{
      content_type: "location",
      title: "location"
    }]
  };
  const question = txt => bp.messenger.sendText(event.user.id, txt, options, {typing: true});
  convo.messageTypes = ['postback', 'quick_reply'];
  convo.threads['default'].addQuestion(question(`Send me your location please`, response => {

    bp.logger.debug(`User location gotten.`);
    let lat = response.raw.payload.coordinates.lat;
    let long = response.raw.payload.coordinates.long;

    bp.logger.info(`Latitude: ${lat} and Longitude: ${long}`);
  }));
});