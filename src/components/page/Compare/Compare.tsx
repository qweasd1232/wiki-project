import React from 'react';
import './style/compare.less';

interface CustomProps {
  children: React.ReactElement;
}

const Custom: React.FC<CustomProps> = (props) => {
  return <div className="compare">{props.children}</div>;
};

Custom.defaultProps = {
  source: [
    {
      url: 'http://ssy-design.oss-cn-shenzhen.aliyuncs.com/images/basic/grid/%E6%A0%85%E6%A0%BC-%E5%86%85%E5%AE%B9-%E6%AD%A3%E7%A1%AE.png',
      title: '始终将内容放在安全框内',
      type: 'success',
    },
    {
      url: 'http://ssy-design.oss-cn-shenzhen.aliyuncs.com/images/basic/grid/%E6%A0%85%E6%A0%BC-%E5%86%85%E5%AE%B9-%E9%94%99%E8%AF%AF.png',
      title: '始终将内容放在安全框内',
      type: 'error',
    },
  ],
};

export default Custom;
