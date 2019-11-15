<!-- 财物安全页面 -->
<template>
  <div class="screen">
    <div class='wealth_safety'>
      <Header :title="title"></Header>
      <div class="body">
        <div class="scene_experience_tabbar">
          <div class="title">场景模拟体验：</div>
          <div class="btn_box">
            <div
              class="btn"
              v-for="(item,index) in scene_btn_list"
              :key="index"
              v-text="item"
            ></div>
          </div>
        </div>
        <div class="product_list">
          <h3>产品</h3>
          <div class="product_box">
            <ProductCard
              v-for="(item,index) in product_list"
              :img_url="item.img_url"
              :key="index"
            >
              <div class="name">
                <p v-text="item.p1"></p>
                <p v-text="item.p2"></p>
              </div>
            </ProductCard>
          </div>
        </div>
        <div class="params_list">
          <SmallCard
            v-for="(item,index) in params_liset"
            :title='item.title'
            :params="item.params"
            :img_url="item.img_url"
            :key="index"
          ></SmallCard>
          <!-- <div class="bg_sea"></div> -->
          <h2>安全的家</h2>
        </div>
        <div class="right_box">
          <div class="service">
            <h3>内容服务</h3>
            <div class="service_item">
              <SmallCard
                v-for="(item,index) in service_liset"
                :title="item.title"
                :img_url="item.img_url"
                :key="index"
              ></SmallCard>
            </div>
          </div>
          <div class="AI">
            <h3>AI系统</h3>
            <div class="AI_item">
              <SmallCard
                v-for="(item,index) in AI_list"
                :title="item.title"
                :img_url="item.img_url"
                :key="index"
              >
                <div slot="able_item">
                  <div class="able_list">
                    <P
                      v-for="(item,index) in item.able_item"
                      :key="index"
                    >{{item}}</P>
                  </div>
                </div>
              </SmallCard>
            </div>
          </div>
        </div>
      </div>
      <LanguageOutput :output_text='output_text'></LanguageOutput>
    </div>
  </div>

</template>

