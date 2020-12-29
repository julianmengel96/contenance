$(document).ready(function() {
   $("#buttonGo").click(function(){
       let linkOld = $("#amazon-link").val();
       let asin = getAsin(linkOld);
       let text = "[Spenden] " + decodeURIComponent(getText(linkOld));
       let linkNew = buildLink(asin);
       let imageLink = buildImage(asin);
       
       //$("#linkBox").html("<a target='_blank' href='"+linkNew+"'>"+text+"</a><img src='"+imageLink+"' width="1" height="1" border="0" alt="" style='border:none !important; margin:0px !important;' />");
       $("#linkBox").html("<a target='_blank' href='"+linkNew+"'>"+text+"</a><img width='1' height='1' border='0' alt='' style='border:none !important; margin:0px !important;' src='"+imageLink+"'/>");
   }) 
});


function getAsin(linkOld) {
    
    //https://www.amazon.de/Contenance-%C2%AE-Yoga-Block-Naturkork-Gleichgewicht/dp/B088Q2WXS9/ref=sr_1_3?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=contenance+kork&qid=1601640143&sr=8-3
    let step = linkOld.split("amazon.de/");
    step = step[1].split("/");
    console.log(step[2]);
    return step[2];
}

function buildLink(asin) {
    let linkNew = "https://www.amazon.de/gp/product/"+asin+"/ref=as_li_tl?ie=UTF8&tag=findthepresen-21&camp=1638&creative=6742&linkCode=as2&creativeASIN="+asin;
    return linkNew;
}

function buildImage(asin) {
    let imageLink = "//ir-de.amazon-adsystem.com/e/ir?t=findthepresen-21&l=am2&o=3&a="+asin;
    return imageLink;
}

function getText(linkOld) {
    let step = linkOld.split("amazon.de/");
    step = step[1].split("/");
    console.log(step[0]);
    return step[0];
}
