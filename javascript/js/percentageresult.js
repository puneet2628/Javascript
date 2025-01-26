    function result(){
        let a= document.getElementById("hindi").value;
        let b= document.getElementById("english").value;
        let c = document.getElementById("math").value;
        let d = document.getElementById("java").value;
        let e= document.getElementById("javascript").value;
        let f =  Number(a)+ Number(b)+ Number(c)+ Number(d)+ Number(e)
        let g = f / 500 * 100
        document.getElementById("marks").innerHTML="Total marks=" +f;
        document.getElementById("percentage").innerHTML="Percentage=" +g +"%";

        if (g>=40 & g<=59){
            document.getElementById("division").innerHTML="Congrats! You Got 3rd Division with" +g +"%";
        }
        else if(g>=60  & g<=79){
            document.getElementById("division").innerHTML="Congrats! You Got 2rd Division with" +g +"%";
        }
        else if(g>=80){
            document.getElementById("division").innerHTML="Congrats! You Got 1rd Division with" +g +"%";
        }
        else{
            document.getElementById("division").innerHTML="Sorry! But You Failed In Exam " +g +"%";
        }

        if(a<33){
            document.getElementById("lessmarks").innerHTML="Sorry! But You Failed In " +"Hindi="+ a;
        }
        else if(b<33){
            document.getElementById("lessmarks").innerHTML="Sorry! But You Failed In " +"English="+ b;
        }
        else if(c<33){
            document.getElementById("lessmarks").innerHTML="Sorry! But You Failed In " +"Math="+ c;
        }
        else if(d<33){
            document.getElementById("lessmarks").innerHTML="Sorry! But You Failed In " +"Java="+ d;
        }
        else if(e<33){
            document.getElementById("lessmarks").innerHTML="Sorry! But You Failed In " +"Javascript="+ e;
        }

    }