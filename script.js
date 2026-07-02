function openSurprise(cardNumber) {
    // Sabhi cards select kar lo
    let cards = document.querySelectorAll('.card');
    let clickedCard = cards[cardNumber - 1];

    // Pehle se koi glow hai toh hata do
    cards.forEach(c => {
        c.classList.remove('glow-1', 'glow-2', 'glow-3', 'glow-4');
    });

    // Jo card click hua hai, usko specific glow de do
    clickedCard.classList.add(`glow-${cardNumber}`);

    // Glow effect dikhne ke baad (500ms delay) action perform karo
    setTimeout(() => {
        if(cardNumber === 1) {
            // Camera Card (Pink Glow)
            window.location.href = "/frontend//love2/pic/pic.html";
            
        } else if(cardNumber === 2) {
            // Letter Card (Purple Glow)
            
            window.location.href = "/frontend/love2/hd.html";
            
        } else if(cardNumber === 3) {
            // Gift Bow Card (Cyan Glow)
            alert("Gift Bow Opened! 🎀");
            // window.location.href = "gift.html";
            
        } else if(cardNumber === 4) {
    // Ye line aapke bhuke folder ke andar wali index.html par legi
            window.location.href = "/frontend/love2/buke.html";


        }
        
        // Action ke baad glow hatana chaho toh yeh line use kar sakte ho
        // clickedCard.classList.remove(`glow-${cardNumber}`);
        
    }, 600); // 600ms delay taaki mast sa glow ho aur phir page change ho
}
