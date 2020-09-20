$.getJSON("https://spreadsheets.google.com/feeds/cells/1oEmkhJKnkYR_XYyVOgAZLiBb2w8xnCivv4I1SEPeFYI/1/public/full?alt=json", function (data) {

    var sheetData = data.feed.entry;

    var i;
    for (i = 0; i < sheetData.length; i++) {

      var tweet_id = data.feed.entry[i]['gsx$_cn6ca']['$t'];
      var created_at = data.feed.entry[i]['gsx$_cokwr']['$t'];
      var tweet_body = data.feed.entry[i]['gsx$_cpzh4']['$t'];
      var favorite_count = data.feed.entry[i]['gsx$_cpzh4']['$t'];
      var retweet_count = data.feed.entry[i]['gsx$_cpzh4']['$t'];
      var team = data.feed.entry[i]['gsx$_cpzh4']['$t'];

      document.getElementById('demo').innerHTML += ('<tr>'+'<td>'+name+'</td>'+'<td>'+age+'</td>'+'<td>'+email+'</td>'+'</tr>');
    }
  });