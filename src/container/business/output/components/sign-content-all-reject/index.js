import React,{ Component } from 'react';
import './style.scss';
import { Upload,Icon,Modal } from 'antd';
import MyInput from '../../../../../components/input';
//import Select from '../../../../../components/select';
import { Select } from 'antd';

const Option = Select.Option;
class SignContentAllReject extends Component {
    state = {
        previewVisible:false,
        previewImage:'',
        fileList:[],
        signRemark:'',

    };

    // 关闭查看图片
    handleCancel = () => this.setState({previewVisible:false})

    // 图片查看
    handlePreview = (file) => {
        this.setState({
            previewImage:file.url || file.thumbUrl,
            previewVisible:true,
            fileList:[],
        });
    }

    // 获取图片上传列表
    handleChange = ({fileList}) => {
        this.setState({
            fileList:fileList
        },() => {
            const {onChange} = this.props;
            onChange && onChange(this.state);
        })
    }

    // 签收说明
    handleTextChange = (v) => {
        this.setState({signRemark:v},() => {
            const {onChange} = this.props;
            onChange && onChange(this.state);
        })
    }

    render () {
        const {onChange} = this.props;
        const {previewVisible,previewImage,fileList} = this.state;
        const opts = refuseArr.map((v,i) => {
            return <Option key={i} value={v.id}>{v.name}</Option>
        })
        const opts1 = methodArr.map((v,i) => {
            return <Option key={i} value={v.id}>{v.name}</Option>
        })
        const uploadButton = (
            <div>
                <Icon type="plus" style={{color:'#3385ff',fontSize:'30px'}}/>
                <div className="ant-upload-text">
                    <p style={{color:'#666',fontSize:'14px'}}>上传回单</p>
                    <p style={{color:'#999',fontSize:'12px'}}>最多可上传三张</p>
                </div>
            </div>
        );
        return (
            <div className="sign-content-all-wrap">
                <div className="sign-content-all-inner">
                    <div className="input-wrap clearfix">
                        <span>拒收原因：</span>
                        <Select defaultValue={this.state.reason} placeholder="请选择拒收原因" style={{width:'500px',height:'34px',float:'left'}} 
                        onChange={(v) => {
                                    this.setState({
                                        reason:v
                                    },() => {
                                        onChange && onChange(this.state)
                                    })
                                }}>
                          {opts}
                        </Select>
                    </div>
                    <div className="input-wrap clearfix">
                        <span>处理方式：</span>
                        <Select defaultValue={this.state.reason} placeholder="请选择处理方式" style={{width:'500px',height:'34px',float:'left'}} 
                        onChange={(v) => {
                                    this.setState({
                                        dealWay:v
                                    },() => {
                                        onChange && onChange(this.state)
                                    })
                                }}>
                          {opts1}
                        </Select>
                    </div>
                    <div className="input-wrap clearfix">
                        <span>上传回单：</span>
                        <Upload
                            action="http://testoms.myspzh.com/upload"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                        >
                            {fileList.length >= 3 ? null : uploadButton}
                        </Upload>
                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                            <img alt="example" style={{width:'100%'}} src={previewImage}/>
                        </Modal>
                    </div>
                    <div className="input-wrap clearfix">
                        <span>签收说明：</span>
                        <MyInput type="textarea"
                                 placeholder="您最多可输入200字"
                                 style={{width:'calc(100% - 80px)'}}
                                 onInputChange={(v) => {
                                     this.setState({
                                         signRemark:v
                                     },() => {
                                         onChange && onChange(this.state)
                                     })
                                 }}/>
                    </div>
                </div>
            </div>
        )
    }
}

const refuseArr = [
    {name:'数量多开',id:'数量多开'},
    {name:'单品开错',id:'单品开错'},
    {name:'不方便收货(系统问题、条码没有、老板不在等)',id:'不方便收货（系统问题、条码没有、老板不在等）'},
    {name:'价格有异议',id:'价格有异议'},
    {name:'送货超市/未预约/资料不全',id:'送货超市/未预约/资料不全'},
    {name:'产品日期不好',id:'产品日期不好'},
    {name:'包装不好/质量问题',id:'包装不好/质量问题'},
    {name:'其他',id:'其他'},
]

const methodArr = [
    {name:'按仓配计出库费，记退货入库费',id:'按仓配计出库费，记退货入库费'},
    {name:'按仓配计出库费，不记退货入库费',id:'按仓配计出库费，不记退货入库费'},
    {name:'按自提计出库费，不记退货入库费',id:'按自提计出库费，不记退货入库费'},
    {name:'按自提计出库费，记退货入库费',id:'按自提计出库费，记退货入库费'},
    {name:'不计出库和退货入库费用',id:'不计出库和退货入库费用'},
]
export default SignContentAllReject