<!-- 人生安全页面 -->
<template>
  <div class="screen">
    <div class='healthy_habit'>
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
      title: "人身安全",
      output_text: "人身安全：xxxxxxxxxxxxxxx是xxxxxxxxxxxxxxxx",
      //场景模拟按钮
      scene_btn_list: [
        "一键报警",
        "火灾烟雾报警",
        "智能门锁安防抓拍",
        "生理指标异常报警",
        "老人跌倒报警"
      ],
      product_list: [
        {
          name: "智能穿戴设备",
          p1: "智能",
          p2: "穿戴设备",
          img_url: require("./assets/imges/personal_safety/智能穿戴设备.png")
        },
        {
          name: "智能摄像头",
          p1: "智能",
          p2: "摄像头",
          img_url: require("./assets/imges/personal_safety/智能摄像头.png")
        },
        {
          name: "空气净化器",
          p1: "空气",
          p2: "净化器",
          img_url: require("./assets/imges/personal_safety/空气净化器.png")
        },
        {
          name: "一键报警器",
          p1: "一键",
          p2: "报警器",
          img_url: require("./assets/imges/personal_safety/一键报警器.png")
        },
        {
          name: "可燃气体探测器",
          p1: "可燃气体",
          p2: "探测器",
          img_url: require("./assets/imges/personal_safety/可燃气体探测器.png")
        },
        {
          name: "火灾烟感探测器",
          p1: "火灾烟感",
          p2: "探测器",
          img_url: require("./assets/imges/personal_safety/火灾烟感探测器.png")
        },
        {
          name: "有毒气体检测器",
          p1: "有毒气体",
          p2: "检测器",
          img_url: require("./assets/imges/personal_safety/有毒气体检测器.png")
        },
        {
          name: "门窗探测器",
          p1: "门窗",
          p2: "探测器",
          img_url: require("./assets/imges/personal_safety/门窗探测器.png")
        },
        {
          name: "小美音箱",
          p1: "小美音箱",
          // p2:'摄像头',
          img_url: require("./assets/imges/personal_safety/小美音箱.png")
        },
        {
          name: "智能猫眼",
          p1: "智能猫眼",
          // p2:'摄像头',
          img_url: require("./assets/imges/personal_safety/智能猫眼.png")
        }
      ],
      params_liset: [
        {
          title: "陌生人识别",
          // params:'1.5L水',
          img_url: require("./assets/imges/personal_safety/陌生人识别.png")
        },
        {
          title: "有毒气体",
          params: "监测",
          img_url: require("./assets/imges/personal_safety/有毒气体监测.png")
        },
        {
          title: "摄像头",
          params: "安防监控",
          img_url: require("./assets/imges/personal_safety/摄像头安防监控.png")
        },
        {
          title: "老人",
          params: "跌倒识别",
          img_url: require("./assets/imges/personal_safety/老人跌倒识别.png")
        },
        {
          title: "生理指标",
          params: "监测",
          img_url: require("./assets/imges/personal_safety/生理指标监测.png")
        },
        {
          title: "儿童危险",
          params: "行为预警",
          img_url: require("./assets/imges/personal_safety/儿童危险行为预警.png")
        },
        {
          title: "火灾",
          params: "烟雾监测",
          img_url: require("./assets/imges/personal_safety/火灾烟雾监测.png")
        },
        {
          title: "可燃气体",
          params: "监测",
          img_url: require("./assets/imges/personal_safety/可燃气体监测.png")
        }
      ],
      service_liset: [
        {
          title: "空气质量查询",
          img_url: require("./assets/imges/personal_safety/空气质量查询.png")
        },
        {
          title: "儿童安全指导",
          img_url: require("./assets/imges/personal_safety/儿童安全指导.png")
        },
        {
          title: "除甲醛服务",
          img_url: require("./assets/imges/personal_safety/除甲醛服务.png")
        },
        {
          title: "生活护理服务",
          img_url: require("./assets/imges/personal_safety/生活护理服务.png")
        },
        {
          title: "医疗咨询服务",
          img_url: require("./assets/imges/personal_safety/医疗咨询服务.png")
        },
        {
          title: "老人安全指导",
          img_url: require("./assets/imges/personal_safety/老人安全指导.png")
        },
        {
          title: "看护服务",
          img_url: require("./assets/imges/personal_safety/看护服务.png")
        },
        {
          title: "生理指标记录",
          img_url: require("./assets/imges/personal_safety/生理指标记录.png")
        }
      ],
      AI_list: [
        {
          title: "美的智慧云",
          able_item: ["远程控制家电", "联动多台设备", "环境调节"],
          img_url: require("./assets/imges/personal_safety/美的智慧云.png")
        },
        {
          title: "AI智能",
          able_item: ["摔倒识别", "安全提醒"],
          img_url: require("./assets/imges/personal_safety/AI智能.png")
        },
        {
          title: "大数据",
          able_item: ["用户行为记录", "日常体征数据", "运动轨迹"],
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
  background-image: url(./assets/imges/personal_safety/大背景.jpg);
  background-size: cover;
}
.healthy_habit {
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
      margin-top: 5px;
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
            width: 180px;
            margin: 0px;
          }
        }
      }
    }
    .product_list {
      position: absolute;
      width: 492px;
      height: 662px;
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
        padding-left: 17px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
        >>> .product_card {
          width: 80px;
          height: 260px;
          border-radius: 10px;
          margin-left: 9px;
          margin-bottom: 10px;
          // &:nth-child(5n+1){
          //     margin-left: 0px;
          // }
          .name {
            width: 65px;
            margin: 0px auto;
            margin-top: 160px;
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
            margin-bottom: 20px;
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
        top: 450px;
        right: 38px;
        width: 490px;
        height: 351px;
        background-size: cover;
        background-image: url(./assets/imges/personal_safety/内容服务边框.png);
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
        margin-top: 20px;
        margin-left: 75px;
  }
}
</style>