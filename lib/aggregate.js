module.exports = function(req, res){

    // updates tweet count
    var storedCount = localStorage.getItem('tweetCount');
    var newCount = storedCount + count;

    function count_tweets(){
        var count = parseInt(document.countTweets.value);
            count++;
            document.countTweets.value = count;
            localStorage.setItem('tweetCount', newCount);
    };

    // creats an event listener when storing data on local storage
    function storageEvent(event){
        event = event || window.event;
        console.log('storing data on local storage');
        if(window.attachEvent){
            window.attachEvent('onstorage', storageEvent);
        } else {
            window.addEventListener('storage', storageEvent, false);
        }

        // set time to fire events and count hourly
        setInterval(function(){
            count_tweets();
        }, 60 * 60* 1000);
    };

};
