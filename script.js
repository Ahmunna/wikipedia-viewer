


//function to access a random Wikipedia article
function randomArticle() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
}

function init()
{
document.getElementById("search").addEventListener("click",function(){
openSearch(document.getElementById("my_input").value);
})
}

function openSearch(Value)
{
var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+Value+"&format=json&callback="
/*var xhr = new XMLHttpRequest();
xhr.open("GET",url,true);
xhr.onload = function()
{
if(xhr.status == 200)
    {
        var data = JSON.parse(this.responseText);
        console.log(data);
    }
}
xhr.send(); */

var num = Math.round(10000 * Math.random());
var callbackMethodName = "cb_"+num;
window[callbackMethodName] = function(data)
{
for(var i = 0 ; i< data[1].length;i++)
    {
        var search_value = document.createElement("div");
        search_value.id = "result_"+i;
        document.body.appendChild(search_value);
        document.getElementById(search_value.id).className="result";
        document.getElementById(search_value.id).innerHTML = '<a href='+data[3][i]+' id="result_anchor" target="_blank"><h3>'+data[1][i]+'</3><p>'+data[2][i]+'</p></a>';
        
    }
}
var sc = document.createElement("script");
sc.id="scr";
sc.src = url+callbackMethodName;
console.log(sc.src);
document.body.appendChild(sc);
document.getElementById("scr").remove();
}

