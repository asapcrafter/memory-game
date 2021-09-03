(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{10:function(e,i,s){},11:function(e,i,s){"use strict";s.r(i);var a=s(1),c=s.n(a),n=s(4),t=s.n(n),j=s(0),r=function(){return Object(j.jsx)("div",{className:"header-wrapper",children:Object(j.jsx)("div",{className:"header",children:"Minecraft Memory Game"})})},m=s(2),o=function(e){var i=Object(a.useState)(!1),s=Object(m.a)(i,2),c=s[0],n=s[1],t=function(){n(!0),e.win()},r=function(){e.lose()};return Object(j.jsxs)("div",{className:"card",onClick:function(){!1===c?t():r()},children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("img",{src:e.image,alt:"#"})}),Object(j.jsx)("div",{className:"card-name",children:e.id}),"".concat(c)]})},b=function(){var e=Object(a.useState)(0),i=Object(m.a)(e,2),s=i[0],c=i[1],n=Object(a.useState)(0),t=Object(m.a)(n,2),r=t[0],b=t[1],d=function(){c(s+1),s===r&&b(s+1)},l=function(){c(0)},g=[Object(j.jsx)(o,{id:"Grass",image:"./img/GrassNew.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Dirt",image:"./img/Gravel_JE5_BE4.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Stone",image:"./img/Stone_JE4_BE3.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Sugarcane",image:"./img/Sugar_Cane_JE2_BE2.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Amethyst",image:"./img/Amethyst_Cluster_(U)_JE1.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Barrel",image:"./img/Barrel_(U)_JE1_BE1.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Beacon",image:"./img/Beacon_JE6_BE2.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Bedrock",image:"./img/Bedrock_JE2_BE2.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Birch",image:"./img/Birch_Log_(UD)_JE5_BE3.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Bookshelf",image:"./img/Bookshelf_JE4_BE2.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Anvil",image:"./img/Broken_Anvil_(N)_BE2.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Cactus",image:"./img/Cactus_JE4.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Cake",image:"./img/Cake_JE2.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Pumpkin",image:"./img/Carved_Pumpkin_(S)_JE4.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Copper Ore",image:"./img/Copper_Ore_JE2_BE2.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Diamond Ore",image:"./img/Diamond_Ore_JE5_BE5.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Emerald Ore",image:"./img/Emerald_Ore_JE4_BE3.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Gold Ore",image:"./img/Gold_Ore_JE7_BE4.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Grass",image:"./img/GrassNew.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Gravel",image:"./img/Gravel_JE5_BE4.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Hay Bale",image:"./img/Hay_Bale_(UD)_JE2_BE2.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Iron Ore",image:"./img/Iron_Ore_JE6_BE4.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Lapis Lazuli Ore",image:"./img/Lapis_Lazuli_Ore_JE4_BE4.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Mycelium",image:"./img/Mycelium_JE2_BE2.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Packed Ice",image:"./img/Packed_Ice_JE2_BE3.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Prismarine",image:"./img/Prismarine_JE2_BE2.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Redstone Ore",image:"./img/Redstone_Ore_JE4_BE3.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Sandstone",image:"./img/Sandstone_JE6_BE3.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Slime Block",image:"./img/Slime_Block_JE2_BE3.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Sponge",image:"./img/Sponge_JE3_BE3.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Stone",image:"./img/Stone_JE4_BE3.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"Sugar Cane",image:"./img/Sugar_Cane_JE2_BE2.webp",win:d,lose:l}),Object(j.jsx)(o,{id:"TNT Block",image:"./img/TNT_JE3_BE2.webp",win:d,lose:l})];return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{id:"score-wrapper",children:Object(j.jsxs)("div",{className:"score",children:[Object(j.jsxs)("p",{children:["Streak: ",s]}),Object(j.jsxs)("p",{children:["Best score: ",r]})]})}),Object(j.jsx)("div",{id:"gameboard-wrapper",children:Object(j.jsx)("div",{className:"gameboard",children:function(e){for(var i=e.length-1;i>0;i--){var s=Math.floor(Math.random()*(i+1)),a=e[i];e[i]=e[s],e[s]=a}return e.slice(0,14)}(g)})})]})};var d=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(r,{}),Object(j.jsx)(b,{})]})};s(10);t.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b35ee836.chunk.js.map