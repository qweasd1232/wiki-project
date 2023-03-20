import React from 'react';
import './style/compare.less';

interface CustomProps {
  children: React.ReactElement;
  text: string;
  url: string;
  title: string;
  type: 'success' | 'error';
}

const CompareImageItem: React.FC<CustomProps> = (props) => {
  const { url, type, title } = props;

  return (
    <div className="compare-item">
      <div className="image-block">
        <img src={url} loading="lazy" alt="" className="compare-preview-image" />
      </div>
      <div className="compare-item-des-block-do">
        {type === 'success' ? <div className="line-green"></div> : <div className="line-red"></div>}
        <div className="compare-item-title">
          {/*   <div className="heading-do-icon">
            {
              type === "success" ? <img
                  src="http://ssy-design.oss-cn-shenzhen.aliyuncs.com/images/partern/notification/notification-success.png"/> :
                <img
                  src="http://ssy-design.oss-cn-shenzhen.aliyuncs.com/images/partern/notification/notification-error.png"/>
            }
          </div>*/}
          <div className={type === 'success' ? 'heading-do' : 'heading-not'}>
            {type === 'success' ? '正确' : '错误'}
          </div>
        </div>
        <div className="item-describe">{title}</div>
      </div>
    </div>
  );
};

CompareImageItem.defaultProps = {
  url: 'http://ssy-design.oss-cn-shenzhen.aliyuncs.com/images/basic/grid/%E6%A0%85%E6%A0%BC-%E5%86%85%E5%AE%B9-%E6%AD%A3%E7%A1%AE.png',
  title: '始终将内容放在安全框内',
  type: 'success',
};

export default CompareImageItem;
