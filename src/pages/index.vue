<template>
    <div>
         <!-- 搜索模块 -->
                <el-row class="search-box">
                    <el-col :offset="9" :span="6">
                        <el-input placeholder="请输入您想要查找的关键词" v-model="search" suffix-icon="el-icon-search">
                        </el-input>
                    </el-col>
                    <el-col :offset="7" :span="2">

                        <a href="/login/">
                            <el-tooltip class="item" effect="dark" content="登录请点这里！" placement="top"><img
                                    src="../assets/pic/balloon.png"></el-tooltip>
                        </a>

                    </el-col>
                </el-row>
           
            <el-main>
                <!-- 走马灯模块 -->
                <el-carousel :interval="4000" type="card" height="400px">
                    <el-carousel-item v-for="item in 3" :key="item">

                    </el-carousel-item>
                </el-carousel>
                <el-row :gutter="20" class="blank">
                    <el-col :offset="4" :span="4" class="show"><i class="animated fadeInUp czs-rocket-l rkt"></i>行业前沿
                    </el-col>
                    <el-col :span="4" class="show"><i class="animated fadeInDown czs-diamond-l dmd"></i>专业权威</el-col>
                    <el-col :span="4" class="show"><i class="animated fadeInUp czs-shield-l sld"></i>安全可靠</el-col>
                    <el-col :span="4" class="show"><i class="animated fadeInDown czs-microchip cpu"></i>处理高效</el-col>
                </el-row>
                <!-- 资讯模块 -->
                <el-card class="blank">
                    <el-row :gutter="20" class="info">
                        <el-col :offset="3" :span="10">
                            <p class="ctr-title">资讯速递</p>
                            <div class="line"></div>
                            <el-tabs v-model="activeName" @tab-click="handleClick">
                                <el-tab-pane label="焦点要闻" name="first">
                                    <ul>
                                        <li><a href=#>对接 | 1760万！“好专家”精准对接模式服务“中国创新挑战赛”成绩喜人</a></li>
                                        <li><a href=#>评价 | “甲醇合成聚甲氧基二甲醚成套技术及5万吨/年工业示范”项目通过科技成果评价</a></li>
                                        <li><a href="#">国家科学技术奖励工作办公室关于做好“国家科技奖励成果转化项目库”征集获奖项目入库的通知</a></li>
                                        <li><a href="#">未来大有可为——ACCSI2019近红外光谱发展论坛在青岛召开</a></li>
                                        <li><a href="#">ACCSI 2019公布2018科学仪器行业优秀新产品获奖名单</a></li>
                                    </ul>
                                </el-tab-pane>
                                <el-tab-pane label="热门专题" name="second">
                                    <ol>
                                        <div class="three-inL">
                                            <li><a href="#" title="生物制药分析、表征与质量控制"><img
                                                        src="../assets/pic/column-1.jpg">
                                                    <p>生物制药分析、表征与质</p>
                                                </a></li>
                                            <li><a href="#" title="第22届全国色谱会"><img
                                                        src="../assets/pic/column-2.jpg">
                                                    <p>第22届全国色谱会</p>
                                                </a></li>
                                            <li><a href="#" title="ACCSI2019现场直击"><img
                                                        src="../assets/pic/column-3.jpg">
                                                    <p>ACCSI2019现场直击</p>
                                                </a></li>
                                        </div>
                                        <div class="three-inL">
                                            <li><a href="#" title="IE expo 2019第二十届中国环博会"><img
                                                        src="../assets/pic/column-4.jpg">
                                                    <p>IE expo 2019第二十届中</p>
                                                </a></li>
                                            <li><a href="#" title="CIEPEC2019"><img
                                                        src="../assets/pic/column-5.jpg">
                                                    <p>CIEPEC2019</p>
                                                </a></li>
                                            <li><a href="#" title="2018全球上市仪器公司业绩一览"><img
                                                        src="../assets/pic/column-6.jpg">
                                                    <p>2018全球上市仪器公司业</p>
                                                </a></li>
                                        </div>
                                    </ol>
                                </el-tab-pane>
                                <el-tab-pane label="人物专访" name="third">
                                    <ul>
                                        <li><a href=#>访东京肾脏研究所所长山中宣昭、鸟取大学医学部冈田晋一、稻贺SUMIRE</a></li>
                                        <li><a href=#>应用越来越广泛的热分析联用技术——访中国科学技术大学理化科学实验中心副主任丁延伟</a></li>
                                        <li><a href="#">伏脉材料星罗盘 做好康塔“放牧人” ——访奥地利安东帕（上海）商贸有限公司董事总经理王德滨</a></li>
                                        <li><a href="#">发酵产业与国民经济息息相关——访华东理工大学生物工程学院庄英萍教授、郭美锦教授</a></li>
                                        <li><a href="#">无惧风雨 执着进取——伍丰仪器成立二十周年之际访创始人马明远</a></li>
                                    </ul>
                                </el-tab-pane>
                                <el-tab-pane label="市场动向" name="fourth">
                                    <ul>
                                        <li><a href=#>预算360万，清华大学采购全光谱流式细胞分析仪开启招标</a></li>
                                        <li><a href=#>国合通测欲采购ICP-OES和ICP-MS各一台</a></li>
                                        <li><a href="#">中国环境监测总站征集9项监测数据管理/审核项目承担单位</a></li>
                                        <li><a href="#">海克斯康与爱立信联合研发自主连接工厂解决方案</a></li>
                                        <li><a href="#">欧波同与CSIRO联合研发矿物分析系统即将全面上市</a></li>
                                    </ul>
                                </el-tab-pane>
                            </el-tabs>
                        </el-col>
                        <el-col class="rank" :span="8">
                            <p class="ctr-title">热门排行</p>
                            <div class="line"></div>
                            <ol>
                                <li><a href="#">宠物食品中粗蛋白检测产品配置单(定氮仪)</a><i class="star el-icon-star-on"></i><i
                                        class="star el-icon-star-on"></i><i class="star el-icon-star-on"></i></li>
                                <li><a href="#">车内空气中苯系物检测产品配置单(气质联用仪)</a><i class="star el-icon-star-on"></i><i
                                        class="star el-icon-star-on"></i></li>
                                <li><a href="#">茶中茶浓度检测产品配置单(折光仪)</a><i class="star el-icon-star-on"></i></li>
                                <li><a href="#">环境空气中高湿度条件下采集和同时分析 PAMS 臭氧前体物(热解吸仪)</a></li>
                                <li><a href="#">含有农药的水标样中氨基甲酸酯检测产品配置单(柱后衍生装置)</a></li>
                            </ol>
                        </el-col>
                    </el-row>
                </el-card>
                <!-- 商品模块 -->
                <el-card>
                    <el-row class="module">
                        <p class="ctr-title">商品速览</p>
                        <div class="line"></div>
                        <el-col :span="4" :offset="4" class="col-w">
                            <img class="left-banner" src="../assets/pic/banner-1.png">
                            <p class="word">科技 生活<br>一触即发</p>
                            <!-- <a class="jump" href="#">查看更多></a> -->
                            <router-link to="commodity" class="jump">查看更多></router-link>
                        </el-col>
                        <el-col :span="4">
                            <div class="col-s">
                                <a href="#">
                                    <span class="band">宠物食品中粗蛋白检测产品配置单(定氮仪)</span>
                                    <img src="../assets/pic/device-1.jpg">
                                </a>
                            </div>
                            <div class="col-s">
                                <a href="#">
                                    <span class="band">车内空气中苯系物检测产品配置单(气质联用仪)</span>
                                    <img src="../assets/pic/device-2.jpg">
                                </a>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="col-s">
                                <a href="#">
                                    <span class="band">生物制药中研发与分析检测产品配置单(ICP-AES)</span>
                                    <img src="../assets/pic/device-3.jpg">
                                </a>
                            </div>
                            <div class="col-s">
                                <a href="#">
                                    <span class="band">茶中茶浓度检测产品配置单(折光仪)</span>
                                    <img src="../assets/pic/device-4.jpg">
                                </a>
                            </div>
                        </el-col>
                        <el-col :span="4" class="col-s">
                            <div class="col-s">
                                <a href="#">
                                    <span class="band">含有农药的水标样中氨基甲酸酯检测产品配置单(柱后衍生装置)</span>
                                    <img src="../assets/pic/device-5.jpg">
                                </a>
                            </div>
                            <div class="col-s">
                                <a href="#">
                                    <span class="band">环境空气中高湿度条件下采集和同时分析 PAMS 臭氧前体物(热解吸仪)</span>
                                    <img src="../assets/pic/device-6.jpg">
                                </a>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-main>
    </div>
