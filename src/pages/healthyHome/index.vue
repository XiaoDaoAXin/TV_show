<template>
    <div class="screen" >
        <div id="healthyHome">
            <Header :title="title"></Header>
            <div class="healthy_home_able">
                <SmallCard v-for="(item,index) in small_cards" :title="item.title" :params="item.params" :img_url="item.img_url" :key="index"></SmallCard>
            </div>
            <h2>健康服务</h2>
            <div class="healthy_service_able">
                <DetailCard v-for="(item,index) in detailCards" :title="item.title" :img_url="item.img_url" :router_url="item.router_url" :key="item.title" >
                    <p v-for="(item,index) in item.able" :key="index">{{item}}</p>
                </DetailCard>
            </div>
            <LanguageOutput :output_text='output_text'></LanguageOutput>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header'
import SmallCard from '../../components/cards/samllCard'
import DetailCard from '../../components/cards/detailCard'
import LanguageOutput from '../../components/languageOutput'
export default {
  components: {
    Header,
    SmallCard,
    DetailCard,
    LanguageOutput
  },
  data() {
    return {
        title:'健康的家',
        output_text: "健康的家：xxxxxxxxxxxxxxx是xxxxxxxxxxxxxxxx",
        small_cards:[
            {
                title:'温度',
                params:'26度',
                img_url:require('./assets/img/service/温度.png')
            },
            {
                title:'PM2.5',
                params:'30ug/m',
                img_url:require('./assets/img/service/PM2.5.png')
            },
            {
                title:'声量',
                params:'20分贝',
                img_url:require('./assets/img/service/声量.png')
            },
            {
                title:'睡眠提醒',
                params:'10:00PM',
                img_url:require('./assets/img/service/睡眠提醒.png')
            },
             {
                title:'TDS',
                params:'30ppm',
                img_url:require('./assets/img/service/TDS.png')
            },
            {
                title:'煮好小米粥',
                params:'07:00PM',
                img_url:require('./assets/img/service/时间.png')
            },
             {
                title:'湿度',
                params:'50%',
                img_url:require('./assets/img/service/湿度.png')
            }
        ],
        detailCards:[
            {
             title:'健康的水',
             able:['净水机：水质调整','饮水机：饮水水温调节','电热水器：内胆水质监控，洗浴温度调节','燃气热水器：洗浴温度调节'],
             img_url:require('./assets/img/service/水.png'),
             router_url:'healthyWater'
            },
             {
             title:'健康饮食',
             able:['冰箱：食材管理、食材购买','农残检测仪：检测食品中的农药残留','血压仪：用户血压监测','血糖仪：用户血糖监测'],
             img_url:require('./assets/img/service/饮食.png'),
             router_url:'healthyEat'
            },
             {
             title:'健康空气',
             able:['空调、加湿器：温度、湿度调节','空气净化器、新风机：PM2.5、病菌、甲醛去除','新风机：二氧化碳浓度调节','甲醛检测仪：检测甲醛含量','TVOC检测仪：检测TVOC含量','辐射检测仪：检测空气中的辐射含量','防辐射服：屏蔽一定辐射'],
             img_url:require('./assets/img/service/空气.png'),
             router_url:'healthyAir'
            },
            {
             title:'健康习惯',
             able:['空调、窗帘、音箱、加湿器：适宜睡眠环境营造','窗帘、音箱、新风机：早起提醒','冰箱：食材过期提醒','茶吧机：饮水提醒','除螨仪：清除尘螨','手环：睡眠监测'],
             img_url:require('./assets/img/service/习惯.png'),
             router_url:'healthyHabit'
            }
        ],

    };
  },
  methods: {
    
  }
};
</script>

<style scoped  lang="scss">
.screen{
    height: 100%;
    background-image: url(./assets/img/service/矩形.jpg);
    background-size: cover;
}
#healthyHome {
height: 100%;
width: 1790px;
margin: 0px auto;
overflow: hidden;
// background-image: url(./assets/img/service/矩形.jpg);
    .healthy_home_able{
        width: 100%;
        height: 357px;
        margin-top:34px;
        background-image: url(./assets/img/service/房子.png);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        position: relative;
        .samll_card:nth-child(1){
            position: absolute;
            left: 480px;
            top: 20px;
        }
        .samll_card:nth-child(2){
            position: absolute;
            right:480px;
            top: 20px;
        }
         .samll_card:nth-child(3){
            position: absolute;
            left:240px;
            top: 140px;
        }
        .samll_card:nth-child(4){
            position: absolute;
            right:420px;
            top: 140px;
        }
        .samll_card:nth-child(5){
            position: absolute;
            right:158px;
            top: 140px;
        }
        .samll_card:nth-child(6){
            position: absolute;
            left:428px;
            top: 260px;
        }
        .samll_card:nth-child(7){
            position: absolute;
            right:448px;
            top: 260px;
        }
    }
    h2{
        width: 100%;
        height: 60px;
        text-align: center;
        font-size:42px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:59px;
    }
    .healthy_service_able{
        width: 100%;
        height: 240px;
        margin-top: 35px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .languageOutput{
        margin-top: 80px;
    }
}
</style>