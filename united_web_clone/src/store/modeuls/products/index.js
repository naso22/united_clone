import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'


export default {
    namespaced:true,
    state(){
        return{
            products:[
                {
                    id:'p1',
                    img:'https://uaoi.united-arrows.co.jp/img/item/13000/1300023Y0020/1300023Y0020_l1_a000.jpg',
                    name:'H***',
                    maker:'Nike',
                    kinds:'スニーカ',
                    overview:'＜NIKE＞DUNK LOW Black/スニーカー',
                    price:'¥13,200(税込)',
                    points:'ハウスカードポイント：120pt還元',
                    size:'サイズ： 26cm 26.5cm 27cm 27.5cm 28cm 28.5cm 29cm'
                },
                {
                    id:'p2',
                    img:'https://uaoi.united-arrows.co.jp/img/item/13000/1300023S1071/1300023S1071_l1_a000.jpg',
                    name:'990 V6',
                    maker:'New Balance',
                    kinds:'スニーカ',
                    overview:'【WEB限定】＜New Balance＞ U990TC6/スニーカー',
                    price:'¥36,300(税込)',
                    points:'ハウスカードポイント：330pt還元',
                    size:'25cm 25.5cm 26cm 26.5cm 27cm 27.5cm 28cm 28.5cm 29cm'
                },
                {
                    id:'p3',
                    img:'https://uaoi.united-arrows.co.jp/img/item/55000/5500023S0448/5500023S0448_l1_a000.jpg',
                    name:'DD1391-100',
                    maker:'Nike',
                    kinds:'スニーカ',
                    overview:'＜NIKE＞ DUNK LOW RETRO Black/スニーカー',
                    price:'¥13,200(税込)',
                    points:'ハウスカードポイント：120pt還元',
                    size:'サイズ： 26cm 26.5cm 27cm 27.5cm 28cm 28.5cm 29cm'
                },
                {
                    id:'p4',
                    img:'https://uaoi.united-arrows.co.jp/img/item/13000/1300023Y0020/1300023Y0020_l1_a000.jpg',
                    name:'U9060UAW',
                    maker:'New Balance',
                    kinds:'スニーカ',
                    overview:'【別注】＜New Balance＞ U9060UAW SP/スニーカー',
                    price:'¥24,200(税込)',
                    points:'ハウスカードポイント：220pt還元',
                    size:'サイズ：25.5cm 26cm 26.5cm 27cm 27.5cm 28cm 28.5cm 29cm'
                }
            ]
        }
    },
    mutations,
    actions,
    getters
}