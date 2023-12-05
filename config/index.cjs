/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx0798f8a76fa365ce',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c92dcb8b6f6e5a734a8e02548b1904de',

  PROVINCE: '贵州',
  CITY: '惠水',

  USERS: [
    {
      // 想要发送的人的名字
      name: '情艳',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oYks56osf0TaFdTqO6cHhmk07DV4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'rDJANr13g9_vEzN86e0m14TViyxncGuPuj2Y3CgmCmU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-05',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '情艳', year: '2003', date: '09-22',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '阿德', year: '2002', date: '12-20',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '11-10',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-03-05' },
        // 周年纪念日
        { keyword: 'marry_day', date: '2023-03-05' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'rDJANr13g9_vEzN86e0m14TViyxncGuPuj2Y3CgmCmU',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oYks56osf0TaFdTqO6cHhmk07DV4',
    }
  ],

}

module.exports = USER_CONFIG

