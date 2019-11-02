function getEvents(prefecture) {
  switch (prefecture) {
    case '東京':
      return getTokyoEvents();
    case '大阪':
      return getOsakaEvents();
    default:
      return [];
  }
}

function getTokyoEvents() {
  return [
    { name: '東京の一箱古本市その1', url: '...', date: '10月20日(日)', startTime: '11:00', endTime: '18:00'},
    { name: '東京の一箱古本市その1', url: '...', date: '10月21日(日)', startTime: '12:00', endTime: '18:00'},
  ];
}

function getOsakaEvents() {
  return [
    { name: '大阪の一箱古本市その1', url: '...', date: '10月20日(日)', startTime: '11:00', endTime: '18:00'},
    { name: '大阪の一箱古本市その1', url: '...', date: '10月21日(日)', startTime: '12:00', endTime: '18:00'},
  ];
}
