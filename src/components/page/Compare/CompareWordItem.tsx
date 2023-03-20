import React from 'react';
import './style/compare.less';

interface CustomProps {
  children: React.ReactElement;
  content: string;
  subcontent: string;
  title: string;
  type: 'success' | 'error';
}

const CompareWordItem: React.FC<CustomProps> = (props) => {
  const { content, type, title, subcontent } = props;

  return (
    <div className="compare-item">
      <div className="text-block">
        <p>{content}</p>
        <p>{subcontent}</p>
      </div>
      <div className="compare-item-des-block-do">
        {type === 'success' ? <div className="line-green"></div> : <div className="line-red"></div>}
        <div className="compare-item-title">
          <div className="heading-do-icon">
            {/*    {
              type === "success" ? <img
                  src="http://ssy-design.oss-cn-shenzhen.aliyuncs.com/images/partern/notification/notification-success.png"/> :
                <img
                  src="http://ssy-design.oss-cn-shenzhen.aliyuncs.com/images/partern/notification/notification-error.png"/>
            }*/}
          </div>
          <div className={type === 'success' ? 'heading-do' : 'heading-not'}>
            {type === 'success' ? '推荐' : '慎用'}
          </div>
        </div>
        {/*<div className="item-describe">{title}</div>*/}
      </div>
    </div>
  );
};

CompareWordItem.defaultProps = {
  content: '',
  subcontent: '',
  title: '始终将内容放在安全框内',
  type: 'success',
};

export default CompareWordItem;
