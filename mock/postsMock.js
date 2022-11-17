const postData = [{
    updateAt: '202211122359',
    _id: '001', user: {
        uid: '00002',
        username: '何健锋',
        avatar: '/img/avatar2.png'
    },
    content: {
        type: 0, // 图文消息
        text: '摄影师作品！',
        pics: ['/img/reward1.png', '/img/reward2.png', '/img/reward3.png', '/img/reward4.png'],
        share: {},
        timeString: '3分钟前'
    },
    reply: {
        hasLike: true,
        likes: ['荣子月', '常露方', '彭珏', '邹顺仪'],
        comments: [{

            author: '张俊',
            text: '牛！！！'
        }, {
            author: '唐若淞',
            text: '剑锋厉害啊！'
        }]
    }
}, {
    updateAt: '202211122359',
    _id: '001', user: {
        uid: '00005',
        username: '珍贵的你',
        avatar: '/img/asd.png'
    },
    content: {
        type: 0,
        text: 'Hello! 哈哈哈哈哈！\r哥哥我也想你！永远不忘记你~',
        pics: [],
        share: {},
        timeString: '2个小时前'
    },
    reply: {
        hasLike: true,
        likes: ['SHI Ham'],
        comments: []
    }
}, {
    updateAt: '202211122359',
    _id: '001', user: {
        uid: '00003',
        username: '任佳奇',
        avatar: '/img/avatar3.png'
    },
    content: {
        type: 1, // 分享消息
        text: 'Hello！哈哈哈哈',
        pics: [],
        share: {
            pic: '/img/1.jpg',
            text: 'some say love is a razor'
        },
        timeString: '50分钟前'
    },
    reply: {
        hasLike: false,
        likes: ['Liu Linjing'],
        comments: []
    }
}, {
    updateAt: '202211122359',
    _id: '001', user: {
        uid: '00004',
        username: '我是谁呢',
        avatar: '/img/avatar4.png'
    },
    content: {
        type: 0,
        text: '很好',
        pics: ['/img/2.jpg'],
        share: {},
        timeString: '一小时前'
    },
    reply: {
        hasLike: false,
        likes: [],
        comments: []
    }
},];

export default postData;