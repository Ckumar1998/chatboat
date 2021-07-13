function openChatbot(){
    $('#chatbot-cta').css('display','none');
    $('#chatbot').css('display','block');
}
function closeChatbot(){
    $('#chatbot').css('display','none');
    $('#chatbot-cta').css('display','block');
}


 function Krishna(firstName, totalExp,expectedCTC, noticPeriod,skills) {
     this.firstName = firstName;
     this.totalExp = totalExp;
     this.expectedCTC = expectedCTC; 
     this.noticPeriod = noticPeriod; 
     this.skills = skills; 
 }
 