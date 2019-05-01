module.exports = {
    hooks: {
    	"init": function() {
	        console.log("在解析书之后,生成输出页面之前调用: init");
	    },
	    "finish：before": function() {
	        console.log("在生成输出页面后调用,在复制资源,生成封面之前调用: finish：before");
	    },
	    "finish": function() {
	        console.log("所有操作完成后调用: finish");
	    },
	    "page:before": function(page) {
	    	console.log("在页上运行模板引擎之前调用: page:before");
	      	return page;
	    }，
	    "page": function(page) {
	    	console.log("在输出和索引页面之前调用: page");
	        return page;
	    }
	},
	blocks: {

	},
	filters: {
		
	}
};