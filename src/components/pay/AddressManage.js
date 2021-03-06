require('styles/global.css');
require('styles/common.css');
require('styles/address.css');

import React from 'react';
import app from '../../lib/app';
import dataService from '../../common/dataService';
let noAddImage = require('../../images/noAdd.png');
import $ from 'webpack-zepto';
class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {addrData: []};

  }

  //获取用户地址信息
  getUserAddInfo(){
    var _this = this;
    app.needLogin(function (headers, url) {

      var param = {};
      dataService.getJSON(url, param,
        function (data) {
          _this.setState({addrData: data});
        }.bind(_this),
        function (err, xhr) {
        }.bind(_this),headers
      );
    },'/address/manage.do');

  }

  componentDidMount(){
    //app.connectWebViewJavascriptBridge(function(bridge) {bridge.callHandler('rightBarStyle', {'style': ''}, function (response) {})});
    // app.needLogin(function (headers, url) {
  	// 	$.ajax({
  	// 		url: url,
  	// 		dataType: 'json',
  	// 		headers: headers,
  	// 		success: init
  	// 	});
  	// }, '/address/manage.do');
    // function init(data){
    //   alert(data);
    // }
    this.getUserAddInfo();
    //document.title = '地址管理';
    $('title').html("地址管理");

  }

  render() {
    var addrList;
    if (this.state.addrData.address && this.state.addrData.address.length > 0) {
      addrList = this.state.addrData.address.map(function(address, index){
        return (
          <li className="mod-list-item" data-id="46">
            <a href={'/dist/index.html#/addressAdd?address='+address.id} className="mod-list-info mod-flex com-align-middle">
              <div className="address-info mod-flex-item">
                <div className="address-user">{address.username}</div>
                <div className="address-phone">{address.mobile}</div>
                <div className="address-address">{address.address}</div>
              </div>
              <i className="com-arrow-right mod-flex-item"></i>
            </a>
          </li>
        );
      });
    }else {
      addrList = <div style={{position:'fixed', top:'50%', left:'50%', margin: '-104px 0 0 -126px'}}><img src={noAddImage} width="252" alt="" /></div>
    }
    return (
      <div className="mod-page mod-header-show">
        <article className="mod-content address mod-footbar-show">
          <section className="address-manage">
            <ul className="address-list mod-list">
              {addrList}
            </ul>
          </section>
        </article>
        <div className="mod-footbar">
          <div className="submit-bar mod-flex com-align-middle">
            <div className="operate mod-flex-item" style={{maxWidth:'auto',backgroundColor:'#fff'}}>
              <a className="btn btn-info btn-large" href="/dist/index.html#/addressAdd">+新增收货地址</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
