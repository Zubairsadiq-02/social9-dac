const dashboardData = {

followers: 125450,

reach: "985K",

engagement: "7.2%"

};

document.getElementById("followers").innerText =
dashboardData.followers.toLocaleString();

document.getElementById("reach").innerText =
dashboardData.reach;

document.getElementById("engagement").innerText =
dashboardData.engagement;

const ctx =
document.getElementById("growthChart");

new Chart(ctx, {

type:"line",

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"
],

datasets:[{

label:"Followers Growth",

data:[
10000,
15000,
22000,
35000,
55000,
125450
],

borderColor:"#2563eb",

tension:0.4

}]

}

});