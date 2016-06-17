require('styles/global.css');
require('styles/common.css');
require('styles/order.css');
require('styles/baseaddr.css');
require('styles/address2.css');
require('styles/header.css');
import React from 'react';
import app from '../../lib/app';
import dataService from '../../common/dataService';
import MyInput from '../public/Input';
import MySelect from '../public/Select';
 import $ from 'webpack-zepto';
class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: app.query('address'),
       "user_id":0,
       "province_id":1,
       "city_id":0,
       "town_id":0,
       "area_id":72,
       "address":"",
       "is_default":0,
       "username":"",
       "mobile":"",
       "zipcode":"",
       "ctime":0,
       "uptime":0,
       "status":0,
       "nameError": false,
       "mobileError":false,
       "zipcodeError":false,
       "canSubmit":true,
       "canDelete":true
    };


  }

  getAddressInfo(){
    var _this = this;
    app.needLogin(function (headers, url) {
      var param = {
        id: this.state.id
      };
      dataService.getJSON(url, param,
        function (data) {
          //this.setAddressForm(data.addr);
          if(data&&data.addr!=null&&typeof(data.addr)!='undefined'){
            var addr = data.addr;
            this.setState({
              "id": addr.id,
              "user_id":addr.user_id,
              "province_id":addr.province_id,
              "city_id":addr.city_id,
              "town_id":addr.town_id,
              "area_id":addr.area_id,
              "address":addr.address,
              "is_default":addr.is_default,
              "username":addr.username,
              "mobile":addr.mobile,
              "zipcode":addr.zipcode,
              "ctime":addr.ctime,
              "uptime":addr.uptime,
              "status":addr.status,
              "nameError": true,
              "mobileError":true,
              "zipcodeError":true
            });
            this.getProvinceInfo();
          }
        }.bind(this),
        function (err, xhr) {
        }.bind(this),headers
      );
    }.bind(this),'/address/toModify.do');
  }


  handleUserProvSelect(provSelectedValue) {
    this.setState({
      province_id: provSelectedValue,
      city_id: provSelectedValue,
      area_id: 0
    });
    this.getCityInfo();

  }
  handleUserCitySelect(citySelectedValue) {
    this.setState({
      city_id: citySelectedValue,
      area_id: 0
    });
    this.getAreaInfo()
  }
  handleUserDistSelect(distSelectedValue) {
    this.setState({
      area_id: distSelectedValue
    });
  }
  //查询province信息
  getProvinceInfo(){
    var _this = this;
    app.needLogin(function (headers, url) {
      var param = {idProvince: 0};
      dataService.getJSON(url, param,
        function (data) {
          _this.setState({provinceData: data});
            this.getCityInfo();
        }.bind(_this),
        function (err, xhr) {
        }.bind(_this),headers
      );
    },'/address/getAreas.do');
  }
  //查询city信息
  getCityInfo(){
    var _this = this;
    var idprovince = _this.state.province_id;
    app.needLogin(function (headers, url) {
      var param = {idProvince: idprovince};
      dataService.getJSON(url, param,
        function (data) {
          if(data&&data.length>0){
            _this.setState({cityData: data, city_id: data[0].id});
            this.getAreaInfo()
          }
        }.bind(_this),
        function (err, xhr) {
        }.bind(this),headers
      );
    },'/address/getAreas.do');
  }
  //查询area信息
  getAreaInfo(idCity){
    var _this = this;
    var idcity = _this.state.city_id
    app.needLogin(function (headers, url) {
      var param = {idCity: idcity};
      dataService.getJSON(url, param,
        function (data) {
          if(data&&data.length>0){
            _this.setState({areaData: data, area_id: data[0].id});
          }
        }.bind(_this),
        function (err, xhr) {
        }.bind(_this),headers
      );
    },'/address/getAreas.do');

  }

  submitForm(){
    this.setState({"canSubmit": false});
    if(this.state.nameError&&this.state.mobileError&&this.state.zipcodeError&&this.refs.address_where.value!=''){
      if(!this.state.canSubmit){
        alert("保存中...");
        return false;
      }
      app.needLogin(function (headers, url) {
        var param = {
        		"id": this.state.id,
        		"username": this.state.username,
        		"mobile": this.state.mobile,
        		"zipcode": this.state.zipcode,
        		"province_id": $("#province_id").val(),
        		"city_id": $("#city_id").val(),
        		"area_id": $("#area_id").val(),
        		"address": this.state.address,
            "is_default": this.state.is_default,
        	};
        dataService.getJSON(url, param,
          function (data) {
            this.setState({"canSubmit": true});
            window.history.go(-1);
          }.bind(this),
          function (err, xhr) {
            this.setState({"canSubmit": true});
          }.bind(this),headers
        );
      }.bind(this),'/address/save.do');
    }
  }
  deleteAddr(){
    this.setState({"canDelete": false});
      if(!this.state.canDelete){
        alert("删除中，请稍候...");
        return false;
      }
      app.needLogin(function (headers, url) {
        var param = {
        		"id": this.state.id
        	};
        dataService.getJSON(url, param,
          function (data) {
            this.setState({"canDelete": true});
            window.history.go(-1);
          }.bind(this),
          function (err, xhr) {
            this.setState({"canDelete": true});
          }.bind(this),headers
        );
      }.bind(this),'/address/delete.do');
  }
  componentDidMount(){
    if(this.state.id){
      this.getAddressInfo();
    }else {
      this.getProvinceInfo();
    }
    //document.title = '新建收货地址';
    $('title').html("新建收货地址");
  }
  usernameChange(username,error){
    this.setState({username: username,nameError:error});
  }
  mobileChange(mobile,error){
    this.setState({mobile: mobile,mobileError:error});
  }
  zipcodeChange(zipcode,error){
    this.setState({zipcode: zipcode,zipcodeError:error});
  }
  addressChange(event){
    this.setState({address: event.currentTarget.value});
  }
  isDefaultChange(event){
    this.setState({is_default: event.currentTarget.value==1?0:1});
  }
  render() {

    return(
      <div className="mod-page" id="tmpl_content">
          <div className="new-ct">
            <div className="new-addr">
              <div className="new-info-box">
                <div className="new-set-info">
                  <MyInput
                    placeholder="收货人姓名"
                    type="text"
                    name="username"
                    ref="address_name"
                    maxLength='25'
                    className="new-input"
                    isRequired="true"
                    inputChange={this.usernameChange.bind(this)}
                    value={this.state.username}
                    />
                  <MyInput
                    placeholder="手机号"
                    type="tel"
                    name="mobile"
                    ref="address_mobile"
                    maxLength='11'
                    className="new-input"
                    isRequired="true"
                    inputChange={this.mobileChange.bind(this)}
                    value={this.state.mobile}/>
                  <MyInput
                    placeholder="邮编（选填）"
                    type="tel"
                    name="zipcode"
                    ref="address_zip"
                    maxLength='6'
                    className="new-input"
                    isRequired="false"
                    inputChange={this.zipcodeChange.bind(this)}
                    value={this.state.zipcode}/>
                </div>
                <div className="new-ship-addr">
                  <MySelect name="province_id"
                    id="province_id"
                    className="new-select"
                    options={this.state.provinceData}
                    onUserSelect={this.handleUserProvSelect.bind(this)}
                    initSelectedValue={this.state.province_id}/>
                  <MySelect name="city_id"
                    className="new-select"
                    id="city_id"
                    options={this.state.cityData}
                    onUserSelect={this.handleUserCitySelect.bind(this)}
                    initSelectedValue={this.state.city_id}/>
                  <MySelect name="area_id"
                    id="area_id"
                    className="new-select"
                    options={this.state.areaData}
                    onUserSelect={this.handleUserDistSelect.bind(this)}
                    initSelectedValue={this.state.area_id}/>

                  <div className="new-mg-t10">
                    <span className="new-tbl-type new-mg-b10">
                      <span className="new-tbl-cell">
                        <div className="new-post_wr">
                          <textarea
                            placeholder="详细地址"
                            name="address"
                            ref="address_where"
                            rows={5}
                            cols={30}
                            className="new-textarea"
                            onChange={this.addressChange.bind(this)}
                            value={this.state.address}></textarea>
                        </div>
                        <span className="new-txt-err" id="where_error" />
                      </span>
                    </span>
                  </div>
                </div>
                <div>
                  <div className="form-item">
                    <label className="checkbox-group flip">
                      <input
                        ref="isDefault"
                        type="checkbox"
                        name="default"
                        checked={this.state.is_default==1}
                        value={this.state.is_default}
                        onChange={this.isDefaultChange.bind(this)}/>
                      <span className="indicator">设为默认地址</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
  href="javascript:;"
  className="operate"
  id="address_submit" onClick={this.submitForm.bind(this)}>保存</a>
          <a
  href="javascript:;"
  id="address_delete"
  className="new-abtn-type new-mg-t15" onClick={this.deleteAddr.bind(this)}>删除此地址</a>
        </div>
    );


  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
