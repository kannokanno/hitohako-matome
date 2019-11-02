function previousPrefecture() {
  return '';
}

new Vue({
  el: '#app',
  data: {
    selectablePrefectures: {
      '北海道・東北': ['北海道', '青森', '岩手', '宮城', '秋田', '山形', '福島'],
      '関東': ['東京', '神奈川', '埼玉', '千葉', '茨城', '栃木', '群馬', '山梨'],
      '信越・北陸': ['新潟', '長野', '富山', '石川', '福井'],
      '東海': ['愛知', '岐阜', '静岡', '三重'],
      '近畿': ['大阪', '兵庫', '京都', '滋賀', '奈良', '和歌山'],
      '中国': ['鳥取', '島根', '岡山', '広島', '山口'],
      '四国': ['徳島', '香川', '愛媛', '高知'],
      '九州・沖縄': ['福岡', '佐賀', '長崎', '熊本', '大分', '宮崎', '鹿児島', '沖縄'],
    },
    prefecture: previousPrefecture(),
    events: getEvents(previousPrefecture())
  },
  methods: {
    onPrefecturesChange: function(prefecture) {
      this.prefecture = prefecture;
      this.events = getEvents(prefecture);
    },
    onResetPrefectures: function() {
      this.prefecture = '';
      this.events = [];
    },
    groupByDate: function(events) {
      return events.reduce(function(accumulator, event) {
        var groupEvents = accumulator[event.date] || [];
        groupEvents.push(event);
        accumulator[event.date] = groupEvents;
        return accumulator;
      }, {});
    }
  },
  computed: {
    prefectureActiveClass: function() {
      var self = this;
      return function(prefecture) {
        return {
          basic: self.prefecture !== prefecture
        }
      }
    },
    isCollapsePrefecture: function() {
      return this.prefecture !== '';
    },
  }
});
