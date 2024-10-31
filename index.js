
        function CheckResult() {
            var score = document.getElementById("input").value
            if (score == "") {
                alert("Enter Valid Number")
                // console.log("deyplay");

            } else if (Number(score % 5 == 0 && score % 3 == 0)){
                Result.innerHTML = "Fizz Buzz"
                Result.style.color = "green"
                console.log("fizzbuzz");

            } else if  (Number(score % 3 == 0)){ 
                Result.innerHTML = "Fizz"
                Result.style.color = "green"
                
            } else if (Number(score % 5 == 0)){
                Result.innerHTML = "Buzz"
                Result.style.color = "green" 
            } else {
                document.getElementById("Result").innerHTML = score + " is just a normal number joor.."
                document.getElementById("Result").style.color = "red"
                document.getElementById("Result").style.background = "white"
            }
        }