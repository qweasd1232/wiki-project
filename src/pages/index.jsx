import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "../components/HomepageComponents";
import {
  AngularIcon,
  APIReferenceIcon,
  FlutterIcon,
  HTMLIcon,
  KotlinIcon,
  ReactIcon,
  SwiftIcon,
  TerminalIcon,
  DisconnectedPlugIcon,
  UIKitIcon,
} from "../components/icons";
import styles from "./index.module.css";

import WebComponentSvg from './images/webComponent.svg';
import MobileComponentSvg from './images/mobileComponent.svg';
import BlockSvg from './images/block.svg';
import PatternSvg from './images/pattern.svg';
import TemplateSvg from './images/template.svg';
import IxdSvg from './images/ixd.svg';
import AnalyzeSvg from './images/analyze.svg';
import MotionSvg from './images/motion.svg';

export default function Homepage() {
  const router = useHistory();

  return (
    <Layout description="数商云团队知识库" wrapperClassName="homepage">
      <div className="pad">
        <div className="center homepage-content">
          <div id="hero">
            <h2>数商云团队知识库</h2>
            <p>知识文档、工具、方法、实践指南。</p>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/design/intro"
            >
              开始
            </Link>
          </div>
          <Section title="新手入门">
            <Card
              title="知识库介绍"
              description="知识文档、工具、方法、实践指南。"
              to="/docs/guide/intro"
            />
            <Card
              title="所有人必看"
              description="设计、产品、开发、测试、后台岗位必看指南。"
              to="/docs/guide/必看指南/common"
            />
            <Card
              title="文档编辑指南"
              description="知识库文档的编辑提交。"
              to="/docs/category/文档编辑指南"
            />
            <Card
              title="文档样式指南"
              description="文档中可以使用的功能、组件和样式模版。"
              to="/docs/category/文档样式指南"
            />
            <Card
              title="关于知识库"
              description="介绍知识库的建立过程"
              to="/docs/guide/关于/文档框架选型分析"
            />
          </Section>

          <Section title="需求阶段" id="web-sdks" hasSubSections>
            <Section
              title="需求挖掘和分析"
              id="core-sdks"
              HeadingTag="h4"
              description={
                <>
                  需求机会点。 <br />
                </>
              }
            >
              <Card
                title="行业竞品"
                description="--"
                to="/docs/industry/intro"
                icon={<WebComponentSvg />}
              />
              <Card
                title="商业研究"
                description="--"
                to="/docs/business/intro"
                icon={<MobileComponentSvg />}
              />
              <Card
                title="需求分析"
                description="--"
                to="/docs/analysis/intro"
                icon={<BlockSvg />}
              />
            </Section>
          </Section>

          <Section title="设计调研" id="web-sdks" hasSubSections>
            <Section
              title="设计探索"
              id="core-sdks"
              HeadingTag="h4"
              description={
                <>
                  设计机会点。 <br />
                </>
              }
            >
              <Card
                title="风格探索/聚焦"
                description="--"
                to="/docs/design/视觉设计/风格探索"
                icon={<PatternSvg />}
              />
              <Card
                title="视觉设计"
                description="--"
                to="/docs/design/视觉设计/"
                icon={<TemplateSvg />}
              />
            </Section>
          </Section>

          <Section title="设计实践" id="web-sdks" hasSubSections>
            <Section
              title="需求设计和交付"
              id="core-sdks"
              HeadingTag="h4"
              description={
                <>
                  需求设计和规范。 <br />
                </>
              }
            >
              <Card
                title="交互设计"
                description="--"
                to="/docs/category/交互设计"
                icon={<IxdSvg />}
              />
              <Card
                title="视觉设计"
                description="--"
                to="/docs/category/视觉设计"
                icon={<AnalyzeSvg />}
              />
              <Card
                title="交付规范"
                description="--"
                to="/docs/category/交付文档"
                icon={<MotionSvg />}
              />
            </Section>
          </Section>

          <Section title="需求实现" id="web-sdks" hasSubSections>
            <Section
              title="技术实现和测试"
              id="core-sdks"
              HeadingTag="h4"
              description={
                <>
                  技术实现和测试。<br />
                </>
              }
            >
              <Card
                title="技术实现"
                description="--"
                to="/docs/develop/intro/"
                icon={<HTMLIcon />}
              />
              <Card
                title="验收测试"
                description="--"
                to="/docs/testing/intro"
                icon={<UIKitIcon />}
              />
              <Card
                title="验证改良"
                description="--"
                to="/docs/improve/intro"
                icon={<ReactIcon />}
              />
            </Section>
          </Section>
        </div>
      </div>
    </Layout>
  );
}
