<template>
 <el-main>
                <!-- 展示页 -->
                <el-row class="good-sale" :gutter="40">
                    <el-col :offset="3" :span="7">
                        <div class="good-show">
                            <img src="../assets/pic/device-1.jpg">
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="name">海能杜马斯定氮仪D100</div>
                        <div class="decription">
                            杜马斯定氮仪D100，特点是环保、高效、简便，主要应用于车用尿素、谷物（粮食）、种子、肉、肉制品、动物饲料、乳制品、红酒、肥料和土壤中总氮的含量测定。
                        </div>
                        <div class="basic-info">
                            <ul>
                                <li><span class="tlt">价格</span><span class="ctx emphasize">30万</span></li>
                                <li><span class="tlt">型号</span><span class="ctx">D100</span></li>
                                <li><span class="tlt">销量</span><span class="ctx">450（台）</span></li>
                                <li><span class="tlt">类别</span><span class="ctx">化学分析仪器/元素分析仪</span></li>
                            </ul>
                        </div>

                        <div>
                            <el-button type="primary">加入购物车</el-button>
                            <el-button type="primary">收藏</el-button>
                        </div>
                    </el-col>
                    <el-col :span="4" class="com-border">
                        <div class="com-block">
                            生产机构
                        </div>
                        <div class="com-info">
                            <img src="../assets/pic/comany-1.jpg">
                            <h5>海能仪器股份有限公司</h5>
                            <ul>
                                <li><span class="tlt">所在地&nbsp;&nbsp;&nbsp;</span><span class="ctx">山东济南</span></li>
                                <li><span class="tlt">营业执照</span><span class="ctx">已审核</span></li>
                                <li><span class="tlt">信用积分</span><span class="ctx">3150</span></li>
                                <li><span class="tlt">联系电话</span><span class="ctx">400-582-670</span></li>
                            </ul>
                            <el-button type="primary">留言咨询</el-button>
                        </div>
                    </el-col>

                </el-row>
                <!-- 信息页 -->
                <el-tabs type="border-card" class="part4">
                    <el-tab-pane label="产品介绍" class="partA">
                        <video width="480" height="370" autoplay="autoplay" controls="">
                            <source src="http://dumas.hanon.cc/D100%20Dumas.mp4" type="video/mp4">您的浏览器不支持 video
                            标签。</video>
                        <p>蛋白质是人和动物生存的六大营养素之一，是一切生命的物质基础，而氮元素是植物发育、生长的三大营养素之一，所以对蛋白质、氮元素的快速环保的定量分析就有迫切的市场需求。海能为了解决上述问题，根据杜马斯燃烧法研制开发了杜马斯定氮仪D100，特点是环保、高效、简便，主要应用于车用尿素、谷物（粮食）、种子、肉、肉制品、动物饲料、乳制品、红酒、肥料和土壤中总氮的含量测定。
                        </p>
                        <p>杜马斯定氮仪D100采用新型干燥除水装置、高灵敏度检测器、热丝防氧化及二氧化碳载气等设计，还具备气体流量及压力监测数据实时控制、远程控制和诊断、内置专家方法等功能。这些设计和功能保证了海能D100的快速、精确、经济、高效。
                        </p>
                        <img src="../assets/pic/info-1.png">
                        <h3>仪器功能与特点：</h3>
                        <h5>智能特性：</h5>
                        <ol>
                            <li>杜马斯定氮仪D100拥有自我错误诊断提示，能在自检过程中识别就绪、非就绪工作状态，若自检时发现实验条件不具备、状态不就绪等情况，会及时以报警的方式提示操作人员进行相应的操作，然后进行下一个状态的诊断。
                            </li>
                            <li>杜马斯定氮仪D100拥有定周期维护提醒，根据样品的特点、数量、氧气的消耗量等相关数据信息，进行耗材的使用情况分析判断，确定耗材的更换时间及周期，并及时的提醒操作者更换耗材。
                            </li>

                            <li>待机/唤醒等功能，杜马斯定氮仪开机预热需要一定的时间才能稳定工作，为了减少频繁的开关机造成的效率降低，增加了待机唤醒功能，在待机状态下仪器维持一个恒定的温度，当唤醒时能迅速恢复到工作状态。
                            </li>

                            <li>杜马斯定氮仪D100自动采集称量数据，无需人工输入，节约时间，避免人为错误；采集称量数据时具有可调节的大小的同步显示窗口，并有语音报数核验功能，让操作者可以在远离仪器的天平上，进行样品称量自动输入并能通过显示和声音的方式进行数据核验，仪器做样时可以同步进行下一批次的样品称量数据采集，不影响仪器样品正常实验过程。
                            </li>
                            <li>样品在位检测功能可以有效避免误操作，仪器自检过程中会初始化自动进样器，如果有样品在进样器中，当初始化到该样品位置时，仪器会自动停止初始化，提示工作人员取出样品，待样品取出后继续初始化，可以有效避免误进样带来的不便。
                            </li>

                        </ol>
                        <h5>安全特性：</h5>
                        <ol>
                            <li>具有超压隔离设计，确保使用者和仪器的安全；</li>
                            <li>燃烧炉具有安全低电压、超温报警断电设计，操作更安全。</li>
                        </ol>
                        <h5>便捷特性：</h5>
                        <ol>
                            <li>软件具有漏气检查功能，方便操作者的耗材更换后的仪器检查</li>
                            <li>实时显示气体流量及压力监测数据，直观体现仪器的运行状态</li>
                            <li>内置专家方法库，也可以自行编辑保存用户方法</li>
                            <li>可以对实验报告的格式、单位名称、单位标识（logo）等自定义功能。</li>
                        </ol>
                        <h5>节能特性：</h5>
                        <ol>
                            <li>使用二氧化碳做载气，节约实验成本；</li>
                            <li>低温干燥的设计方式可以有效的除水，降低干燥剂的使用量，节约实验成本。</li>

                        </ol>
                    </el-tab-pane>
                    <el-tab-pane label="规格参数">
                        <el-table :data="parameter" stripe style="width: 100%" :border=true :show-header=false>
                            <el-table-column prop="para_tlt" width="180">
                            </el-table-column>
                            <el-table-column prop="para_info">
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="用户评论" class="partC">
                        <div class="user-rate">
                        <h3>用户评分</h3>
                        <el-rate v-model="star" disabled show-score text-color="#ff9900" score-template="{value}">
                        </el-rate>
                    </div>
                        <el-table :data="comment" stripe>
                            <el-table-column prop="user" label="用户" :width="100">
                            </el-table-column>
                            <el-table-column prop="text" label="评论内容" >
                            </el-table-column>
                            <el-table-column prop="date" label="评论时间" :width="180">
                            </el-table-column>
                        </el-table>

                    </el-tab-pane>
                    <el-tab-pane label="相似推荐" class="partD">
                        <h3>常用搭配</h3>
                        <ul>
                            <li>
                                <a href="#"><img src="../assets/pic/rec-1-1.jpg">
                                    <p>TTL-DCII型多功能氮吹仪</p>
                                </a>
                            </li>
                            <li>
                                <a href="#"><img src="../assets/pic/rec-1-2.jpg">
                                    <p>ORACLE通用快速脂肪分析仪</p>
                                </a>
                            </li>
                            <li>
                                <a href="#"><img src="../assets/pic/rec-1-3.jpg">
                                    <p>美国EE 土壤有机物萃取仪</p>
                                </a>
                            </li>
                            <li>
                                <a href="#"><img src="../assets/pic/rec-1-4.jpg">
                                    <p>多功能中药提取罐</p>
                                </a>
                            </li>
                        </ul>
                        <h3>查看此产品的用户也在看</h3>
                        <ul>
                            <li>
                                <a href="#"><img src="../assets/pic/sim-1-1.jpg">
                                    <p>TK12赶酸器</p>
                                </a>
                            </li>
                            <li>
                                <a href="#"><img src="../assets/pic/sim-1-2.jpg">
                                    <p>海能仪器 K9860 全自动凯氏定氮仪</p>
                                </a>
                            </li>
                            <li>
                                <a href="#"><img src="../assets/pic/sim-1-3.jpg">
                                    <p>T910全自动脂肪酸值测定仪</p>
                                </a>
                            </li>
                            <li>
                                <a href="#"><img src="../assets/pic/sim-1-4.jpg">
                                    <p>FlavourSpec@风味分析仪</p>
                                </a>
                            </li>
                        </ul>
                    </el-tab-pane>
                </el-tabs>
            </el-main>
