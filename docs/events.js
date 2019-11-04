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
    { prefecture: '兵庫', city: '神戸', name: '和田岬一箱古本市', message: '和田岬は神戸市兵庫区の南部にある、昔懐かしい下町です。ここで、はじめての一箱古本市を開催します！和田岬ののんびりした雰囲気と下町情緒をお楽しみください。', url: 'https://twitter.com/wadamisaki2019', date: '11月17日(日)', startTime: '10:00', endTime: '16:00'},
  ];
}
