/** LocalStorage Helpers
 *  author: Jacob Ross
 *  docs: http://jake.i-tul.com/localStorage
 */
function store_this(name, obj){
    if(name){
        localStorage[name] = JSON.stringify(obj);
        console.log('stored '+ name + ' in localStorage.'+name);    
    }
}
                       
function append_storage(name, key, obj){
    var tObj = JSON.parse(localStorage[name]);
    tObj[key] = obj;
     
    localStorage[name] = JSON.stringify(tObj);
    console.log(key +' appended to localStorage.'+name);
}
 
function load_storage(name){
    var local = localStorage[name]
    return JSON.parse(local);
}
 
function check_storage(name){
    return localStorage[name] ? true : false;
}
 
function replace_storage(name, obj){
    delete localStorage[name];
    store_this(name, obj);
}
