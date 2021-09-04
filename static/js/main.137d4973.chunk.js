(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{10:function(e,s,t){},11:function(e,s,t){"use strict";t.r(s);var i=t(1),a=t.n(i),r=t(4),n=t.n(r),m=t(0),c=function(){var e=document.getElementById("background-audio");return e.volume=.3,window.onload=function(){e.play()},Object(m.jsx)("div",{className:"header-wrapper",children:Object(m.jsx)("div",{className:"header",children:"Minecraft Memory Game"})})},o=t(2),l=function(e){var s=Object(i.useState)(!1),t=Object(o.a)(s,2),a=t[0],r=t[1],n=document.querySelector("#xp-sound");n.volume=.18;var c=document.querySelector("#lose-sound");c.volume=.15;var l=function(){r(!0),e.win()},j=function(){e.lose()};return!0===e.reset&&setTimeout((function(){e.setReset(!1),r(!1)}),1),Object(m.jsxs)("div",{className:"card",onClick:function(){!1===a?(n.paused||(n.currentTime=0),n.play(),setTimeout(l(),200)):(c.paused||(c.currentTime=0),c.play(),setTimeout(j(),200))},children:[Object(m.jsx)("div",{className:"card-image",children:Object(m.jsx)("img",{draggable:"false",src:e.image,alt:"#"})}),Object(m.jsx)("div",{className:"card-name",children:e.name})]})},j=function(){var e=Object(i.useState)(0),s=Object(o.a)(e,2),t=s[0],a=s[1],r=Object(i.useState)(0),n=Object(o.a)(r,2),c=n[0],j=n[1],b=Object(i.useState)(!1),g=Object(o.a)(b,2),_=g[0],d=g[1],w=function(){if(a(t+1),t===c){j(t+1);var e=document.querySelector("#levelup-sound");e.volume=.18,e.paused||(e.currentTime=0),e.play()}},O=function(){a(0),B()},p=[Object(m.jsx)(l,{name:"Grass Block",image:"./img/GrassNew.webp",win:w,lose:O,reset:_,setReset:d},"Grass"),Object(m.jsx)(l,{name:"Stone Block",image:"./img/Stone_JE4_BE3.webp",win:w,lose:O,reset:_,setReset:d},"Stone"),Object(m.jsx)(l,{name:"Amethyst",image:"./img/Amethyst_Cluster_(U)_JE1.webp",win:w,lose:O,reset:_,setReset:d},"Amethyst"),Object(m.jsx)(l,{name:"Barrel",image:"./img/Barrel_(U)_JE1_BE1.webp",win:w,lose:O,reset:_,setReset:d},"Barrel"),Object(m.jsx)(l,{name:"Beacon",image:"./img/Beacon_JE6_BE2.webp",win:w,lose:O,reset:_,setReset:d},"Beacon"),Object(m.jsx)(l,{name:"Bedrock",image:"./img/Bedrock_JE2_BE2.webp",win:w,lose:O,reset:_,setReset:d},"Bedrock"),Object(m.jsx)(l,{name:"Birch",image:"./img/Birch_Log_(UD)_JE5_BE3.webp",win:w,lose:O,reset:_,setReset:d},"Birch"),Object(m.jsx)(l,{name:"Bookshelf",image:"./img/Bookshelf_JE4_BE2.webp",win:w,lose:O,reset:_,setReset:d},"Bookshelf"),Object(m.jsx)(l,{name:"Anvil",image:"./img/Broken_Anvil_(N)_BE2.webp",win:w,lose:O,reset:_,setReset:d},"Anvil"),Object(m.jsx)(l,{name:"Cactus",image:"./img/Cactus_JE4.webp",win:w,lose:O,reset:_,setReset:d},"Cactus"),Object(m.jsx)(l,{name:"Cake",image:"./img/Cake_JE2.webp",win:w,lose:O,reset:_,setReset:d},"Cake"),Object(m.jsx)(l,{name:"Pumpkin",image:"./img/Carved_Pumpkin_(S)_JE4.webp",win:w,lose:O,reset:_,setReset:d},"Pumpkin"),Object(m.jsx)(l,{name:"Copper Ore",image:"./img/Copper_Ore_JE2_BE2.webp",win:w,lose:O,reset:_,setReset:d},"Copper Ore"),Object(m.jsx)(l,{name:"Diamond Ore",image:"./img/Diamond_Ore_JE5_BE5.webp",win:w,lose:O,reset:_,setReset:d},"Diamond Ore"),Object(m.jsx)(l,{name:"Emerald Ore",image:"./img/Emerald_Ore_JE4_BE3.webp",win:w,lose:O,reset:_,setReset:d},"Emerald Ore"),Object(m.jsx)(l,{name:"Gold Ore",image:"./img/Gold_Ore_JE7_BE4.webp",win:w,lose:O,reset:_,setReset:d},"Gold Ore"),Object(m.jsx)(l,{name:"Gravel",image:"./img/Gravel_JE5_BE4.webp",win:w,lose:O,reset:_,setReset:d},"Gravel"),Object(m.jsx)(l,{name:"Hay Bale",image:"./img/Hay_Bale_(UD)_JE2_BE2.webp",win:w,lose:O,reset:_,setReset:d},"Hay Bale"),Object(m.jsx)(l,{name:"Iron Ore",image:"./img/Iron_Ore_JE6_BE4.webp",win:w,lose:O,reset:_,setReset:d},"Iron Ore"),Object(m.jsx)(l,{name:"Lapis Lazuli",image:"./img/Lapis_Lazuli_Ore_JE4_BE4.webp",win:w,lose:O,reset:_,setReset:d},"Lapis Lazuli Ore"),Object(m.jsx)(l,{name:"Mycelium",image:"./img/Mycelium_JE2_BE2.webp",win:w,lose:O,reset:_,setReset:d},"Mycelium"),Object(m.jsx)(l,{name:"Packed Ice",image:"./img/Packed_Ice_JE2_BE3.webp",win:w,lose:O,reset:_,setReset:d},"Packed Ice"),Object(m.jsx)(l,{name:"Prismarine",image:"./img/Prismarine_JE2_BE2.webp",win:w,lose:O,reset:_,setReset:d},"Prismarine"),Object(m.jsx)(l,{name:"Redstone Ore",image:"./img/Redstone_Ore_JE4_BE3.webp",win:w,lose:O,reset:_,setReset:d},"Redstone Ore"),Object(m.jsx)(l,{name:"Sandstone",image:"./img/Sandstone_JE6_BE3.webp",win:w,lose:O,reset:_,setReset:d},"Sandstone"),Object(m.jsx)(l,{name:"Slime Block",image:"./img/Slime_Block_JE2_BE3.webp",win:w,lose:O,reset:_,setReset:d},"Slime Block"),Object(m.jsx)(l,{name:"Sponge",image:"./img/Sponge_JE3_BE3.webp",win:w,lose:O,reset:_,setReset:d},"Sponge"),Object(m.jsx)(l,{name:"Sugar Cane",image:"./img/Sugar_Cane_JE2_BE2.webp",win:w,lose:O,reset:_,setReset:d},"Sugar Cane"),Object(m.jsx)(l,{name:"TNT Block",image:"./img/TNT_JE3_BE2.webp",win:w,lose:O,reset:_,setReset:d},"TNT Block"),Object(m.jsx)(l,{name:"Bee Nest",image:"./img/Bee_Nest_(N)_JE1_BE1.webp",win:w,lose:O,reset:_,setReset:d},"Bee"),Object(m.jsx)(l,{name:"Bell",image:"./img/Bell_JE3.webp",win:w,lose:O,reset:_,setReset:d},"Bell"),Object(m.jsx)(l,{name:"Brick Block",image:"./img/Bricks_JE5_BE3.webp",win:w,lose:O,reset:_,setReset:d},"Brick"),Object(m.jsx)(l,{name:"Composter",image:"./img/Composter.webp",win:w,lose:O,reset:_,setReset:d},"Composter"),Object(m.jsx)(l,{name:"Glass Block",image:"./img/Glass_JE4_BE2.webp",win:w,lose:O,reset:_,setReset:d},"Glass"),Object(m.jsx)(l,{name:"Hopper",image:"./img/Hopper_(S)_JE4.webp",win:w,lose:O,reset:_,setReset:d},"Hopper"),Object(m.jsx)(l,{name:"Grass",image:"./img/Jungle_Grass.webp",win:w,lose:O,reset:_,setReset:d},"Fern"),Object(m.jsx)(l,{name:"Redstone Lamp",image:"./img/Lit_Redstone_Lamp_JE3_BE2.webp",win:w,lose:O,reset:_,setReset:d},"Red Lamp"),Object(m.jsx)(l,{name:"Nether Wart",image:"./img/Nether_Wart_Age_2_JE2_BE3.webp",win:w,lose:O,reset:_,setReset:d},"Wart"),Object(m.jsx)(l,{name:"Red Mushroom",image:"./img/Red_Mushroom_JE2_BE2.webp",win:w,lose:O,reset:_,setReset:d},"Red Shroom"),Object(m.jsx)(l,{name:"Berry Bush",image:"./img/Sweet_Berry_Bush_Age_2_JE1_BE1.webp",win:w,lose:O,reset:_,setReset:d},"Berry"),Object(m.jsx)(l,{name:"Leaves",image:"./img/Oak_Leaves_BE5.webp",win:w,lose:O,reset:_,setReset:d},"Leaves")];!function(e){for(var s=e.length-1;s>0;s--){var t=Math.floor(Math.random()*(s+1)),i=e[s];e[s]=e[t],e[t]=i}e.slice(0,14)}(p);var B=function(){d(!_)};return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{id:"score-wrapper",children:Object(m.jsxs)("div",{id:"score-container",children:[Object(m.jsxs)("div",{className:"instructions",children:[Object(m.jsx)("div",{children:"How to score: Choose any card to build your streak!"}),Object(m.jsx)("div",{children:"Selecting an old card will break the streak. "})]}),Object(m.jsxs)("div",{className:"score",children:[Object(m.jsxs)("div",{id:"streak",children:["Streak: ",t]}),Object(m.jsxs)("div",{id:"highscore",children:["Best score: ",c]})]})]})}),Object(m.jsx)("div",{id:"gameboard-wrapper",children:Object(m.jsx)("div",{className:"gameboard",children:p})})]})};var b=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(c,{}),Object(m.jsx)(j,{})]})};t(10);n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.137d4973.chunk.js.map