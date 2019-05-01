module.exports = {
    hooks: {
	    'page:before': function(page) {
	      page.content = "# 你好 Title\n" +page.content;
	      return page;
	    }，
	    "page": function(page) {
        	page.content = page.content
        		.replace("<b>", "<strong>")
	            .replace("</b>", "</strong>");
	        return page;
	    }
	},
	blocks: {},
	filters: {}
};