</template>
<script>
export default {
    name:'detail',
    data(){
        return{
            star: 4.7,
                comment: [{
                    user: '王小明',
                    text: '功能非常齐全，上手也十分迅速，客服解答问题非常耐心，好评！',
                    date: '2018-01-05'
                }],
                parameter: [{
                    para_tlt: '电源：',
                    para_info: 'AC 220 V±10% 50 Hz'

                }, {
                    para_tlt: '温度：',
                    para_info: '操作环境 5 ℃～30 ℃'
                }, {
                    para_tlt: '湿度：',
                    para_info: '不大于 85%'
                }, {
                    para_tlt: '分析时间：',
                    para_info: '（3～5）分钟/个；'
                }, {
                    para_tlt: '称量精度：',
                    para_info: '≤0.1 mg；'
                }, {
                    para_tlt: '检测范围：',
                    para_info: '0.1～500 mg 氮；'
                }, {
                    para_tlt: '重复误差：',
                    para_info: '≤0.5%（RSD）150 ㎎的 10% 氮含量样品时；'
                }, {
                    para_tlt: '检 测 限：',
                    para_info: '0.01 mg 氮；'
                }, {
                    para_tlt: '样品重量：',
                    para_info: '固体≤1 g，液体≤1 mL；'
                }, {
                    para_tlt: '额定功率：',
                    para_info: '2000W'
                }, {
                    para_tlt: '尺 寸：',
                    para_info: '735mm×560mm×560mm（长×宽×高）'
                }, {
                    para_tlt: '净 重：',
                    para_info: '80Kg'
                }]
        }
    }
}
</script>

