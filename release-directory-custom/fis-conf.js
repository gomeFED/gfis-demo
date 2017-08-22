//运行命令：fis3 release

//不发布widget文件夹
fis.match('/widget/**', {
    release: false
}, true);



fis.match('*', {
	useCache: false,
    deploy: fis.plugin('local-deliver', {
        to: './build'
    })
});

fis.match('/build/**', {
    release: false
});
