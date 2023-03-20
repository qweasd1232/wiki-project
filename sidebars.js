/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually
    /*
    tutorialSidebar: [
      {
        type: 'category',
        label: 'Tutorial',
        items: ['hello'],
      },
    ],
     */
    GuideSidebar: [
        {
            type: 'autogenerated',
            dirName: 'guide',
            // collapsed: false,
            //label: '知识库指南',
            //items: [],
        },
    ],
    ToolsSidebar: [
        {
            type: 'autogenerated',
            dirName: 'tools',
            // collapsed: false,
            //label: '工具方法',
            //items: [],
        },
    ],
    // DesignToolsSidebar: [
    //     {
    //         type: 'autogenerated',
    //         dirName: 'software-tools',
    //         //label: '软件工具',
    //         //items: [],
    //     },
    // ],
    BusinessAnalysisSidebar: [
        {
            type: 'autogenerated',
            dirName: 'business',
            //label: '商业研究',
            //items: [],
        },
    ],
    RequirementAnalysisSidebar: [
        {
            type: 'autogenerated',
            dirName: 'analysis',
            //label: '需求分析',
            //items: [],
        },
    ],
    IndustrySidebar: [
        {
            type: 'autogenerated',
            dirName: 'industry',
            //label: '行业竞品',
            //items: [],
        },
    ],
    RequirementDesignSidebar: [
        {
            type: 'autogenerated',
            dirName: 'design',
            //label: '需求设计',
            //items: [],
        },
    ],
    RequirementOutputSidebar: [
        {
            type: 'autogenerated',
            dirName: 'handoff',
            //label: '需求交付',
            //items: [],
        },
    ],
    DevelopSidebar: [
        {
            type: 'autogenerated',
            dirName: 'develop',
            //label: '开发实现',
            //items: [],
        },
    ],
    // FrontEndSidebar: [
    //     {
    //         type: 'autogenerated',
    //         dirName: 'front-end',
    //     }
    // ],
    AcceptanceTestingSidebar: [
        {
            type: 'autogenerated',
            dirName: 'testing',
            //label: '验收测试',
            //items: [],
        },
    ],
    VerifyImproveSidebar: [
        {
            type: 'autogenerated',
            dirName: 'improve',
            //label: '验证改良',
            //items: [],
        },
    ],
    LinkSeeksSidebar: [
        {
            type: 'autogenerated',
            dirName: 'linkseeks',
            //label: '瓴犀业务',
            //items: [],
        },
    ],
    ProPlatformSidebar: [
        {
            type: 'autogenerated',
            dirName: 'pro-platform',
            //label: '能力中心',
            //items: [],
        },
    ],
};

module.exports = sidebars;
