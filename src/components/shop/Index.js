require('styles/global.css');
require('styles/common.css');
require('styles/detail.css');
require('styles/swiper.min.css');

import React from 'react';
//import Swiper from '../../lib/swiper.min';

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  componentDidMount(){

  }
  render() {
    return (
      <div className="mod-page" id="tmpl_content">
        <section className="mod-slider swiper-container">
          <ul className="mod-slider-list swiper-wrapper">
            <li className="list-item swiper-slide swiper-slide-active" style={{'transitionProperty': 'transform', 'minHeight': '250px', 'transitionTimingFunction': 'cubic-bezier(0, 0, 0.25, 1)', 'transitionDuration': '300ms', 'transform': 'translate3d(0px, 0px, 0px)', 'width': '400px'}}>
              <a href="javascript:;">
                <img className="lazy" style={{'transition': 'all 0ms ease', 'transform': 'translate3d(0px, 0px, 0px)'}} data-original="http://img.putaoputao.cn/pimg/201605/4aeaf50ec7320b05805558da05e46bf1.jpg" />
                <i className="mod-loading"></i>
              </a>
            </li>

          </ul>
          <div className="mod-slider-index swiper-pagination"></div>
        </section>
      	<article className="mod-content detail mod-footbar-show">
      		<section className="mod-column product">
      			<div className="product-content">
      				<h1 className="product-title">首席法兰西香槟</h1>
      				<p className="product-ds">Champagne Bollinger Special Cuvee</p>
      				<div className="product-meta">
      					<b className="product-sale">￥598</b>
      					<label className="tag-border">不支持退换货</label>
      					<label className="tag-favrite-sm">5</label>
      				</div>
      			</div>
      			<ul className="product-option">
      				<li><b>产地：</b>香槟</li>
      				<li><b>年份：</b>N/V</li>
      				<li><b>容量：</b>750ml</li>
      				<li><b>葡萄品种：</b>黑皮诺 霞多丽 莫尼耶皮诺</li>
      				<li><b>颜色：</b>淡淡的金黄色</li>
      				<li><b>香气：</b>梨，面包，和烤榛子的香气</li>
      				<li><b>口感：</b>入口饱满而圆润，酒体醇厚复杂，酸度清新，气泡细腻，富有结构感</li>
      				<li><b>酒庄：</b>首席法兰西香槟酒庄（Bollinger）</li>
      			</ul>
      			<div className="other">
              <div className="product-column institution-score">
        				<div className="column-head">
        					<h3 className="column-title"><b>机构评分</b></h3>
        					<p className="column-ds">Rating agencies</p>
        				</div>
        				<div className="column-body">
        					<div className="institution-item">
        						<i className="icon icon-mark"><img src="http://m.putaoputao.cn/images/internation.png" alt=""/></i>
        						<span className="score-value ">WA 评分：91</span>
        					</div>
        					<div className="institution-item">
        						<i className="icon icon-mark"><img src="http://m.putaoputao.cn/images/internation.png" alt=""/></i>
        						<span className="score-value ">JR 评分：17</span>
        					</div>
        					<div className="institution-item">
        						<i className="icon icon-mark"><img src="http://m.putaoputao.cn/images/internation.png" alt=""/></i>
        						<span className="score-value ">Decanter 评分：16.3</span>
        					</div>
        				</div>
        			</div>
              <div className="product-column expert-score">
      					<div className="column-head">
      						<h3 className="column-title"><b>达人评价</b></h3>
      						<p className="column-ds">Score of people</p>
      					</div>
      					<div className="column-body">
      						<div className="expert-item">
      							<div className="expert-info">
      								<img src="http://putaoputao.cn/pimg/201606/8cd48df14c3b9923a0ba7510129def57.jpg" alt="" className="expert-avatar" />
      								<h4 className="expert-name">吴坦</h4>
      								<div className="expert-position">中国盲品大赛技术负责人</div>
      								<div className="expert-value"><i className="icon icon-goblet"></i>评分：分</div>
      							</div>
      						  <cite className="expert-estimation">“英国皇室青睐的“御用香槟”。”</cite>
      						</div>
      					</div>
      				</div>
              <div className="product-column story">
      					<div className="column-head">
      						<h3 className="column-title"><b></b></h3>
      						<p className="column-ds"></p>
      					</div>
      					<div className="column-body">
      						<div className="mod-image"><img src="http://putaoputao.cn/pimg/201605/6b7f8e1111f841f5cff5a21751412749.jpg" alt=""/></div>
      						<div className="mod-image"><img src="http://putaoputao.cn/pimg/201605/b893984ada0534e6f07b99b12df6faf6.jpg" alt=""/></div>
      						<div className="mod-text">
      							<h3>英国皇室青睐的“御用香槟”</h3> 首席法兰西香槟 (Bollinger) 是法国香槟地区最优秀的生产商之一，1829年酒庄建成，1835年即出口第一批香槟酒至英国，是早先的为数不多的进入英国港口的香槟之一。1961年, 首席法兰西香槟公司的创始人 Lily Bollinger (莉丽. 鲍兰哲) 夫人在描述她饮用此酒的美妙感受时曾这样说过: “快乐时, 它使我神清气爽; 悲伤时, 它使我忘记忧伤, 孤独时, 它与我相伴; 友人相聚时, 它是我款待佳宾最好的饮品; 不饿时, 我会小酌一杯, 饥饿时, 我会大口的喝它。平时,
      							我绝不碰它, 除非, 我渴了……。” 年轻时代的成功奠定了Bollinger的骄傲传统。历经维多利亚女王、威尔士王子、爱德华七世、乔治五世、玛丽王后、乔治六世和王太后7位大不列颠君主，它一直独占英国皇家御用香槟的“封号”。
      							<h3>出镜率超高的香槟</h3> 几年前风靡英国的电视连续剧《绝对精彩》(Absolutely Fabulous)把Edina Monsoon和Patsy Stone两个40岁时髦女人的时髦生活方式带到了全世界，其中之一就是喝Bollinger。还有詹姆斯·邦德，不仅搞情报和追美女玩到出神入化，对香槟的口味也同样“高竿”。他从1973年开始喝Bollinger，一发难收。他在埃菲尔铁塔的旋转餐厅上喝Bollinger1975；他驾车逃命惊魂甫定，变魔术般变出一瓶Grande Annee 1988且借机向美丽的心理医生献吻；他“纵横天下”(The
      							world is not enough)时曾与大美女苏菲·玛索共饮Bollinger1990…… 黛安娜王妃车祸前与法耶德在巴黎里兹饭店(Ritz)用餐，Bollinger陪伴他们最后一晚。次日英伦玫瑰香消玉殒，成就了Bollinger所见证的最凄美之夜。当年查尔斯王子迎娶佳人，同样是Bollinger老酒斟满宫廷婚宴的郁金香杯。追溯其家事，这支香槟见证了近200年间英国王室贵族阶级的风云流变。
      						</div>
      					</div>
      				</div>
              <div className="product-column skill">
      					<div className="column-head">
      						<h3 className="column-title"><b>如何喝酒</b></h3>
      						<p className="column-ds">How to Drink</p>
      					</div>
      					<div className="column-body">
      						<div className="mod-text">类型：香槟</div>
      						<div className="mod-text">级别：AOC/法定产区</div>
      						<div className="mod-text">酒精度：12%</div>
      						<div className="mod-text">
      							<h3>贮藏建议</h3></div>
      						<div className="mod-text">7-18℃，存放至阴凉通风处，避光，卧放。</div>
      						<div className="mod-text">
      							<h3>品酒建议</h3></div>
      						<div className="mod-text">[听其声]开瓶时微弱的“噗”声犹如少女的轻吻般优雅，入杯后耳朵靠近酒杯倾听气泡爆破于空气中清脆的声音。</div>
      						<div className="mod-text">[观其色]瘦长的郁金香杯适合所有的起泡酒，陈年的年份香槟更适合白葡萄酒杯。不要晃动酒杯，观察气泡从杯底缓缓上升的优美舞姿。气泡的大小与上升的速度决定了一款酒的优劣。</div>
      						<div className="mod-text">[闻其香]喝起泡酒不需要摇动。闻酒香时，可以将酒杯凑到鼻下，细细品味，随着时间的变化，可以体会到各种香味。香槟更多酵母中产生的面包及烘烤香，意大利和西班牙的气泡酒更多的清新果味。</div>
      						<div className="mod-text">[品其味]拾杯清酌，感受气泡在口中爆裂的感觉，味蕾因为气泡的作用变得更加敏感，适合在餐前唤醒味蕾。</div>
      					</div>
      				</div>
      				<div className="product-column skill">
      					<div className="column-head">
      						<h3 className="column-title"><b>配餐建议</b></h3>
      						<p className="column-ds">Serving suggestion</p>
      					</div>
      					<div className="column-body">
      						<div className="mod-text">不适合搭配浓郁咸味的芝士（Stilton） 、巧克力、芦笋、鳗鱼、含醋的食物。</div>
      					</div>
      				</div>
      				<div className="product-column reminder">
      					<div className="column-head">
      						<h3 className="column-title"><b>温馨提示</b></h3>
      						<p className="column-ds">kindly reminder</p>
      					</div>
      					<div className="column-body">
      						<ul className="mod-list">
      							<li className="mod-list-item">不支持退款</li>
      							<li className="mod-list-item">如需开具发票，请在订单确认时填写清楚</li>
      							<li className="mod-list-item">统一顺丰快递配送，如有特殊需求请在备注中填写</li>
      						</ul>
      					</div>
      				</div>
              <div className="product-column recommend guessyoulike">
      					<div className="column-head">
      						<h3 className="column-title"><b>猜你喜欢</b></h3>
      						<p className="column-ds">Guess you like</p>
      					</div>
      					<div className="column-body">
      						<ul className="mod-list">
      							<li className="mod-list-item">
      								<div className="product-image">
      									<a data-href="/action/shop/product.html?id=208" className="mod-list-info product-info"> <img src="http://img.putaoputao.cn/pimg/201605/f9fb1f1c7d00b8e445dd19fe9ca47b91.jpg" onerror="this.src='images/temp/l1.jpg';this.onerror=null" alt=""/> </a>
      								</div>
      								<a data-href="/action/shop/product.html?id=208" className="mod-list-info product-info">
      									<h3 className="product-title">忽必烈酒庄埃米塔日小教堂干红葡萄酒 1996</h3>
      									<p className="product-ds">Paul Jaboulet Aine La Chapelle Hermitage 1996</p>
      									<div className="product-meta"> <b className="product-sale">￥1288</b> </div>
      								</a>
      							</li>
      							<li className="mod-list-item">
      								<div className="product-image">
      									<a data-href="/action/shop/product.html?id=72" className="mod-list-info product-info"> <img src="http://img.putaoputao.cn/pimg/201605/8876f41161d0ce6b1cd92bdf2ddf7bc7.jpg" onerror="this.src='images/temp/l1.jpg';this.onerror=null" alt=""/> </a>
      								</div>
      								<a data-href="/action/shop/product.html?id=72" className="mod-list-info product-info">
      									<h3 className="product-title">阿黛儿干白葡萄酒 2014</h3>
      									<p className="product-ds">Abadal Picapoll 2014</p>
      									<div className="product-meta"> <b className="product-sale">￥168</b> </div>
      								</a>
      							</li>
      							<li className="mod-list-item">
      								<div className="product-image">
      									<a data-href="/action/shop/product.html?id=42" className="mod-list-info product-info"> <img src="http://img.putaoputao.cn/pimg/201605/931ceee648de27d8a423a1ba39f2c720.jpg" onerror="this.src='images/temp/l1.jpg';this.onerror=null" alt=""/> </a>
      								</div>
      								<a data-href="/action/shop/product.html?id=42" className="mod-list-info product-info">
      									<h3 className="product-title">卡玛萨克庄园干红葡萄酒 2012</h3>
      									<p className="product-ds">Chateau Camarsac 2012</p>
      									<div className="product-meta"> <b className="product-sale">￥178</b> </div>
      								</a>
      							</li>
      							<li className="mod-list-item">
      								<div className="product-image">
      									<a data-href="/action/shop/product.html?id=206" className="mod-list-info product-info"> <img src="http://img.putaoputao.cn/pimg/201605/8bdbe03cdeeb6333a144c4a2c35ce6f8.jpg" onerror="this.src='images/temp/l1.jpg';this.onerror=null" alt=""/> </a>
      								</div>
      								<a data-href="/action/shop/product.html?id=206" className="mod-list-info product-info">
      									<h3 className="product-title">阿黛儿梅洛干红葡萄酒2010</h3>
      									<p className="product-ds">Abadal 5 Merlot 2010</p>
      									<div className="product-meta"> <b className="product-sale">￥218</b> </div>
      								</a>
      							</li>
                    <li className="mod-list-item">
      								<div className="product-image">
      									<a data-href="/action/shop/product.html?id=89" className="mod-list-info product-info"> <img src="http://img.putaoputao.cn/pimg/201605/34d964262c78f483e3b97d859f489178.jpg" onerror="this.src='images/temp/l1.jpg';this.onerror=null" alt=""/> </a>
      								</div>
      								<a data-href="/action/shop/product.html?id=89" className="mod-list-info product-info">
      									<h3 className="product-title">梯丽丝酒庄长相思干白葡萄酒 2014</h3>
      									<p className="product-ds">THE Sauvignon Blanc 2014</p>
      									<div className="product-meta"> <b className="product-sale">￥178</b> </div>
      								</a>
      							</li>
      							<li className="mod-list-item">
      								<div className="product-image">
      									<a data-href="/action/shop/product.html?id=156" className="mod-list-info product-info"> <img src="http://img.putaoputao.cn/pimg/201605/b8b9e4b660c1b6ab0dcfad1eddbaabe5.jpg" onerror="this.src='images/temp/l1.jpg';this.onerror=null" alt=""/> </a>
      								</div>
      								<a data-href="/action/shop/product.html?id=156" className="mod-list-info product-info">
      									<h3 className="product-title">云鹤庄园雷司令西奥半干白葡萄酒 2014</h3>
      									<p className="product-ds">Domaine Weinbach Riesling Cuvee Theo 2014</p>
      									<div className="product-meta"> <b className="product-sale">￥318</b> </div>
      								</a>
      							</li>
      							<li className="mod-list-item">
      								<div className="product-image">
      									<a data-href="/action/shop/product.html?id=199" className="mod-list-info product-info"> <img src="http://img.putaoputao.cn/pimg/201605/0ad744b59d39b16bfd7efd3a2d6e4cb7.jpg" onerror="this.src='images/temp/l1.jpg';this.onerror=null" alt=""/> </a>
      								</div>
      								<a data-href="/action/shop/product.html?id=199" className="mod-list-info product-info">
      									<h3 className="product-title">帝魄酒庄圣爱天堂园干红葡萄酒2014_375毫升</h3>
      									<p className="product-ds">Georges Duboeuf Saint Amour Domaine du Paradis 2014_375ml</p>
      									<div className="product-meta"> <b className="product-sale">￥88</b> </div>
      								</a>
      							</li>
      							<li className="mod-list-item">
      								<div className="product-image">
      									<a data-href="/action/shop/product.html?id=212" className="mod-list-info product-info"> <img src="http://img.putaoputao.cn/pimg/201605/2adb949e590b03be21c4ce53c3d00813.jpg" onerror="this.src='images/temp/l1.jpg';this.onerror=null" alt=""/> </a>
      								</div>
      								<a data-href="/action/shop/product.html?id=212" className="mod-list-info product-info">
      									<h3 className="product-title">柯兰庄园K派上博纳干红葡萄酒 2012</h3>
      									<p className="product-ds">Herve Kerlann Bourgogne Hautes Cotes de Beaune Cuvee K Rouge 2012</p>
      									<div className="product-meta"> <b className="product-sale">￥198</b> </div>
      								</a>
      							</li>
      						</ul>
      					</div>
      				</div>
            </div>
          </section>
        </article>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
