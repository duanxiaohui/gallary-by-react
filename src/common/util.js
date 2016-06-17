import React from 'react';
import ReactDom from 'react-dom';
import { hashHistory } from 'react-router';
import moment from 'moment';
import global from  './global';
import dataService from  './dataService';
//import PCLogin from '../pc/components/login/Index';

class Util {

  /**
   * 转换时间24小时制，eg:20:30
   * @param {Date}
   * @return {String}
   */
  static formatTime(time){
    return moment(time).format('H:mm');
  }

/**
 * 解析时间，按东八区解析
 * @str {String|Number}
 * @return {Date}
 */
  static parseDate(str){
    if(!str){
      return new Date();
    }
    if(typeof str == 'number'){
      return new Date(str);
    }
    //东八区时间
    if(typeof str == 'string' && str.indexOf('+08') < 0){
      str = str + '+08:00';
    }
    return new Date(str);
  }

  /**
   * 将对象的属性转换为日期
   * @param {Object} 要转换的对象
   * @param {Array[String]} 属性数组
   * @return {Object}
   */
  static convertProp2Date(obj,props){
    props.forEach(function(item){
      obj[item] = Util.parseDate(obj[item]);
    })
    return obj;
  }

  /**
   * 计算课程状态
   * @param {Date} startTime 开始时间
   * @param {Date} endTime 结束时间
   * @param {Date} systemTime 远程服务器时间
   * @return {Int}  1-已结束，2-正在直播，3-尚未开始 4-异常
   */
  static calculateCourseStatus(startTime, endTime, remoteTime) {
    var returnVal = 4;
    try{
        if (remoteTime.getTime() > startTime.getTime() && remoteTime.getTime() < endTime.getTime()) {
          returnVal = 2;
        } else if (remoteTime.getTime() > endTime.getTime()) {
          returnVal = 1;
        } else if (remoteTime.getTime() < startTime.getTime()) {
          returnVal = 3;
        } else {
          returnVal = 4;
        }
    }catch(e){

    }

    return returnVal;
  }

  /**
   * 获取URL参数
   * @return {Object} {key:value}
   */
  static getURLParams() {
    function parseParams(str) {
      var rs = {};
      var i = str.indexOf('?')
      if (i >= 0) {
        str = str.substr(i + 1);
        var params = str.split('&');
        params.forEach(function (s) {
          var p = s.split('=');
          if (p.length >= 2) {
            rs[p[0]] = p[1];
          }
        });
      }
      return rs;
    }

    return Object.assign({}, parseParams(location.search), parseParams(location.hash));
  }
  /**
   * 设置URL参数
   * @param {Object} {key:value}
   * @return {String}
   */
  static toURLParams(param) {
    var rs = []
    for(var key in param){
      rs.push(key + '=' + encodeURIComponent(param[key]));
    }
    return rs.join('&');
  }
  /**
   * 判断当前是PC还是mobile环境
   */
  static isMobile(){
    return location.href.indexOf('mobile.html') > 0;
  }

    /**
     * 跳转到直播页面
     * @param {Object} id
     */
  static searchLiveLesson(id){
  	play(id,'LIVE');
  }

    /**
     * 跳转到录播页面
     * @param {Object} id
     */
  static searchVideoLesson(id){
  	play(id,'VIDEO');
	}

}

/**
   * 视频，直播跳转
   * @param {string} id 	视频课主键ID
   * @param {string} type 播放类型
   */
  function play(id,type){
    const LIVE_LESSON_URL = '/ow-war/pl/searchLiveLessonById.action';
    const VIDEO_LESSON_URL = '/ow-war/pl/searchVideoLessonById.action';
    const LIVE_PLAY_URL = '/ow-war/pl/gotoLivePage';
    const VIDEO_PLAY_URL = '/ow-war/pl/gotoVideoPage';
    // function requireAuthPC() {
    //   function onLoginSuccess(){
    //     $('#login_container').remove();
    //   }
    //   function onLoginCancel(){
    //     $('#login_container').remove();
    //   }
    //   $('<div id="login_container"/>').appendTo('body');
    //   ReactDom.render(<PCLogin params={{id:id,type:type}}
    //     onLoginSuccess={onLoginSuccess}
    //     onLoginCancel={onLoginCancel}/>,
    //     document.getElementById('login_container'));
    // }
    function requireAuthMobile() {
       hashHistory.push({ pathname: '#/login', query: { id: id,type:type} });
    }
    if(!global.hasLogin()){
      if(Util.isMobile()){
        requireAuthMobile();
      }else{
        requireAuthPC();
      }
      return;
    }
    var initParam = global.initParam;
    var url = "";
    if(type == "LIVE"){
        url = LIVE_LESSON_URL;
    }else if(type == "VIDEO"){
    	  url = VIDEO_LESSON_URL;
    }
    var searchObj = {
        id:id,
        deptId:initParam.deptId,
        firstProjId: initParam.firstProjId,
        validateType: initParam.validateType,
        validateCode: initParam.validateCode
    }
    if(Util.isMobile()){
      var url = '';
	    if(type == "LIVE"){
     	  	url = LIVE_PLAY_URL;
      }else if(type == "VIDEO"){
          url = VIDEO_PLAY_URL;
      }
      url += '?' + Util.toURLParams($.extend({ id:id },global.initParam));
      console.log(url);
      window.open(url);
      return;
    }else{
      dataService.getJSON(url,searchObj,
        function(data) {
        	var playUrl = getPlayUrl(data,type);
          console.log(playUrl);
					window.open(playUrl);
        }.bind(this),
        function(err, xhr) {
          alert('请求视频失败，请重试');
        }
     );
    }

    function getPlayUrl(data,type){
    	if(type == "LIVE"){
     	  	return data.liveUrl;
      }else if(type == "VIDEO"){
	     		if(data.videoProvider=='youku'){
	     			  return "http://player.youku.com/embed/"+data.videoId;
	     		}else{
	     				return data.videoUrl;
	     		}
      }
    }
  }



export default Util;
