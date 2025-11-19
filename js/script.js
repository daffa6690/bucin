
function getNama(){
    var name = document.getElementById("mynama").value;
    localStorage.setItem("nama", name);
    window.location.href = './status.html';
}

function timeoutData() {
    setTimeout(function(){
        window.location.href = "https://youtu.be/o25_Tn8BnFM?si=BILmjworB-1DpNhw";
    },130000)
}