<style>
.good-sale {
  margin: 100px;
}

.good-show img {
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.good-sale .name {
  line-height: 1.25em;
  font-family: moderat, sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #333;
  height: 40px;
}

.good-sale ul {
  /* color: #ccc; */
  padding: 0;
}

.good-sale li {
  color: #000;
  margin: 20px 0;
  font-size: 14px;
  /* display: initial;
            white-space: nowrap;
            width: 50%; */
  list-style: none;
  /* float: left;
            height: 30px; */
}

.good-sale .tlt {
  margin-right: 35px;
  color: #aaa;
}

.basic-info {
  margin: 30px 0 60px;
}

.basic-info .emphasize {
  font-size: 20px;
}

.company {
  width: 100%;
  height: 300px;
  background-color: #ccc;
}

.decription {
  font-size: 15px;
  line-height: 180%;
  color: #fb8341;
  margin: 10px 0;
}

.com-block {
  background: #41337a;
  height: 70px;
  color: #fff;
  line-height: 70px;
  font-size: 20px;
  text-align: center;
}

.com-border {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.com-info h5 {
  text-align: center;
  margin: 10px 0;
}

/* 下半部分信息页 */
.part4 {
  margin: 0 165px;
}

.partA video,
.partA img {
  display: block;
  margin: auto;
}

.partA p {
  text-indent: 30px;
}

.partD li {
  display: inline-block;
  width: 20%;
  margin: 0 20px;
}

.partD img {
  width: 100%;
}

.partD a {
  font-size: 14px;
  color: #333;
  text-decoration: none;
}

.partD a:hover {
  text-decoration: underline;
}
.user-rate {
  border-bottom: 2px solid #673ab7;
  padding-bottom: 20px;
}
.user-rate * {
  text-align: center;
}
</style>
