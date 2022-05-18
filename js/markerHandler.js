AFRAME.registerComponent("markerhandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker is found!")
            this.handleMarkerFound();
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker is lost!")
            this.handleMarkerLost();
        })
    },
    handleMarkerFound:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display = "flex";
        var orderSummaryButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")

        orderSummaryButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Order Summary",
                text:"Work In Progress"
            })
        })

        orderButton.addEventListener("click",function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for Ordering!",
                text:"  ",
                timer:2000,
                buttons:false
            })
        })
    },
    handleMarkerLost:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    }
})