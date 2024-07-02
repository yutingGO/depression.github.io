function showtest()
{   
    //分數預設0
    var cores=0;
    //抓取test
    var test=document.getElementsByClassName("test")
    //計算x的長度進行for
    for(var i=0;i<test.length;i++){
        var t=document.getElementsByName("t"+(i+1));
        for(var j=0;j<t.length;j++){
            //查看當題被按按鈕
            if(t[j].checked){
                //valuer加上去
                cores+=t[j].value*1;
                }
            }
    }   
    if(cores<=8){
        alert("真是令人羨慕！你目前的情緒狀態很穩定，是個懂得適時調整情緒及抒解壓力的人，繼續保持下去。");
    }else if(cores<=14){
        alert("最近的情緒是否起伏不定？或是有些事情在困擾著你？給自己多點關心，多注意情緒的變化，試著瞭解心情變的緣由，做適時的處理，比較不會陷入憂鬱情緒。");
    }else if(cores<=18){
        alert("你是不是想笑又笑不太出來，有很多事壓在心上，肩上總覺得很沈重？因為你的壓力負荷量已經到了臨界點了！千萬別再「撐」了！趕快找個有相同經驗的朋友聊聊，給心情找個出口，把肩上的重膽放下，這樣才不會陷入憂鬱症的漩渦。");
    }else if(cores<=28){
        alert("現在的你必定感到相當不順心，無法展露笑容，一肚子苦惱及煩悶，連朋友也不知道如何幫你，趕緊找專業機構或醫療單位協助，透過專業機構的協助，必可重拾笑容！");
    }
    else{
        alert("你是不是感到相當的不舒服，會不由自主的沮喪、難過，覺得無法掙脫？因為你的心已「感冒」，心病需要心藥醫，趕緊到醫院找專業及可信賴的醫師檢查，透過他們的診療與治療，你將不會覺得孤單、無助！");
    }
}

function showans()
{
    var cores=0;
    var test1=document.getElementsByClassName("test1")
    for(var i=0;i<test1.length;i++){
        var q=document.getElementsByName("q"+(i+1));
        for(var j=0;j<q.length;j++){
            if(q[j].checked){
                cores+=q[j].value*1;
                }
            }
        }   
    if(cores<=9){
        alert("恭喜你，身心適應狀況良好。");
    }else if(cores<=14){
        alert("您的症狀或心理困擾之嚴重度為：輕度憂鬱。");
    }else if(cores<=19){
        alert("您的症狀或心理困擾之嚴重度為：中度憂鬱。");
    }else{
        alert("您的症狀或心理困擾之嚴重度為：重度憂鬱。");
        alert("建議接受專業咨詢，探討是否需進一步之輔導或精神科專業治療。");
    }
}

function openMenu(evt, menuName) {
  var i, x, tablinks; 
  //x抓取頁面中的class="menu"
  x = document.getElementsByClassName("menu");
  //計算x的長度進行display:none隱藏的動作。
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  //tablinks 抓取頁面中的tablink。
  tablinks = document.getElementsByClassName("tablink");
  //將tablinks代入for並利用classList.replace 移除 class "w3-dark-grey"。
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  //document.getElementById= menuName(函數帶進來的參數)樣式設定為display:block;
  //當前點擊的a link執行function 顯示出來對應的內容。
  document.getElementById(menuName).style.display = "block";
  //並對當前點擊的 a link 新增“w3-dark-grey” 這個class。
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}