<!--  -->
<template>
    <div class="screen">
        <div class='cute_baby'>
            <div class="header">
                <div class="return" @click="return_previous_page()"></div>
                <div class="scene_experience_tabbar">
                    <div class="title">
                        场景模拟体验：
                    </div>
                    <div class="btn_box">
                        <div class="btn" @click="showModal(item.text)" v-for="(item,index) in scene_experience_list" :key="index">{{item.text}}</div>
                    </div>
                </div>
                <div class="go_to_home" @click="go_to_home()"></div>
            </div>
            <!-- <div class="scene_experience_tabbar">
                <div class="title">
                    场景模拟体验：
                </div>
                <div class="btn_box">
                    <div class="btn" @click="showModal(item.text)" v-for="(item,index) in scene_experience_list" :key="index">{{item.text}}</div>
                </div>
            </div> -->
            <div class="body">
                <div class="big_img"></div>
                <div class="list_box">
                    <div class="service_list">
                        <div class="title">内容服务</div>
                        <div class="item_box">
                            <div class="service_item" v-for="(item,index) in service_list" :key="index">
                                <div class="img" :style="{backgroundImage:'url('+item.img_url+')'}"></div>
                                <div class="text"> {{item.title}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="AI">
                        <div class="title">AI系统</div>
                        <div class="AI_list">
                            <div class="AI_item" v-for="(item,index) in AI_list" :key="index" >
                                <div class="left">
                                    <img :src="item.img" alt="">
                                    <div class="title">{{item.title}}</div>
                                </div>
                                <div class="dec"><p>{{item.dec}}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LanguageOutput :class="modal_languageOutput_class ? 'modal_languageOutput' : ''" :output_text='output_text'></LanguageOutput>
            <Modal  :show="if_show_mask" :title="modal_title" @hideModal="hideModal">
                <div class="modal_main">
                    <ProductCard v-for="(item,index) in modal_product_list" :name="item.name" :img_url="item.img_url" :product_img="item.product_img" :key="index"></ProductCard>
                </div>
           </Modal>
        </div>
    </div>
</template>

<script>
import ProductCard from '../../components/cards/productCard';
import Modal from "../../components/modal";
import LanguageOutput from "../../components/languageOutput";
export default {
  components: {
      ProductCard,
      LanguageOutput,
      Modal
  },
  data() {
    return {
        output_text: "家有老人：xxxxxxxxxxxxxxx是xxxxxxxxxxxxxxxx",
        if_show_mask:false,
        modal_title:'一键通知',
         modal_languageOutput_class:false,
        scene_experience_list:[
            {text:'一键通知'},
            {text:'危险警报'},
            {text:'安全守护'},
            {text:'干烧预警'},
            {text:'老人语音求助'}
        ],
        service_list:[
            {
                title:'医疗咨询服务',
                img_url:require('./assets/imges/old_man/医疗咨询.png')
            },
            {
                title:'体检服务',
                img_url:require('./assets/imges/old_man/体检.png')
            },
            {
                title:'耗材更换服务',
                img_url:require('./assets/imges/old_man/耗材.png')
            },
            {
                title:'机器清洁服务',
                img_url:require('./assets/imges/old_man/机器清洁.png')
            },
            {
                title:'空气质量查询',
                img_url:require('./assets/imges/old_man/空气质量.png')
            },
            {
                title:'家政清洁服务',
                img_url:require('./assets/imges/old_man/家政.png')
            },
            {
                title:'按摩护理服务',
                img_url:require('./assets/imges/old_man/按摩.png')
            },{
                title:'老人旅游服务',
                img_url:require('./assets/imges/old_man/老人旅游.png')
            },
            {
                title:'看护服务',
                img_url:require('./assets/imges/old_man/看护.png')
            },
            {
                title:'健康饮食建议',
                img_url:require('./assets/imges/old_man/健康.png')
            },
            {
                title:'生活护理指导',
                img_url:require('./assets/imges/old_man/生活.png')
            },
            {
                title:'老年人社区',
                img_url:require('./assets/imges/old_man/老年人社区.png')
            },
            {
                title:'睡眠音乐内容',
                img_url:require('./assets/imges/old_man/睡眠音乐内容.png')
            },
            {
                title:'新闻相声内容',
                img_url:require('./assets/imges/old_man/新闻相声内容.png')
            },
            {
                title:'养生内容',
                img_url:require('./assets/imges/old_man/养生.png')
            }
        ],
        AI_list:[
            {
                img:require('./assets/imges/美的智慧云.png'),
                title:'美的智慧云',
                dec:'家电控制 环境调节'
            },
            {
                img:require('./assets/imges/AI智能.png'),
                title:'AI智能',
                dec:'个性饮食饮水建议 食材到期提醒 运动建议 摔倒识别 个性习惯提'
            },
            {
                img:require('./assets/imges/大数据.png'),
                title:'大数据',
                dec:'用户行为记录 日常体征数据 运动轨迹'
            }
        ],
        modal_product_list:[
            {
                name:'一键报警器',
                img_url:require('./assets/imges/cute_baby/边框1.png'),
                product_img:require('./assets/imges/old_man/一键报警器.png')
            },
            {
                name:'智能网关',
                img_url:require('./assets/imges/cute_baby/边框1.png'),
                product_img:require('./assets/imges/old_man/智能网关.png')
            },
            {
                name:'小美音箱',
                img_url:require('./assets/imges/cute_baby/边框1.png'),
                product_img:require('./assets/imges/old_man/小美音箱.png')
            }
        ]  
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      //return
      return_previous_page(){
         this.$router.go(-1);
      },
      go_to_home(){
        this.$router.push('/');
      },
      //弹出遮罩
      showModal(text){
          if(text=='一键通知'){
            this.if_show_mask=true 
            this.modal_languageOutput_class=true
          }
      },
      //关闭遮罩
      hideModal(e){
        //   console.log(1)
          this.if_show_mask=false
          this.modal_languageOutput_class=false
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},

  mounted() {}
};
</script>
<style lang='scss' scoped>
    .screen{
        height: 100%;
        background-image: url(./assets/imges/cute_baby/背景.jpg);
        // background-position: center center;
        // background-repeat: no-repeat; 
        background-size: cover; 
    }
    .cute_baby{
        width: 1790px;
        margin: 0 auto;
        height: 100%;
        overflow: hidden;
        // background-image: url(./assets/imges/背景.jpg);
        .header{
            margin-top: 54px;
            height: 80px;
            overflow: hidden;
            .return{
                float: left;
                margin-right: 40px;
                margin-top: 17px;
                width: 26px;
                height: 46px;
                background-image: url(./assets/imges/返回.png);
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
            }
            .scene_experience_tabbar{
                float: left;
                width: 1620px;
                height: 78px;
                background:rgba(0,145,255,0.24);
                border-radius:10px;
                border:1px solid rgba(0,161,255,1); 
                    >.title{
                        float: left;
                        width: 286px;
                        line-height: 80px;
                        font-size:30px;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        text-align: center;
                    } 
                    .btn_box{
                        width: 1330px;
                        padding: 16px 0px;
                        float: right;
                        display: flex;
                        justify-content: space-evenly;
                        // align-items: space-between;
                        .btn{
                            // float: left;
                            padding: 4px 35px;
                            background:#00A1FF;
                            border-radius:10px;
                            border:1px solid rgba(0,161,255,1);
                            font-size:28px;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height:40px;
                            text-align: center;
                        }
                    }
            }
            .go_to_home{
                float: right;
                margin-left: 20px;
                margin-top: 13px;
                width: 56px;
                height: 54px;
                background-image: url(./assets/imges/首页.png);
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
            }
        }
        .body{
            margin-top: 30px;
            overflow: hidden;
            .big_img{
                float: left;
                margin-left: 48px;
                width: 880px;
                height: 725px;
                background-image: url(./assets/imges/old_man/家有老人.png);
                background-repeat: no-repeat;
                background-position:center center;
                background-size: contain;
            }
            .list_box{
                float: right;
                overflow: hidden;
                .service_list{
                    width: 718px;
                    height: 360px;
                    margin-top: 30px;
                    box-sizing: border-box;
                    padding-left: 10px;
                    //  padding: 30px 26px 0px 10px;
                     overflow: hidden;
                     background-image: url(./assets/imges/cute_baby/内容服务边框.png);
                     background-size: cover;
                     background-position: center center;
                     background-repeat: no-repeat;
                    >.title{
                        line-height: 80px;
                        font-size:24px;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        text-align: center;
                    }
                    .item_box{
                        height: 274px;
                        .service_item{
                            width: 185px;
                            box-sizing: border-box;
                            margin-left: 37px;
                            margin-bottom: 6px;
                            background:rgba(77,173,236,0.1);
                            border-radius:6px;
                            float: left;
                            padding: 5px 0px 5px 9px;
                            // &:nth-child(11){
                            //     width: 220px;
                            //     margin-right: 100px;
                            // }
                            .img{
                                display: inline-block;
                                line-height: 34px;
                                width: 34px;
                                height: 34px;
                                background-repeat: no-repeat;
                                background-position: center center;
                                background-size: contain;
                                vertical-align: middle
                            }
                            .text{
                                margin-left: 5px;
                                display: inline-block;
                                line-height: 34px;
                                font-size:20px;
                                font-weight:400;
                                color:rgba(255,255,255,1);
                                vertical-align: middle
                            }
                        }
                    }
                }
                .AI{
                    height: 328px;
                    margin-top: 33px;
                    width: 718px;
                    background-image: url(./assets/imges/cute_baby/ai系统边框.png);
                    background-repeat: no-repeat;
                    background-position:center center;
                    background-size: cover;
                    >.title{
                        line-height: 80px;
                        font-size:24px;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        text-align: center; 
                    }
                    .AI_list{
                        height: 60px;
                        padding: 0px 47px 0px 67px;
                        box-sizing: border-box;
                        .AI_item{
                            width: 566px;
                            overflow: hidden;
                            margin-bottom: 20px;
                            background:rgba(77,173,236,0.1);
                            border-radius:6px;
                            padding: 6px 55px 6px 55px;
                            box-sizing: border-box;
                            .left{
                                img{
                                    float: left;
                                    width: 40px;
                                    height: 40px;
                                    margin-top: 4px;
                                }
                                >.title{
                                    width: 127px;
                                    float: left;
                                    margin-left: 10px;
                                    font-size:18px;
                                    font-weight:400;
                                    color:rgba(255,255,255,1);
                                    line-height:48px;
                                }
                            }
                            .dec{
                                height: 48px;
                                display: flex;
                                flex-direction: column;
                                // align-items: center;
                                justify-content: center;
                                >p{
                                    font-size:14px;
                                    font-weight:400;
                                    color:rgba(255,255,255,1);
                                    line-height:20px;
                                }
                            }

                        }
                    }

                }
            }
        }
        .languageOutput{
            margin-left: 90px;
            margin-top: 25px;
        }
        .modal_languageOutput{
            position: fixed;
            bottom: 20px;
            left: 150px;
            margin-left: 0px;
            z-index: 20;
        }
        .modal_main{
            overflow: hidden;
            display: flex;
            justify-content: center;
            >>>.product_card{
                padding: 31px 0px;
                box-sizing: border-box;
                width: 260px;
                height: 340px;
                background-image: url(./assets/imges/cute_baby/边框1.png);
                background-repeat: no-repeat;
                background-position: center center;
                margin-left: 20px;
                &:nth-child(1){
                    margin-left: 0px;
                }
                .text{
                    margin-top: 0px;
                font-size:24px;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:33px;
                }
            }
        }

    }
</style>