</template>
<script>
export default {
    name:'index',
    data(){
        return {
            search:'',
            activeName:'second'
        }
    },
    methods:{
        handleClick(tab, event) {
                console.log(tab, event);
            }
    }
}
</script>


<style>
.el-carousel__item:nth-child(n) {
            background-image: url('https://images.unsplash.com/photo-1500883004191-41545391b020?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');
        }

        .el-carousel__item:nth-child(2n) {
            background-image: url('https://images.unsplash.com/photo-1555649650-8b216b38da0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80');
        }

        .el-carousel__item:nth-child(3n) {
            background-image: url('https://images.unsplash.com/reserve/TxbDzeAhRmCwa6DDrbOQ_kazan-big.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
        }

        .el-carousel__mask {
            opacity: 0;
        }

        .show {
            text-align: center;
            font-size: 18px;
            color: #333;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            letter-spacing: 10px;
        }

        .show i {
            font-size: 64px;
            display: block;
            margin-bottom: 10px;
        }

        .rkt {
            color: #FF5722;
        }

        .dmd {
            color: #2196F3;
        }

        .sld {
            color: green;
        }

        .cpu {
            color: #303133;
        }

        .info {
            height: 500px;
        }

        .info ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        .info li {
            border-bottom: 1px solid #ccc;
            padding: 8px 0;
            font-size: 14px;
        }

        .rank ol {
            margin-top: 62px;
            border-top: 2px solid #E4E7ED;
        }

        .rank ol>li {
            margin-top: 15px;
        }

        .info a {
            text-decoration: none;
            letter-spacing: 1px;
        }

        .info a:hover {
            text-decoration: underline;
        }

        .info a:visited {
            color: #333;
        }

        .three-inL li {
            width: 170px;
            float: left;
            text-align: center;
            margin-left: 5px;
            margin-bottom: 8px;
            display: inline;
            border: 0;
            font-size: 13px;
        }

        .star {
            color: gold;
            float: right;
        }

        .ctr-title {
            font-size: x-large;
            text-align: center;
            color: #333;
            letter-spacing: 2px;
        }

        .line {
            border-top: 2px solid #0ba1e4;
            margin: 30px auto 26px;
            width: 80px;
        }

        .col-w {
            overflow: hidden;
            position: relative;
            /* border: 1px solid black; */
            margin-right: 10px;
        }

        .word {
            text-align: center;
            position: absolute;
            top: 70px;
            width: 100%;
            color: #333;
            font-size: 30px;
            line-height: 40px;
            font-weight: bold;
        }

        .col-s {
            position: relative;
        }

        .dtl {
            background-color: #2196F3;
        }

        .module img {
            max-width: 100%;
            max-height: 100%;
        }

        .left-banner {
            transition: all 1s ease 0s;
        }

        .col-w:hover img {
            transform: scale(1.2);
        }

        .jump {
            border: 1px solid #333;
            display: block;
            width: 96px;
            height: 30px;
            line-height: 30px;
            color: #333;
            text-align: center;
            position: absolute;
            left: 50%;
            margin-left: -48px;
            top: 200px;
            text-decoration-line: none;
        }

        .jump:hover {
            text-decoration-line: underline;
        }

        .band {
            position: absolute;
            top: 2px;
            width: 100%;
            color: rgba(255, 255, 255, 0);
            font-size: 15px;
            text-align: center;
            letter-spacing: 1px;
        }

        .col-s a:hover .band {
            background-color: #8BC34A;
            ;
            color: #fff;
        }

        .col-s img {
            border: 3px solid #eee;
        }

</style>
