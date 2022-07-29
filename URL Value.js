function getUrlParameterValue(url, parameter){
    var urls= url.toString()
    var output='';
    let pos=urls.search(parameter)+parameter.length;
    if(urls[pos]=='='){
        for(let i=pos+1;urls[i]!='&' && i<urls.length;i++)
            output+=urls[i];
        
    }
    return(output);
}
var url = new URL("https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby");
var parameter="utm_medium"
console.log(getUrlParameterValue(url,parameter));
