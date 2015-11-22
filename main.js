items=[];
	items.push({"name":"奖励点数", "owned":0, "showinvt":false}); //0
	items.push({"name":"D级支线剧情", "owned":0, "showinvt":false}); //1
	items.push({"name":"C级支线剧情", "owned":0, "showinvt":false}); //2
	items.push({"name":"B级支线剧情", "owned":0, "showinvt":false}); //3
	items.push({"name":"A级支线剧情", "owned":0, "showinvt":false}); //4
	items.push({"name":"等级", "owned":1, "showinvt":false}); //5
	items.push({"name":"攻击", "owned":1, "showinvt":false}); //6
	items.push({"name":"boss血量", "owned":0, "showinvt":false}); //7
	items.push({"name":"当前血量", "owned":0, "showinvt":false}); //8
	items.push({"name":"次数", "owned":0, "showinvt":false}); //9

var level=items[5].owned;
var atk=items[6].owned;
var bossmax=items[7].owned;
var bossnow=items[8].owned;
var cishu=items[9].owned;
setInterval(function() {
update();
}, 100);

	if(localStorage.chickensgamesave!=="null" && localStorage.chickensgamesave!="") {
		save("load");
	}
function attackboss() {
items[9].owned++;
testing();
}
function testing() {
if (items[5].owned==1) {
items[7].owned=1000;
items[8].owned=items[7].owned-items[6].owned*items[9].owned;
bosstest();
update();
}
}
function bosstest() {
if (items[5].owned==1&&items[8].owned<=0) {
items[6].owned=items[6].owned+1;
items[8].owned=1000;
items[9].owned=0;
$(".message").html("秦王不甘地怒吼一声，似乎在宣扬着最后一次王者威严，缓缓地倒下了（力量+1）");
}
}
function battle() {
if (items[5].owned==1) {
attack=random(1, 3);
items[0].owned=items[0].owned+attack;
update();
if (attack==1) {
$(".message").html("你怒喝一声，一名秦国士兵被你打碎了");
}
if (attack==2) {
$(".message").html("一只马俑被你捏碎了脑袋");
}
if (attack==3) {
$(".message").html("你飞身一闪，秦国将军被你斩于马下");
}
}
}

/* END */
function update() {
	$(".strength").html("力量："+items[6].owned);
	$(".jld-owned").html(items[0].owned);
	$(".d-owned").html(items[1].owned);
	$(".c-owned").html(items[2].owned);
	$(".a-owned").html(items[4].owned);
	$(".b-owned").html(items[3].owned);
	$(".bossbar").html("boss血量" + items[8].owned + "/" + items[7].owned);
	if (items[5].owned==1) {
	$(".lvl").html("位面一：秦兵马俑");
	}
}

/* game saving */

/*RANDOM*/
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
