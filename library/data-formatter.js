function formatter(selector){

  function words(contents,callback){
    for (let i = 0; i < contents.length; i++) {
      let content = contents[i].outerHTML;
      content = content.split(/,| |<|>|"|\//);
      content.forEach(callback);
    }
  }
  function searchForVariables(format){
    let variables = [],exists;
    words(format.content,function(word){
      exists = false;
      if(word[0] == '%' && word[word.length-1] == '%'){
        word = word.slice(1).slice(0,-1);
        for (variable of variables)
          if(variable == word) exists = true;
        if(exists === false) variables.push(word);
      }
    });
    return variables;
  }
  function Format(el){
    this.selector = el.dataset.selector;
    this.content = el.children;
    el.remove();
    this.variables = searchForVariables(this);
  }
  function render(selector,obj={}){
    function parse(str){
      let el = document.createElement('html');
      el.innerHTML = str;
      return el.children[1].children[0];
    }
    let releaseArr = [],
        domParse = new DOMParser();
    for (format of arr) if(format.selector == selector){
      for (elm of format.content) {
        let str = elm.outerHTML;
        for (variable of format.variables) str = str.replace('%'+variable+'%',obj[variable]);

        releaseArr.push(parse(str));
      }
    }

    return releaseArr;
  }

  let arr = [];
  let formats = document.querySelectorAll(selector);
  formats.forEach(function(e){
    arr.push(new Format(e));
  });


  arr.addFormat = function(el){
    if(el.constructor == String){
      let ret = {};
      ret.fromFile = function(){
        let req = new XMLHttpRequest();
        req.onload = function(e){
          console.log(e);
          console.log(this);
        }
        ;
        req.open("get", el, true);
        req.send();
        }
      return ret;
    }
    arr.push(new Format(el));
  }

  arr.render = function(selector,obj){
    let releaseArr = render(selector,obj);
    releaseArr.append = function(where){
      releaseArr.forEach(function(el){
        where.append(el);
      });
    }
    releaseArr.in = function(elSelector){
      let elms = (elSelector.constructor == String)? document.querySelectorAll(elSelector) : [elSelector];
      elms.forEach(function(elm){
        releaseArr.forEach(function(rendEl){
          elm.parentElement.insertBefore(rendEl,elm);
        });
        elm.remove();
      });
    }

    if(obj == undefined){
      releaseArr.with = function(elSelector){
        let elms = document.querySelectorAll(elSelector);
        elms.forEach(function(elm){
          arr.render(selector,elm.dataset).in(elm);
        });
      }
    }
    return releaseArr;
  }

  return arr;
}
