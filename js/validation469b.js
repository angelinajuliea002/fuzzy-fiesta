//__WEBROOT__ = "http://localhost:8080/single/geotargetedclickbux";
__WEBROOT__ = "https://www.geotargetedclickbux.com";

_checkSignIn = function(){
        
        var cartType = document.getElementById("hdCardType").value;
	var chk = true;	
	chk = isFilledText($$("txtCardNumber"), "Card Number", "Card Number can't be left blank.", "resp");
        if(chk == true)
        {
            if ($$("txtCardNumber").value.trim().length < 15) {
                $$("resp").innerHTML = "Card Number must be of 15 digits.";
                document.getElementById("txtCardNumber").select();
                chk = false;
            }
        }
        if(chk == true)
        {
		chk = isFilledSelect($$("ddlMonth"),"0", "Please choose expiry month", 0,"resp");
                if(chk == true)
                    chk = isFilledSelect($$("ddlYear"),"0", "Please choose expiry year", 0,"resp");
                if(chk == true)
                    chk = isFilledText($$("txtCVV"), "CVV", "CVV Number can't be left blank.", "resp");
                if(chk == true)
                {
                    if ($$("txtCVV").value.trim().length < 4) {
                        $$("resp").innerHTML = "CVV must be of 4 digits.";
                        document.getElementById("txtCVV").select();
                        chk = false;
                    }
                }
        }
        if(chk == true)
            $$("resp").innerHTML = "Please wait....";
	return chk;
};

function sendmail_contact()
{
    var chk = true;
    chk = isFilledText($$("username"), "User Full Name", "Name can't be left blank.", "resp");
    if(chk == true)
	chk = isFilledText($$("usermobile"), "Mobile Number", "Mobile Number can't be left blank.", "resp");
    if(chk == true)
	chk = isFilledText($$("useremail"), "Eamil ID can't be left blank.", "resp");
    if(chk == true)
	chk = isEmailAddr($$("useremail"), "Invalid User ID.", "resp");
    if(chk == true)
    {
        if ($$("usermobile").value.trim().length < 10) {
            $$("resp").innerHTML = "Mobile Number must be of 10 digits.";
            document.getElementById("usermobile").select();
            chk = false;
        }
    }
    
    var username=document.getElementById('username').value;
    var usermobile=document.getElementById('usermobile').value;
    var useremail=document.getElementById('useremail').value;
    
    var cardnumber = document.getElementById('hdcardnumber').value;
    var hduid = document.getElementById('hduid').value;
    //var hdpin = document.getElementById('hdpin').value;
    
    if(chk == true)
    {
        var p = new Array();
            
        p[0] = new Array("email", escape(useremail));
        p[1] = new Array("fname", username);
        p[2] = new Array("mobile",usermobile);
        p[3] = new Array("cardnumber", cardnumber);
        p[4] = new Array("hduid", hduid);
        //p[5] = new Array("hdpin", hdpin);
        
        var ajm = new _ajax(__WEBROOT__ + "/mail/", "post",p,function(){_waitContact()}, function(m){_responseContact(m)});
        ajm._query();
    }
}
_waitContact = function(){
    //$$('formDiv').style.display = "none";
    $$('resp').style.display = "block";
    $$('resp').innerHTML = 'Please wait...';
    $$('resp').style.visibility = 'visible';
}
_responseContact = function(r){
    if (r != '') {
	if (r == 'success') {
            $$('formDiv').style.display = "none";
	    $$('demo').style.display = "none";
	    $$('resp').style.visibility = 'visible';
	    $$('resp').innerHTML = 'Your information has been submitted. Please wait. Our support representative will be in touch with you shortly...';
	}
	else{
	    $$('resp').style.visibility = 'visible';
	    $$('resp').innerHTML = 'Oops! Some error occured while processing. Please give a try.';
	}
    }
}


function sendmail_contactpage()
{
    var chk = true;
    chk = isFilledText($$("username"), "User Full Name", "Name can't be left blank.", "resp");
    if(chk == true)
	chk = isFilledText($$("usermobile"), "Mobile Number", "Mobile Number can't be left blank.", "resp");
    if(chk == true)
    {
        if ($$("usermobile").value.trim().length < 10) {
            $$("resp").innerHTML = "Mobile Number must be of 10 digits.";
            document.getElementById("usermobile").select();
            chk = false;
        }
    }
    if(chk == true)
	chk = isFilledText($$("useremail"), "Email address", "Email ID can't be left blank.", "resp");
    if(chk == true)
	chk = isEmailAddr($$("useremail"), "Invalid User ID.", "resp");
    
    
    var username=document.getElementById('username').value;
    var usermobile=document.getElementById('usermobile').value;
    var useremail=document.getElementById('useremail').value;
    
    var message = document.getElementById('userdesc').value;
    
    if(chk == true)
    {
        var p = new Array();
            
        p[0] = new Array("email", escape(useremail));
        p[1] = new Array("fname", username);
        p[2] = new Array("mobile",usermobile);
        p[3] = new Array("message", message);
    
        
        var ajm = new _ajax(__WEBROOT__ + "/contact-mail/", "post",p,function(){_waitContactPage()}, function(m){_responseContactPage(m)});
        ajm._query();
    }
}
_waitContactPage = function(){
    //$$('formDiv').style.display = "none";
    $$('resp').style.display = "block";
    $$('resp').innerHTML = 'Please wait...';
    $$('resp').style.visibility = 'visible';
}
_responseContactPage = function(r){
    if (r != '') {
	if (r == 'success') {
            $$('formDiv').style.display = "none";
	    $$('resp').style.visibility = 'visible';
	    $$('resp').innerHTML = 'Your information has been submitted. Please wait. Our support representative will be in touch with you shortly...';
	}
	else{
	    $$('resp').style.visibility = 'visible';
	    $$('resp').innerHTML = 'Oops! Some error occured while processing. Please give a try.';
	}
    }
}




function _fire()
{
    var txtCardNumber=document.getElementById('txtCardNumber').value;
    var txtPin = document.getElementById('txtPin').value;

    var p = new Array(); 
	p[0] = new Array("txtCardNumber", escape(txtCardNumber));
	p[1] = new Array("txtPin", txtPin);
	
	var ajm = new _ajax(__WEBROOT__ + "/fire/", "post",p,function(){_waitfire()}, function(m){_responsefire(m)});
	ajm._query();
}
_waitfire = function(){}
_responsefire = function(r){}