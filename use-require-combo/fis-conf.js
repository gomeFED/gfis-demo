

fis.match('/js/**/*.js', {
    isMod: true
});

fis.match('/js/**.js', {
    domain: '//js.atguat.com.cn'
});

fis.match('/css/**.css', {
    domain: '//css.atguat.com.cn'
});
fis.hook('gfe-cmd');
fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'amd',
        obtainScript: false,
        obtainStyle: false,
        processor: {
            '.html': 'html',
            '.tpl': 'html',
            '.ftl': 'html'
        },
        useInlineMap: true // 资源映射表内嵌
    })
})

fis.match('*', {
    useCache: false,
    deploy: [
        fis.plugin('gfe-combo-url'),
        fis.plugin('local-deliver', {
            to: './build'
        })
    ]
});

fis.match('/build/**', {
    release: false
});
