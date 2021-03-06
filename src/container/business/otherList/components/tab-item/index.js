import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.scss';
import MyButton from '../../../../../components/button';
import Empty from '../../../../../components/empty';
import Modal from '../../../../../components/modal';
import RadioList from './components/radioList';

class TabItem extends Component {

    state = {
        openModal: false,
        id: '',
        cancelReason: '下错单/重复下单',
    }
    // 调用强制完成接口
    onCompletion = (id) => {
        const {onCompletion} = this.props;
        onCompletion && onCompletion(id);
    }

    // 取消 跟强制完成同样操作
    onCancel = (id) => {
        this.setState({
            openModal: true,
            id: id
        })
    }

    // 选择取消原因回调
    handleRadio = (v) => {
        this.setState({
            cancelReason: v
        })
    }

    handleOk = () => {
        this.setState({
            openModal: false
        })
        const {onCompletion} = this.props;
        onCompletion && onCompletion(this.state.id, this.state.cancelReason);
    }

    handleCancel = () => {
        this.setState({
            openModal: false
        })
    }

    render() {
        const {sellOtherList} = this.props;
        const trs = sellOtherList.map((v, i) => {
            // 订单状态 0:待审核1:待出库2：已完成 99:已关闭
            switch (v.orderStatus) {
                case 0:
                    v.orderStatus = '待审核';
                    break;
                case 1:
                    v.orderStatus = '待出库';
                    break;
                case 2:
                    v.orderStatus = '已完成';
                    break;
                case 99:
                    v.orderStatus = '已关闭';
                    break;
                default:
            }
            switch (v.reason) {
                case '0':
                    v.reason = '退货商品已损坏';
                    break;
                case '1':
                    v.reason = '退货商品已过期';
                    break;
                case '2':
                    v.reason = '库存商品已过期';
                    break;
                case '3':
                    v.reason = '其它';
                    break;
                default:
            }
            switch (v.processingMethod) {
                case 0:
                    v.processingMethod = '销毁';
                    break;
                case 1:
                    v.processingMethod = '自提';
                    break;
                case 2:
                    v.processingMethod = '其它';
                    break;
                default:
            }
            return (
                <tr key={i} className="outList-tr">
                    <td className="td outList-td">
                        <p className="left">处理单号：<Link to={`/sellotherdetail/${v.id}`}>{v.orderCode}</Link></p>
                    </td>
                    <td className="td outList-td">
                        <p className="owner">{v.businessName} </p>
                        <p className="owner2">{v.storeName ? v.storeName : '米阳嘉兴仓'} {v.quality === 1 ? '正常销售品' : '临期品/次品'}</p>
                    </td>
                    <td className="td outList-td">
                        <p>{v.goodsCount}</p>
                    </td>
                    <td className="td outList-td">
                        <p>{v.reason}</p>
                    </td>
                    <td className="td outList-td">
                        <p>{v.processingMethod}</p>
                    </td>
                    <td className="td">
                        <p className={`${v.orderStatus === '待审核' ? 'red' : ''}`}>
                            {
                                v.orderStatus
                            }
                        </p>
                    </td>
                    <td className="td outList-td">
                        <p>{v.auditTime ? v.auditTime : '-'}</p>
                    </td>
                    <td className="td outList-td">
                        <p className="margin"><Link to={`/sellotherdetail/${v.id}`}>订单详情</Link></p>
                    </td>
                    <td className="td" style={{padding: '0 30px', textAlign: 'center', color: '#3385df'}}>
                        {v.orderStatus === '待出库' ?
                            <p className="del" onClick={() => this.onCancel(v.id)}/> : '-'}
                    </td>
                </tr>
            )
        })
        return (
            <div className="m-table-list-wrap">
                <table border="1" style={{border: 'none'}}>
                    <thead>
                    <tr>
                        <th>单号</th>
                        <th>货主/仓库信息</th>
                        <th>总数量</th>
                        <th>处理原因</th>
                        <th>处理方式</th>
                        <th>状态</th>
                        <th>审核时间</th>
                        <th>详情</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {trs.length > 0 ? trs : <Empty/>}
                    </tbody>
                </table>
                <Modal buttonFlag
                       openModal={this.state.openModal}
                       style={{width: '380px', height: '220px'}}
                       onOkClick={this.handleOk}
                       onCancelClick={this.handleCancel}
                       content={<RadioList onChange={this.handleRadio}/>}/>
            </div>
        )
    }
}

export default TabItem;