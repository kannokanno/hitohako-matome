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
    { prefecture: '山形', city: '東根', name: '一箱古本市＠ひがしね', url: 'https://www.manabiaterrace.jp/event/support-center/一箱古本市＠ひがしね/', date: '11月3日(日)', startTime: '10:00', endTime: '15:00'},
    { prefecture: '福島', city: '福島', name: '本博 本の博覧会 一箱古本市', url: 'https://twitter.com/InfoHonpak', date: '11月3日(日)', startTime: '10:00', endTime: '15:00'},
    { prefecture: '東京', city: '荻窪', name: 'ＯＯＥＮ文化祭！プリマ＆一箱古本市', url: 'https://ooen.life', date: '11月3日(日)', startTime: '不明', endTime: '不明'},
    { prefecture: '千葉', city: '八街', name: '八街市中央公民館 一箱古本市', url: 'https://www.library.yachimata.chiba.jp/toshow/pdf/huruhon.pdf', date: '11月3日(日)', startTime: '10:00', endTime: '16:00'},
    { prefecture: '栃木', city: '宇都宮', name: 'オリオン☆一箱古本市', url: 'https://orionhthk.exblog.jp/239575811/', date: '11月3日(日)', startTime: '10:30', endTime: '17:00'},
    { prefecture: '新潟', city: '上越', name: '浄興寺de縁日', url: 'http://www.n-j-p.jp', date: '11月3日(日)', startTime: '10:00', endTime: '16:00'},
    { prefecture: '京都', city: '北区', name: '佛教大学 古本ひろば・一箱古本市', url: 'https://twitter.com/kenji_do2012/status/1177931790318587909', date: '11月3日(日)', startTime: '12:00', endTime: '16:00'},
    { prefecture: '福岡', city: '直方', name: '第２回 のおがた一箱古本市', url: 'http://www.yumenity.jp/library/event/furuhonichi2019.pdf', date: '11月3日(日)', startTime: '10:00', endTime: '15:00'},
    { prefecture: '福岡', city: '福岡', name: 'ブックオカ けやき通り・のきさき古本市', url: 'http://bookuoka.com/archives/2866', date: '11月3日(日)', startTime: '11:00', endTime: '16:00'},
    { prefecture: '千葉', city: '千葉みなと', name: '第２回千葉みなと 一箱古本市', url: 'https://docs.google.com/forms/d/1OXZDIp--EBxs1XX6LNmkwkMC0gM_Ba8AUtz62HulYqk/viewform?chromeless=1&edit_requested=true', date: '11月4日(月)', startTime: '10:00', endTime: '15:30'},
    { prefecture: '静岡', city: '三島', name: 'コーヒーとめがね+本', url: 'https://www.facebook.com/events/%E4%B8%89%E5%B3%B6%E5%B8%82%E7%AB%8B%E5%85%AC%E5%9C%92%E6%A5%BD%E5%AF%BF%E5%9C%92/%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%81%A8%E3%82%81%E3%81%8C%E3%81%AD%E6%9C%AC/2317702041873442/', date: '11月4日(月)', startTime: '10:00', endTime: '16:00'},
    { prefecture: '東京', city: '田原町', name: 'お座敷一箱古本市', url: 'http://readinwritin.net/2018/11/22/%e3%81%8a%e5%ba%a7%e6%95%b7%e4%b8%80%e7%ae%b1%e5%8f%a4%e6%9c%ac%e5%b8%82-2/', date: '11月9日(土)', startTime: '12:00', endTime: '18:00'},
    { prefecture: '静岡', city: '裾野', name: '丘の上マーケットin千福が丘2019', url: 'https://www.facebook.com/pages/category/Festival/%E4%B8%98%E3%81%AE%E4%B8%8A%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%83%E3%83%88-in-%E5%8D%83%E7%A6%8F%E3%81%8C%E4%B8%98-1654314874593253/', date: '11月9日(土)', startTime: '10:00', endTime: '14:00'},
    { prefecture: '埼玉', city: '川口', name: '第7回 川口ブックマーケット', url: 'https://khitohako.blogspot.com/2019/09/71110.html?spref=tw', date: '11月10日(日)', startTime: '11:00', endTime: '16:00'},
    { prefecture: '千葉', city: '南房総', name: '第３回 あわぶっく市', url: 'https://clip.m-boso.net/2019/10/awabook_03/', date: '11月10日(日)', startTime: '10:00', endTime: '15:30'},
    { prefecture: '三重', city: '熊野', name: '第３回熊野古道 一箱古本市', url: 'http://owasegurashi.xsrv.jp/events/', date: '11月10日(日)', startTime: '10:00', endTime: '15:00'},
    { prefecture: '奈良', city: '奈良', name: '第79回 大門玉手箱 in 初宮神社', url: 'https://tamatehako.exblog.jp/239081066/', date: '11月10日(日)', startTime: '11:00', endTime: '16:00'},
    { prefecture: '岩手', city: '盛岡', name: '第５回 浜藤古本市', url: 'http://machiya.iwate-arts.jp/?event=%e7%ac%ac5%e5%9b%9e-%e6%b5%9c%e8%97%a4%e5%8f%a4%e6%9c%ac%e5%b8%82', date: '11月16日(土)', startTime: '11:00', endTime: '16:00'},
    { prefecture: '千葉', city: '西千葉', name: '第７回 西千葉一箱古本市', url: 'https://www.facebook.com/events/hello-garden/第７回-西千葉一箱古本市/337057203626310/', date: '11月16日(土)', startTime: '10:30', endTime: '15:00'},
    { prefecture: '静岡', city: '掛川西', name: 'ざっくり古本市', url: 'https://www.facebook.com/toda.saigo/photos/tですさて半年に一度のざっくり古本市のご案内です11月16日土は戸田書店掛川西郷店の軒下にて第11回の古本市が開催されます本日より出店者募集します本以外の販売も/1645810188889589/', date: '11月16日(土)', startTime: '10:00', endTime: '16:30'},
    { prefecture: '岩手', city: '盛岡', name: '第５回 浜藤古本市', url: 'http://machiya.iwate-arts.jp/?event=%e7%ac%ac5%e5%9b%9e-%e6%b5%9c%e8%97%a4%e5%8f%a4%e6%9c%ac%e5%b8%82', date: '11月17日(日)', startTime: '11:00', endTime: '16:00'},
    { prefecture: '東京', city: '雑司ケ谷', name: 'みちくさ市', url: 'https://kmstreet.exblog.jp/13452016/', date: '11月17日(日)', startTime: '11:00', endTime: '16:00'},
    { prefecture: '千葉', city: '佐倉', name: '佐倉城下町一箱古本市', url: 'https://twitter.com/sakurahitohako/status/1181176826846040064', date: '11月17日(日)', startTime: '10:00', endTime: '15:00'},
    { prefecture: '岐阜', city: '中津川', name: '本や+α 一箱古本市', url: 'http://poppinz-nico2.com/honya-plus-alpha/2019/10/08/%e7%ac%ac%ef%bc%93%e5%9b%9e%e4%b8%80%e7%ae%b1%e5%8f%a4%e6%9c%ac%e5%b8%82%ef%bc%9c%e5%87%ba%e5%ba%97%e8%80%85%e3%81%95%e3%82%93%e5%8b%9f%e9%9b%86%e4%b8%ad%ef%bc%9e/?preview=true', date: '11月17日(日)', startTime: '10:00', endTime: '17:00'},
    { prefecture: '兵庫', city: '神戸', name: '和田岬一箱古本市', url: 'https://twitter.com/wadamisaki2019/status/1185418573985894400', date: '11月17日(日)', startTime: '10:00', endTime: '16:00'},
    { prefecture: '奈良', city: '長谷寺', name: 'こもりく 秋の一箱古本・球根市', url: 'https://mirokuya-blog.localinfo.jp/posts/7222745', date: '11月17日(日)', startTime: '11:00', endTime: '16:00'},
    { prefecture: '宮崎', city: '木城町', name: '木城町 ヒトハコ古本市', url: 'https://hitohako-huruhonichi.amebaownd.com/posts/6372533', date: '11月17日(日)', startTime: '9:00', endTime: '12:00'},
    { prefecture: '静岡', city: '静岡', name: '第8回しずおか一箱古本市in駿府市、鷹の市', url: 'https://twitter.com/hitohakosiz?lang=ja', date: '11月23日(土)', startTime: '12:00', endTime: '16:00'},
    { prefecture: '神奈川', city: '南万騎が原', name: '第３回みなまき一箱古本市', url: 'https://www.facebook.com/events/2430690707205717/', date: '11月24日(日)', startTime: '11:00', endTime: '16:00'},
    { prefecture: '神奈川', city: '海老名', name: '海老名市立図書館 一箱古本市', url: 'https://ebina.city-library.jp/library/ja/event_page/1588', date: '11月24日(日)', startTime: '11:30', endTime: '15:30'},
    { prefecture: '福岡', city: '北九州', name: 'ひとはこ古本市', url: 'https://www.facebook.com/eimyouji.jp/posts/2373607652882799', date: '11月24日(日)', startTime: '10:00', endTime: '15:00'},
    { prefecture: '東京', city: '田原町', name: 'お座敷一箱古本市', url: 'http://readinwritin.net/2018/11/22/%e3%81%8a%e5%ba%a7%e6%95%b7%e4%b8%80%e7%ae%b1%e5%8f%a4%e6%9c%ac%e5%b8%82-2/', date: '12月7日(土)', startTime: '12:00', endTime: '18:00'},
    { prefecture: '兵庫', city: '神戸', name: '本屋に飽きた本屋のはなし', url: 'http://www.nedogu.com/blog/archives/22252', date: '12月7日(土)', startTime: '16:00', endTime: '20:00'},
    { prefecture: '静岡', city: '島田', name: '島田市おび通り 一箱古本市', url: 'https://www.city.shimada.shizuoka.jp/kurashi-docs/furuhon.html', date: '12月8日(日)', startTime: '9:00', endTime: '12:00'},
  ];
}
