import React from 'react';

class MyInput extends React.Component {

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  constructor(props) {
    super(props);
    this.state = {
      _value: this.props.value,
      _isRequired: this.props.isRequired
    };
  }
  changeValue(event) {
    //this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
    var value = event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value'];

    var error = this.validateInput(value, this.props.name);
    this.props.inputChange(value, error);
  }
  validateInput (value, nameType){
    var error = '';
    var value = value.trim();
    if(!value){ //没输入账号
      switch(nameType){
        case 'username':
          error = '收货人不能为空';
          break;
        case 'mobile':
          error = '手机号不能为空';
          break;
        default:
          break;
      }
    }else{                          //有输入
      switch(nameType){
        case 'name':
          error = '';
          break;
        case 'mobile':
          error = !/^1(\d){10}$/.test(value)
                ? '请输入正确的手机号' : '';
           break;
        case 'zipcode':
          error = !/^\d{6}$/gi.test(value)
               ? '邮编填写错误' : '';
          break;
        default:
         break;
      }
    }
    this.setState({error: error});
    return !error;
  }
  getValue () {
    return this.state._value;
  }

  render() {
    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    return (
      <span className="new-span-block new-mg-b10">
        <span className="new-input-span">
          <input
            placeholder={this.props.placeholder}
            type={this.props.type || 'text'}
            name={this.props.name}
            id={this.props.id}
            className={this.props.className}
            onChange={this.changeValue.bind(this)}
            onBlur={this.changeValue.bind(this)}
            maxLength={this.props.maxLength}
            checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
            value={this.props.value} />
        </span>
        <span className="new-txt-err">{this.state.error}</span>
      </span>
    );
  }
}

export default MyInput;
