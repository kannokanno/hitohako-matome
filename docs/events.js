function getEvents(prefecture) {
  var allEvents = getAllEvents();
  if (prefecture === '全国') {
    return allEvents;
  }
  return allEvents.filter(function(event) {
    return event.prefecture === prefecture;
  });
}

function getAllEvents() {
  return [
    // { prefecture: '', city: '', name: '', url: '', date: '', startTime: '', endTime: ''},
  ];
}
