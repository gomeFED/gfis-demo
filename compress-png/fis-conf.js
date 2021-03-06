//运行命令：fis3 release
fis.match('/css/**.png', {
    optimizer: fis.plugin('png-compressor', {
    })
});


fis.match('*', {
	useCache: false,
    deploy: fis.plugin('local-deliver', {
        to: './build'
    })
});

fis.match('/build/**', {
    release: false
});
