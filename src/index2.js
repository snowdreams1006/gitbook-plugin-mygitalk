module.exports = {
  hooks: {
    "init": function() {
      console.log("init");
    },
    "page:before": function(page) {
      console.log("page:before", page);

      var book = this.book;

      // Read configuration from book.json
      var value = book.config.get('title', 'Default Value');
      console.log("init:title", value);

      // Resolve a filename to an absolute path
      var filepath = book.resolve('README.md');
      console.log("init:README.md", filepath);

      // Render an inline markup string
      book.renderInline('markdown', 'This is **Markdown**')
        .then(function(str) {
          console.log("init:renderInline", str);
        })

      // Render a markup string (block mode)
      book.renderBlock('markdown', '* This is **Markdown**')
        .then(function(str) {
          console.log("init:renderBlock", str);
        })

      return page;
    },
    "page": function(page) {
      console.log("page", page);

      return page;
    },
    "finish:before": function() {
      console.log("finish:before");
    },
    "finish": function() {
      console.log("finish");

      // Return root folder for the output
      var root = output.root();
      console.log("finish:root", root);

      // // Resolve a file in the output folder
      // var filepath = output.resolve('myimage.png');
      // console.log("finish:myimage", filepath);

      // // Convert a filename to an URL (returns a path to an html file)
      // var fileurl = output.toURL('mychapter/README.md');
      // console.log("finish:mychapter/README.md", fileurl);

      // // Write a file in the output folder
      // output.writeFile('hello.txt', 'Hello World')
      //   .then(function() {
      //     console.log("finish:writeFile");
      //   });

      // // Copy a file to the output folder
      // output.copyFile('./myfile.jpg', 'cover.jpg')
      //   .then(function() {
      //     console.log("finish:copyFile");
      //   });

      // // Verify that a file exists
      // output.hasFile('hello.txt')
      //   .then(function(exists) {
      //     console.log("finish:hasFile");
      //   });
    }
  }
};
