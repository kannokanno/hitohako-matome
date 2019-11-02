function previousPrefecture() {
  // TODO: デフォルトは北海道
  return '東京';
}

new Vue({
  el: '#app',
  data: {
    prefecture: previousPrefecture(),
    events: getEvents(previousPrefecture()),
  },
  methods: {
    onPrefecturesChange: function(event) {
      this.events = getEvents(event.target.value);
    }
  }
});

