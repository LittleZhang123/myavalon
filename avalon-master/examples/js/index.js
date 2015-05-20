require.config({
	baseUrl:'js/',
	paths:{
		avalon:'avalon.shim',
		domReady:'domReady'
	},
	shim:{
		avalon:{reports:'avalon'}
	}
});

require(['avalon','!domReady'], function() {
    var vm = avalon.define({
        $id: 'list',
        more_name: 'gg',
        more_text: '更多公告',
        gg:conf.gg,
        bd:conf.bd,
        infoList:conf.gg,
        changeUl:function(flag){
            if(flag){
                vm.more_name = 'gg';
                vm.more_text = '更多公告';
                vm.infoList = vm.gg;
            }else{
                vm.more_name = 'bd';
                vm.more_text = '更多报道';
                vm.infoList = vm.bd;
            }
        }
    });
    avalon.scan(document.body);
});