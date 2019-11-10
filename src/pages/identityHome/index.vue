<!--  -->
<template>
  <div class='identity_home'>
      <Header :title="title"></Header>
      <div class="body">
          <h2>一屋一世界 千家万缤纷</h2>
          <div class="oval_system">
              <div class="Cute_baby" @click="go_to_cuteBaby()"></div>
              <div class="old_man"></div>
              <div class="Suitors"></div>
              <div class="Geeks"></div>
              <div class="Fitness"></div>
              <div class="game_player"></div>
              <div class="single_person"></div>
          </div>
      </div>
      <LanguageOutput :output_text='output_text'></LanguageOutput>
  </div>
</template>

<script>
import Header from "../../components/header";
import LanguageOutput from "../../components/languageOutput";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
      Header,
      LanguageOutput
  },
  data() {
    //这里存放数据
    return {
      title: "个性的家",
      output_text: "个性的家：xxxxxxxxxxxxxxx是xxxxxxxxxxxxxxxx",
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
      go_to_cuteBaby(){
          this.$router.push({
              path:'cutebaby'
          })
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang='scss' scoped>
    .identity_home{
        height: 100%;
        overflow: hidden;
        background-image: url(./assets/imges/背景.jpg);
        .body{
            margin-top: 23px;
            padding-bottom: 282px;
            >h2{
                text-align: center;
                font-size:34px;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:48px;
            }
            .oval_system{
                width: 1700px;
                height: 370px;
                border-radius: 50% / 50%;
                margin: 0px auto;
                margin-top: 60px;
                border: 1px  solid #65A7FF;
                z-index: 11;
                position: relative;
                .Cute_baby{
                    width: 530px;
                    height: 530px;
                    background-image: url(./assets/imges/家有萌娃.png);
                    background-position: center center;
                    background-repeat: no-repeat;
                    position: absolute;
                    left: 50%;
                    bottom: 0px;
                    transform: translate(-50%,50%);
                    z-index: 10;
                }
                .old_man{
                    width: 460px;
                    height: 460px;
                    background-image: url(./assets/imges/家有老人.png);
                    background-repeat: no-repeat;
                    background-position: center center;
                    position: absolute;
                    left: 105px;
                    bottom: -197px;
                    z-index: 10;
                }
                .Suitors{
                    width: 230px;
                    height: 230px;
                    background-image: url(./assets/imges/品质追求者.png);
                    background-repeat: no-repeat;
                    background-position: center center;
                    position: absolute;
                    left: -32px;
                    top: -18px;
                    z-index: 10;
                }
                .Geeks{
                    width: 170px;
                    height: 170px;
                    background-image: url(./assets/imges/智能极客.png);
                    background-repeat: no-repeat;
                    background-position: center center;
                    position: absolute;
                    left: 510px;
                    top: -74px;
                }
                .Fitness{
                    width: 170px;
                    height: 170px;
                    background-image: url(./assets/imges/健身爱好者.png);
                    background-repeat: no-repeat;
                    background-position: center center;
                    position: absolute;
                    right: 510px;
                    top: -74px;
                }
                .game_player{
                    width: 230px;
                    height: 230px;
                    background-image: url(./assets/imges/游戏玩家.png);
                    background-repeat: no-repeat;
                    background-position: center center;
                    position: absolute;
                    right: -32px;
                    top: -18px;
                }
                .single_person{
                    width: 460px;
                    height: 460px;
                    background-image: url(./assets/imges/单身人士.png);
                    background-repeat: no-repeat;
                    background-position: center center;
                    position: absolute;
                    right: 105px;
                    bottom: -197px;
                    z-index: 10;                   
                }
            }
        }
    }
</style>