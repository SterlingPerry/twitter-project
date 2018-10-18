const saveTweet = function (event) {
    event.preventDefault();
    const newTweet = $('#tweetBody').val();


    const data = {
        tweet: newTweet,
        username: 'CodeKings'
    }

    $.post('/api/tweet', data)
        .then(function (responseData) {
            console.log(responseData);
            render(responseData.tweet);
        })
}

$('#postTweet').on('click', saveTweet);


const render = function(tweetText){
    $('.middle').append(`<div class="tweet card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-1">
                <img src="img/profile.jpg" class="profile-sm" height="48px" width="48px" />
            </div>
            <div class="col-sm-11">
                <div class="row">
                    <h6 class="profileName col-4">Sterling Perry</h6>
                    <p class="profileHandle col-4">@codekings</p>
                    <p class="tweetDate col-4">Oct 13</p>
                </div>
                <p class="card-text">${tweetText}</p>

            </div>
        </div>

    </div>
</div>`

    )
}

$.get('/api/tweets')
    .then(function(serverData){
        console.log(serverData);
        for (let i = 0; i < serverData.length; i++){
            render(serverData[i].tweet);
        }
    })















// const showModal = function(event){
//     event.preventDefault();
//     $('.modal').show();
// }

// const hideModal = function(event){
//     event.preventDefault();
//     $('.modal').hide();
// }

// $('.modal').on('click', showModal);
// $('.close').on('click', hideModal);

