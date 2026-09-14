/*
 * Park 数字公共物品 —— 共享数据源
 *
 * index.html（首页精选）、public-goods.html（完整索引）、store.html（商店）
 * 都从这里读数据。新增或修改公共物品只需改这一个文件。
 *
 * 每件物品都是 Apache 2.0 的：代码永远免费可取。
 * 会员 SBT 买的是「经过验证的构建 + 一键更新 + 网络接入」，不是内容本身。
 */
(function (global) {
  'use strict';

  global.PARK_GOODS = [
    { id:'voice-input', ico:'🎙️', name:'语音输入法', en:'Voice Input',
      desc:'本地推理的离线语音输入，中英混说不掉字。', cat:'效率', ver:'v2.4.1', size:'1.2 GB', dl:'12.4k',
      local:true, needsCompute:false, repo:'MushroomDAO/voice-input' },
    { id:'translator', ico:'🌐', name:'翻译器', en:'Translator',
      desc:'文档级翻译，保留排版、表格与自定义术语表。', cat:'效率', ver:'v1.9.0', size:'860 MB', dl:'9.1k',
      local:true, needsCompute:false, repo:'MushroomDAO/translator' },
    { id:'image-toolkit', ico:'🖼️', name:'图像工具箱', en:'Image Toolkit',
      desc:'抠图、超分、批量压缩，全部在本机完成。', cat:'创作', ver:'v3.1.2', size:'2.4 GB', dl:'15.7k',
      local:true, needsCompute:false, repo:'MushroomDAO/image-toolkit' },
    { id:'subtitle', ico:'🎬', name:'字幕生成器', en:'Subtitle Generator',
      desc:'视频转字幕，32 种语言，时间轴自动对齐。', cat:'创作', ver:'v1.4.7', size:'1.8 GB', dl:'7.3k',
      local:true, needsCompute:false, repo:'MushroomDAO/subtitle' },
    { id:'code-copilot', ico:'💻', name:'代码助手', en:'Code Copilot',
      desc:'补全与重构，代码不出本机。可接本地或自带模型。', cat:'开发', ver:'v4.0.3', size:'3.1 GB', dl:'21.2k',
      local:true, needsCompute:true, repo:'MushroomDAO/code-copilot' },
    { id:'pdf-workbench', ico:'📄', name:'PDF 工作台', en:'PDF Workbench',
      desc:'合并、拆分、OCR、表格提取，批量处理。', cat:'效率', ver:'v2.0.1', size:'540 MB', dl:'18.9k',
      local:true, needsCompute:false, repo:'MushroomDAO/pdf-workbench' },
    { id:'podcast-transcribe', ico:'🎧', name:'播客转写', en:'Podcast Transcriber',
      desc:'长音频转写与说话人分离，支持断点续跑。', cat:'创作', ver:'v1.2.5', size:'1.1 GB', dl:'5.6k',
      local:true, needsCompute:false, repo:'MushroomDAO/podcast-transcribe' },
    { id:'doc-qa', ico:'📚', name:'文档问答', en:'Doc QA',
      desc:'对着你自己的资料库提问，向量库建在本地。', cat:'效率', ver:'v1.6.0', size:'720 MB', dl:'8.8k',
      local:true, needsCompute:true, repo:'MushroomDAO/doc-qa' },
    { id:'city-dashboard', ico:'🏙️', name:'城市数据仪表盘', en:'City Dashboard',
      desc:'开放数据接入与可视化，面向社区与城市治理。', cat:'数据', ver:'v0.9.4', size:'210 MB', dl:'2.1k',
      local:true, needsCompute:false, repo:'MushroomDAO/city-dashboard' },
    { id:'community-canvas', ico:'🧩', name:'社区协作画布', en:'Community Canvas',
      desc:'实时协作白板，可自托管，数据留在自己手里。', cat:'数据', ver:'v1.3.0', size:'180 MB', dl:'3.4k',
      local:true, needsCompute:false, repo:'MushroomDAO/community-canvas' },
    { id:'agent-router', ico:'🕸️', name:'Agent 路由', en:'Agent Router',
      desc:'把请求按成本与延迟路由到社区节点或你自己的模型。', cat:'开发', ver:'v0.6.2', size:'48 MB', dl:'1.9k',
      local:true, needsCompute:true, repo:'MushroomDAO/agent-router' },
    { id:'kms-signer', ico:'🔑', name:'KMS 签名器', en:'KMS Signer',
      desc:'本地密钥管理与签名，对接 Park 凭证体系。', cat:'开发', ver:'v1.0.0', size:'32 MB', dl:'1.2k',
      local:true, needsCompute:false, repo:'MushroomDAO/kms-signer' }
  ];

  global.PARK_CATS = ['全部','效率','创作','开发','数据'];

  /* 社区 API 节点：由社区成员自行运行，按量计费，收益归节点 */
  global.PARK_NODES = [
    { node:'node-aurora.park', model:'大语言模型 · 70B',   price:'$0.42 / 1M tok',  lat:'182 ms', ok:true },
    { node:'node-basalt.park', model:'语音识别 · Large',   price:'$0.006 / 分钟',   lat:'240 ms', ok:true },
    { node:'node-cedar.park',  model:'图像生成 · XL',      price:'$0.011 / 张',     lat:'1.8 s',  ok:true },
    { node:'node-dune.park',   model:'向量嵌入 · Base',    price:'$0.015 / 1M tok', lat:'96 ms',  ok:true },
    { node:'node-ember.park',  model:'大语言模型 · 8B',    price:'$0.05 / 1M tok',  lat:'410 ms', ok:false }
  ];
})(window);
