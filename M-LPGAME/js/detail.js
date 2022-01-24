var nav_img = document.getElementById("img_nav");
var nav = document.getElementById("nav");

nav_img.addEventListener("click", function () {
    if (nav.style.display == "flex")
        nav.style.display = "none";
    else
        nav.style.display = "flex";
})
//获取图片组件
var gameImg = document.getElementById("gameimg");
var title = document.getElementById("title");
var content = document.getElementById("jianjie");
var type = document.getElementById("type");
var old_price = document.getElementById("old_price");
var price = document.getElementById("price");
//存放图片路径
const img_pathes = new Map();
img_pathes.set("10", "../images/10.jpg");
img_pathes.set("11", "../images/11.png");
img_pathes.set("12", "../images/12.jpg");
img_pathes.set("13", "../images/13.jpg");
img_pathes.set("14", "../images/14.jpg");
img_pathes.set("16", "../images/16.png");
img_pathes.set("17", "../images/17.png");
img_pathes.set("18", "../images/18.png");
img_pathes.set("19", "../images/19.png");
img_pathes.set("20", "../images/20.png");
img_pathes.set("21", "../images/21.png");
img_pathes.set("22", "../images/22.png");
img_pathes.set("23", "../images/23.png");
img_pathes.set("24", "../images/24.png");
img_pathes.set("26", "../images/26.png");
img_pathes.set("27", "../images/27.png");
img_pathes.set("28", "../images/28.png");
//存放游戏名称
const names = new Map();
names.set("17", "死亡细胞");
names.set("18", "Outerverse");
names.set("19", "Warshmallows");
names.set("20", "SHEEPO");
names.set("21", "Car Tuning Simulator");
names.set("22", "GTA5");
names.set("23", "永劫无间");
names.set("24", "古墓丽影：崛起");
names.set("26", "荒野大镖客2");
names.set("27", "赛博朋克2077");
names.set("28", "战地风云? 2042");
//存放游戏内容
const contents = new Map();
contents.set("17", "《Dead Cells》是一款以 Rogue-lite 和银河城要素为灵感的动作平台游戏。你将探索一座不断成长变化的城堡……前提是你能在 2D 魂式战斗中打倒各种守护者，开出一条道路。没有重生点。杀戮、死亡、学习、重复。");
contents.set("18", "Build automated farms, machines, and weapons across the universe in order to beat massive bosses and advance your technology while experiencing cosmic events in this exciting quest driven automation adventure game.");
contents.set("19", "眨眼之间，你就会被击中了！《Warshmallows》是一款快节奏的平台竞技场射击游戏，你将与同样化身为甜蜜棉花糖的其余 1 至 3 名玩家同台竞技，勇夺冠军。自由混战，2v2 对战，本地分屏模式，线上匹配——每个玩家都能从中取乐！");
contents.set("20", "《Sheepo》是一款独特离奇的银河城平台游戏，其中有着羊一般外貌的主角可以变形，并将穿越一个人迹罕至的星球，为星系物种数据库收集每个存活物种的样本！Sheepo 必须找到未孵化的蛋才能捕获生物，而这些蛋被皇后（queen）种群——也就是游戏 Boss 守护着。Sheepo 每收集一个蛋，你便获得变身为所接触到的那个物种的能力，可以深入探索广袤星球。");
contents.set("21", "在 Car Tuning Simulator 中，您可以创建、修改和涂装您自己的豪华汽车，然后前往大气的夜晚城市道路进行测试！选择提供的汽车之一，更换引擎盖、前灯、车轮和其他组件。该游戏为您提供灵活的汽车定制编辑器、多种零件选择和逼真的赛道！");
contents.set("22", "Grand Theft Auto V：在线模式豪华版将为玩家呈现完整的 Grand Theft Auto V 故事体验，玩家不仅可以免费畅玩瞬息万变的 Grand Theft Auto 在线模式，还可以尊享现有的所有玩法更新及官方制作内容，包括《末日豪劫》、《军火霸业》、《走私贩大进击》、《狂野飙客》等，众多精彩，等您来享。您还将获得“犯罪集团新手包”，在 Grand Theft Auto 在线模式中以最快的速度创立犯罪帝国。");
contents.set("23", "《永劫无间》是一款最多 60 人同台竞技的 PVP 武侠风格动作战斗体验，内含以武术为蓝本的近战战斗，无视重力的机动性，大量近战及远程武器，以及可定制的身怀史诗级武艺的传奇英雄。挥舞利刃，斩杀！端起火枪，爆头！享受远近结合的华丽战斗！ 在房顶跑酷，在树林中飞索穿梭，广大的地图任君高速前行！ 活用英雄能力，用风沙、隐身，甚至化身金刚大佛碾碎敌人！ 独一无二的60人生存竞技，成为唯一的赢家！");
contents.set("24", "《古墓丽影：崛起》20 周年纪念版包括基础游戏和以全新内容为特色的季票。你可以在全新的 \"血缘\" 故事中探索克劳馥庄园，并在 \"劳拉的梦魇\"（Lara's Nightmare）中保护其免受僵尸入侵。在全新在线合作耐力模式的艰险困境中与你的朋友并肩前行，并勇敢挑战 \"极限生还者\" 难度。全新内容还包括一套灵感来自《古墓丽影 3》的装备和武器以及 5 套经典劳拉皮肤。在现有 DLC 中，你将能在《芭芭雅嘎：女巫神庙》中探索古老而恐怖的全新古墓，并与《暗冷觉醒》中大波受感染的僵尸进行战斗。");
//存放游戏类型
const types = new Map();
types.set("17", "Rogue-lite, 独立");
types.set("18", "Action-Adventure, Simulation, Strategy");
types.set("19", "射击, 独立");
types.set("20", "Platformer, Exploration, Indie");
types.set("21", "Racing, Simulation, Sports");
types.set("22", "动作, 冒险");
types.set("23", "动作");
types.set("24", "动作, 动作冒险, 冒险");
types.set("26", "动作， 叙事， 开放世界");
types.set("27", "动作， 角色扮演， 开放世界， 冒险");
types.set("28", "射击， 第一人称");
//存放游戏原价格
const old_prices = new Map();
old_prices.set("17", "¥84");
old_prices.set("18", "¥45");
old_prices.set("19", "");
old_prices.set("20", "¥30");
old_prices.set("21", "");
old_prices.set("22", "¥118.50");
old_prices.set("23", "");
old_prices.set("24", "¥160");

