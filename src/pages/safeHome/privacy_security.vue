<!-- 隐私安全页面 -->
<template>
  <div class="screen">
    <div class='privacy_security'>
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
      title: "隐私安全",
      output_text: "健康空气：xxxxxxxxxxxxxxx是xxxxxxxxxxxxxxxx",
      //场景模拟按钮
      scene_btn_list: [
        "回家窗帘自动遮挡",
        "回家摄像头自动撤防",
        "智能音箱防监听"
      ],
      product_list: [
        {
        //   name: "智能门锁",
          p1: "智能摄像头",
        //   p2: "智能门锁",
          img_url: require("./assets/imges/privacy_security/智能摄像头.png")
        },
        {
          name: "智能摄像头",
          p1: "小美音箱 ",
          //   p2: "摄像头",
          img_url: require("./assets/imges/privacy_security/小美音箱.png")
        },
        {
          name: "空气净化器",
          p1: "电动窗帘杆 ",
          //   p2: "净化器",
          img_url: require("./assets/imges/privacy_security/电动窗帘杆.png")
        },
        {
          name: "一键报警器",
          p1: "安全芯片",
          //   p2: "报警器",
          img_url: require("./assets/imges/privacy_security/安全芯片.png")
        },
        {
          name: "有毒气体检测器",
          p1: "智慧云加密",
        //   p2: "感应器",
          img_url: require("./assets/imges/privacy_security/智慧云加密.png")
        },
        {
          name: "有毒气体检测器",
          p1: "智能空调",
          //   p2: "检测器",
          img_url: require("./assets/imges/privacy_security/智能空调.png")
        },
        {
          name: "门窗探测器",
          p1: "智能语音贴",
        //   p2: "柜开关",
          img_url: require("./assets/imges/privacy_security/智能语音贴.png")
        }
      ],
      params_liset: [
        {
          title: "摄像头自动",
          params:'撤防',
          img_url: require("./assets/imges/privacy_security/摄像头自动撤防.png")
        },
        {
          title: "语音防监听",
        //   params: "保联动",
          img_url: require("./assets/imges/privacy_security/语音防监听.png")
        },
        {
          title: "居家生活",
            params: "防曝光",
          img_url: require("./assets/imges/privacy_security/居家生活防曝光.png")
        },
        {
          title: "云端数据加密",
        //   params: "害感知",
          img_url: require("./assets/imges/privacy_security/云端数据加密.png")
        },
        {
          title: "本地数据加密",
          //   params: "监测",
          img_url: require("./assets/imges/privacy_security/本地数据加密.png")
        },
        {
          title: "传输链路加固",
          //   params: "行为预警",
          img_url: require("./assets/imges/privacy_security/传输链路加固.png")
        },
        {
          title: "社区安保服务",
          //   params: "监测",
          img_url: require("./assets/imges/privacy_security/社区安保服务.png")
        }
      ],
      service_liset: [
        {
          title: "隐私安全常识",
          img_url: require("./assets/imges/privacy_security/1.png")
        },
        {
          title: "圈子社区",
          img_url: require("./assets/imges/privacy_security/2.png")
        },
        {
          title: "女性隐私贴士",
          img_url: require("./assets/imges/privacy_security/3.png")
        },
        {
          title: "社区卫生安保服务",
          img_url: require("./assets/imges/privacy_security/4.png")
        },
        {
          title: "儿童安全指导",
          img_url: require("./assets/imges/privacy_security/5.png")
        },
        {
          title: "老人安全指导",
          img_url: require("./assets/imges/privacy_security/6.png")
        },
        {
          title: "看护服务",
          img_url: require("./assets/imges/privacy_security/7.png")
        },
        {
          title: "在线商城服务",
          img_url: require("./assets/imges/privacy_security/8.png")
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
          able_item: ["回家自动撤防", "个性习惯学习",'人脸识别'],
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
  background-image: url(./assets/imges/privacy_security/隐私安全大背景.jpg);
  background-size: cover;
}
.privacy_security {
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
          top: 11px;
          left: 50%;
          transform: translateX(-50%)
        }
        &:nth-child(2) {
          top: 83px;
          left: 79px;
        }
        &:nth-child(3) {
          top: 83px;
          right: 79px;
        }
        &:nth-child(4) {
          top: 179px;
          left: 59px;
        }
        &:nth-child(5) {
          top: 179px;
          right: 59px;
        }
        &:nth-child(6) {
          top: 275px;
          left: 59px;
        }
        &:nth-child(7) {
          top: 275px;
          right: 59px;
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