<script>
import Header from "../../components/header";
import SmallCard from "../../components/cards/samllCard";
import SpeechCard from "../../components/cards/speechCard";
import DetailCard from "../../components/cards/detailCard";
import ProductCard from "../../components/cards/productCard";
import LanguageOutput from "../../components/languageOutput";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    SmallCard,
    SpeechCard,
    DetailCard,
    LanguageOutput,
    ProductCard
  },
  data() {
    return {
      title: "财物安全",
      output_text: "健康空气：xxxxxxxxxxxxxxx是xxxxxxxxxxxxxxxx",
      //场景模拟按钮
      scene_btn_list: [
        "阳台安防异动直播",
        "陌生人徘徊报警",
        "门锁破坏报警",
        "门锁多次尝试报警"
      ],
      product_list: [
        {
          name: "智能门锁",
          p1: " ",
          p2: "智能门锁",
          img_url: require("./assets/imges/wealth_safety/智能门锁.png")
        },
        {
          name: "智能摄像头",
          p1: "智能摄像头",
          //   p2: "摄像头",
          img_url: require("./assets/imges/wealth_safety/智能摄像头.png")
        },
        {
          name: "空气净化器",
          p1: "小美音箱",
          //   p2: "净化器",
          img_url: require("./assets/imges/wealth_safety/小美音箱.png")
        },
        {
          name: "一键报警器",
          p1: "门窗探测器",
          //   p2: "报警器",
          img_url: require("./assets/imges/wealth_safety/门窗探测器.png")
        },
        {
          name: "有毒气体检测器",
          p1: "人体红外",
          p2: "感应器",
          img_url: require("./assets/imges/wealth_safety/人体红外感应器.png")
        },
        {
          name: "有毒气体检测器",
          p1: "智能猫眼",
          //   p2: "检测器",
          img_url: require("./assets/imges/wealth_safety/智能猫眼.png")
        },
        {
          name: "门窗探测器",
          p1: "智能抽屉",
          p2: "柜开关",
          img_url: require("./assets/imges/wealth_safety/智能抽屉柜开关.png")
        },
        {
          name: "小美音箱",
          p1: "智能挂锁",
          // p2:'摄像头',
          img_url: require("./assets/imges/wealth_safety/智能挂锁.png")
        }
      ],
      params_liset: [
        {
          title: "陌生人识别",
          // params:'1.5L水',
          img_url: require("./assets/imges/wealth_safety/陌生人识别.png")
        },
        {
          title: "门锁破坏提醒",
          //   params: "监测",
          img_url: require("./assets/imges/wealth_safety/门锁破坏提醒.png")
        },
        {
          title: "门窗异动监测",
          //   params: "安防监控",
          img_url: require("./assets/imges/wealth_safety/门窗异动监测.png")
        },
        {
          title: "门锁多次尝",
          params: "试预警",
          img_url: require("./assets/imges/wealth_safety/门锁多次尝试预警.png")
        },
        {
          title: "人体移动监测",
          //   params: "监测",
          img_url: require("./assets/imges/wealth_safety/人体移动监测.png")
        },
        {
          title: "重点财物保管",
          //   params: "行为预警",
          img_url: require("./assets/imges/wealth_safety/重点财物保管.png")
        }
      ],
      service_liset: [
        {
          title: "财产保险服务",
          img_url: require("./assets/imges/wealth_safety/1.png")
        },
        {
          title: "儿童安全指导",
          img_url: require("./assets/imges/wealth_safety/2.png")
        },
        {
          title: "金融理财服务",
          img_url: require("./assets/imges/wealth_safety/3.png")
        },
        {
          title: "社区安保服务",
          img_url: require("./assets/imges/wealth_safety/4.png")
        },
        {
          title: "托管服务",
          img_url: require("./assets/imges/wealth_safety/5.png")
        },
        {
          title: "老人安全指导",
          img_url: require("./assets/imges/wealth_safety/6.png")
        },
        {
          title: "老年人社区",
          img_url: require("./assets/imges/wealth_safety/7.png")
        },
        {
          title: "闲置兑换服务",
          img_url: require("./assets/imges/wealth_safety/8.png")
        }
      ],
      AI_list: [
        {
          title: "美的智慧云",
          able_item: ["远程控制家电", "联动多台设备"],
          img_url: require("./assets/imges/personal_safety/美的智慧云.png")
        },
        {
          title: "AI智能",
          able_item: ["陌生人徘徊提醒", "人脸识别"],
          img_url: require("./assets/imges/personal_safety/AI智能.png")
        },
        {
          title: "大数据",
          able_item: ["用户行为记录"],
          img_url: require("./assets/imges/personal_safety/大数据.png")
        }
      ]
    };
  },
  //方法集合
  methods: {}
  //生命周期 - 创建完成（可以访问当前this实例）
};
</script>
<style lang='scss' scoped>
.screen {
  height: 100%;
  background-image: url(./assets/imges/wealth_safety/财务安全大背景.jpg);
  background-size: cover;
}
.wealth_safety {
  height: 100%;
  width: 1790px;
  margin: 0px auto;
  overflow: hidden;

  .body {
    height: 790px;
    width: 1790px;
    margin: 0px auto;
    overflow: hidden;
    padding: 0px 40px;
    box-sizing: border-box;
    //border: 1px solid red;
    position: relative;
    .scene_experience_tabbar {
      margin: 0px auto;
      margin-top: 15px;
      width: 1685px;
      height: 134px;
      background-image: url(./assets/imges/personal_safety/按钮背景框.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      .title {
        float: left;
        width: 292px;
        height: 80px;
        font-size: 30px;
        text-align: center;
        font-weight: normal;
        color: rgba(255, 255, 255, 1);
        line-height: 80px;
      }
      .btn_box {
        float: left;
        margin-top: 16px;
        width: 1390px;
        height: 48px;
        line-height: 80px;
        text-align: center;
        .btn {
          float: left;
          margin-left: 40px;
          padding: 8px 22px;
          border-radius: 10px;
          background-color: rgba(0, 161, 255, 1);
          font-size: 28px;
          font-weight: normal;
          color: rgba(255, 255, 255, 1);
          line-height: 33px;
          &:nth-child(1) {
            // width: 180px;
            margin: 0px;
          }
        }
      }
    }
    .product_list {
      position: absolute;
      width: 492px;
      height: 672px;
      left: 38px;
      top: 110px;
      box-sizing: border-box;
      // margin-top: 60px;
      background-size: cover;
      background-image: url(./assets/imges/personal_safety/产品边框.png);
      background-repeat: no-repeat;
      background-position: center center;
      h3 {
        margin-top: 20px;
        height: 68px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 68px;
        text-align: center;
      }
      .product_box {
        padding-left: 16px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
        >>> .product_card {
          width: 100px;
          height: 270px;
          border-radius: 10px;
          margin-left: 11px;
          margin-bottom: 10px;
          // &:nth-child(5n+1){
          //     margin-left: 0px;
          // }
          .name {
            width: 80px;
            margin: 0px auto;
            margin-top: 180px;
            text-align: center;
            font-size: 16px;
            font-weight: normal;
            color: rgba(255, 255, 255, 1);
            line-height: 20px;
          }
        }
      }
    }
    .params_list {
      position: absolute;
      //border: 1px solid red;
      left: 50%;
      top: 130px;
      transform: translateX(-50%);
      width: 758px;
      height: 700px;
      >>> .samll_card {
        //改变组件的样式
        width: 185px;
        height: 67px;
        padding: 0px;
        background-size: cover;
        background-image: url(./assets/imges/personal_safety/小边框.png);
        background-repeat: no-repeat;
        background-position: center center;
        position: absolute;
        &:nth-child(1) {
          top: 6px;
          left: 162px;
        }
        &:nth-child(2) {
          top: 6px;
          right: 162px;
        }
        &:nth-child(3) {
          top: 122px;
          left: 40px;
        }
        &:nth-child(4) {
          top: 122px;
          right: 40px;
        }
        &:nth-child(5) {
          top: 238px;
          left: 20px;
        }
        &:nth-child(6) {
          top: 238px;
          right: 20px;
        }
        &:nth-child(7) {
          top: 354px;
          left: 20px;
        }
        &:nth-child(8) {
          top: 354px;
          right: 20px;
        }
        &:nth-child(6) {
          .text {
            line-height: 18px;
            p {
              &:nth-child(1) {
                width: 70%;
              }
            }
          }
        }
        .img {
          width: 50px;
          height: 50px;
          margin-left: 10px;
          margin-top: 7px;
          background-size: contain;
        }
        .text {
          margin-left: 10px;
          width: 113px;
          height: 65px;
          font-size: 18px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
      h2 {
        position: absolute;
        left: 0px;
        bottom: 55px;
        width: 100%;
        margin-top: 40px;
        text-align: center;
        font-size: 34px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 34px;
      }
    }
    .right_box {
      float: left;
      width: 492px;
      height: 766px;
      // border: 1px solid red;
      .service {
        position: absolute;
        top: 110px;
        right: 38px;
        padding: 0px 0px 0px 22px;
        box-sizing: border-box;
        width: 490px;
        height: 351px;
        background-size: cover;
        background-image: url(./assets/imges/personal_safety/内容服务边框.png);
        background-repeat: no-repeat;
        background-position: center center;
        // margin-top:60px;
        h3 {
          margin-top: 20px;
          height: 68px;
          font-size: 24px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 68px;
          text-align: center;
        }
        .service_item {
          height: 220px;
          padding: 0px 0px 0px 30px;
          //更改组件样式
          >>> .samll_card {
            padding: 0px;
            margin-bottom: 15px;
            width: 218px;
            height: 42px;
            background-image: none;
            .img {
              width: 42px;
              height: 42px;
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center center;
            }
            .text {
              height: 42px;
              margin-left: 15px;
              font-size: 18px;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              line-height: 25px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              p {
                width: 150px;
              }
            }
          }
        }
      }
      .AI {
        position: absolute;
        top: 465px;
        right: 38px;
        width: 490px;
        height: 322px;
        background-size: cover;
        background-image: url(./assets/imges/personal_safety/AI系统边框.png);
        background-repeat: no-repeat;
        background-position: center center;
        // margin-top: 36px;
        h3 {
          margin-top: 20px;
          height: 68px;
          font-size: 24px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 68px;
          text-align: center;
        }
        .AI_item {
          padding-left: 15px;
          // box-sizing: border-box;
          >>> .samll_card {
            padding: 0px;
            width: 153px;
            height: 210px;
            background-image: none;
            .img {
              width: 100%;
              height: 40px;
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center center;
            }
            .text {
              width: 100%;
              height: 170px;
              margin: 0px;
              > p {
                &:nth-child(1) {
                  width: 100%;
                  height: 46px;
                  font-size: 18px;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 1);
                  line-height: 46px;
                  text-align: center;
                }
                &:nth-child(2) {
                  width: 109px;
                  margin: 0px auto;
                  font-size: 14px;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 1);
                  line-height: 20px;
                  text-align: center;
                }
              }
              .able_list {
                width: 158px;
                margin: 0px auto;
                margin-top: 25px;
                font-size: 14px;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 20px;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
  >>> .languageOutput {
    margin: 0px;
    margin-top: 10px;
    margin-left: 75px;
  }
}
</style>