//存放游戏现价
const prices = new Map();
prices.set("17", "¥42");
prices.set("18", "¥36");
prices.set("19", "¥30");
prices.set("20", "¥21");
prices.set("21", "¥2");
prices.set("22", "¥58");
prices.set("23", "¥98");
prices.set("24", "免费");


/**
    * 获取参数的键值对对象。
    */
var getParam = function () {
    try {
        var url = window.location.href;
        var result = url.split("?")[1];
        var keyValue = result.split("&");
        var obj = {};
        for (var i = 0; i < keyValue.length; i++) {
            var item = keyValue[i].split("=");
            obj[item[0]] = item[1];
        }
        return obj;
    } catch (e) {
        console.warn("There has no param value!");
        gameImg.src = "../images/23.png";
    }
};
/**
 * 页面加载完毕打印键值对对象
 */
window.onload = function () {
    console.log(getParam());
    var path = img_pathes.get(getParam().value);
    console.log(path)
    gameImg.src = path;
    title.innerText = names.get(getParam().value);
    content.innerText = contents.get(getParam().value);
    type.innerText = types.get(getParam().value);
    old_price.innerText = old_prices.get(getParam().value);
    price.innerText = prices.get(getParam().value);
}
function myFunction() {
    confirm("购买成功!祝您玩得愉快！")
}
