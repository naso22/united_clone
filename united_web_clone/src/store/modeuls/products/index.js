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
                    img:'https://uaoi.united-arrows.co.jp/img/item/14000/1400023S0911/1400023S0911_m1_a000.jpg',
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
                    img:'https://uaoi.united-arrows.co.jp/img/item/13000/1300023S1071/1300023S1071_m1_a000.jpg',
                    name:'H***',
                    maker:'New Balance',
                    kinds:'スニーカ',
                    overview:'＜NIKE＞DUNK LOW Black/スニーカー',
                    price:'¥36,300(税込)',
                    points:'ハウスカードポイント：120pt還元',
                    size:'サイズ： 26cm 26.5cm 27cm 27.5cm 28cm 28.5cm 29cm'
                },
                {
                    id:'p3',
                    img:'https://uaoi.united-arrows.co.jp/img/item/55000/5500023S0448/5500023S0448_m1_a000.jpg',
                    name:'H***',
                    maker:'Nike',
                    kinds:'スニーカ',
                    overview:'＜NIKE＞DUNK LOW Black/スニーカー',
                    price:'¥13,200(税込)',
                    points:'ハウスカードポイント：120pt還元',
                    size:'サイズ： 26cm 26.5cm 27cm 27.5cm 28cm 28.5cm 29cm'
                },
                {
                    id:'p4',
                    img:'https://uaoi.united-arrows.co.jp/img/item/13000/1300023Y0020/1300023Y0020_m1_a000.jpg',
                    name:'H***',
                    maker:'New Balance',
                    kinds:'スニーカ',
                    overview:'＜NIKE＞DUNK LOW Black/スニーカー',
                    price:'¥24,200(税込)',
                    points:'ハウスカードポイント：120pt還元',
                    size:'サイズ： 26cm 26.5cm 27cm 27.5cm 28cm 28.5cm 29cm'
                }
            ]
        }
    },
    mutations,
    actions,
    getters
}