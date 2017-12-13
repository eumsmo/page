const user = 'hm_eumsmo';
const nome = 'jv_eumsmo';
const apelido = 'Juan Vitor';
const bio = 'Sou eu, eu mesmo, Juan Vitor. Esse é meu site :3';
const google ='https://www.google.com.br/#q=';

document.title = nome;

$('#username').html(nome);
$('#apelido').html(apelido);
$('#bio').html(bio);

function gotTweets(tweets){
  tweets.forEach(function(tweet){
    console.log(tweet);
    let breaksCount = (tweet.tweet.match(/<br>/g) || []).length,
        hora = new Date(tweet.timestamp),
        titulo = 'Atualização - '+ hora.toLocaleDateString() + ' ('+hora.toLocaleTimeString()+')';

    if(breaksCount>0){
      titulo = tweet.tweet.substr(0,tweet.tweet.search('<br>'));
      tweet.tweet = tweet.tweet.substr(tweet.tweet.search('<br>')+4);
    }

    formatHolder.render('post',{
        conteudo: tweet.tweet,
        titulo: titulo
    }).append(document.querySelector('#posts>div>ul'))
  });
}

let formatHolder = new formatter('#formato-post');


let config = {
  "profile": {"screenName": user},
  "maxTweets": 50,
  "enableLinks": true,
  "showUser": true,
  "showTime": true,
  "showImages": true,
  "lang": 'en',
  "customCallback": gotTweets,
  "dataOnly": true
};
twitterFetcher.fetch(config);


