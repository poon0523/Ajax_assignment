let number = 0; //dataリストのインデックス
let data = []; //JSONデータを格納する変数
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("contents");
const button = document.getElementById('btn');

//JSONデータを取得し、data変数に格納する処理
function getData() {
  // button.addEventListener('click', e => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
          data = request.response;
        }
      }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
  // })
}

//「changeVideo」ボタン押下時のイベントハンドラを登録
function changeVideo() {
//「changevideo」ボタンにイベントリスナを設定
  button.addEventListener('click', function(){
    //ボタン押下時の処理
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src",data[number].url);
    number == 2 ? number = 0 : number++;

    //JSONデータが格納されていない場合（＝dataの要素数が0）のみJSONデータ取得の関数を実行
    if(data.length == 0){
      getData();
    }
      
      })
  }

  window.onload = getData();  
  window.onload = changeVideo;
