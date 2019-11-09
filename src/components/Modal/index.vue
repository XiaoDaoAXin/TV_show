<template>
    <div class="modal" v-show="show">
        <div class="modal-container">
            <div class="close" @click="hideModal"></div>
            <div class="modal-header">
                {{ title }}
            </div>
            <div class="modal-main">
                <slot></slot>
            </div>
        </div>
         <!-- <LanguageOutput :output_text='output_text'></LanguageOutput> -->
    </div>
</template>

<script>
import LanguageOutput from '../languageOutput'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    LanguageOutput
  },
    name: 'modal',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '请定义标题'
        },
    },
    data(){
        return{
            output_text:'健康空气：xxxxxxxxxxxxxxx是xxxxxxxxxxxxxxxx'
        }
    },
    methods: {
        hideModal() {
            this.$emit('hideModal')
        },
    }
};
</script>
<style lang='scss' scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.8);
    z-index: 10;
}
.modal-container {
    width: 885px;
    height: 525px;
    box-sizing: border-box;
    padding: 30px 30px 45px 30px;
    border-radius: 10px;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-image: url(./assets/imges/边框2.png);
    background-repeat: no-repeat;
    background-position: center center;
    // position: relative;
    .close{
        width: 30px;
        height: 30px;
        position: absolute;
        top: 30px;
        right: 30px;
        background-image: url(./assets/imges/关闭.png);
        background-repeat: no-repeat;
        background-position: center center;
    }
}
.modal-header {
    font-size:32px;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:70px;
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
    cursor: move;
}
.languageOutput{
    z-index: 20;
}
// .modal-footer {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 57px;
//     border-top: 1px solid #ddd;
// }
// .modal-footer button {
//     width: 100px;
// }
// .modal-main {
//     padding: 15px 40px;
// }
</style>